import { parse } from 'svelte/compiler'
import { walk } from 'estree-walker'
import MagicString from 'magic-string'

export function componentStyleSelector() {
  return {
    markup: ({ content, filename }) => {
      if (filename.includes('node_modules/')) return
      if (content.lastIndexOf('</style') === -1) return

      // TODO: Parse only non-script content [@vanguard | 18 Jul, 2023]
      const ast = parse(content)
      const s = new MagicString(content, { filename })

      const ComponentEntries = {}

      walk(ast.html, {
        enter(node) {
          if (node.type !== 'InlineComponent') return
          const { name } = node

          if (ComponentEntries[name]) {
            ComponentEntries[name].tags.push(node)
          } else {
            ComponentEntries[name] = {
              name,
              styles: [],
              tags: [node],
            }
          }
        },
      })

      walk(ast.css, {
        enter(node) {
          if (node.type === 'Selector') {
            this.skip()

            let selector = null
            node.children.forEach((child) => {
              switch (child.type) {
                case 'ClassSelector': {
                  if (!selector) return
                  if (!selector.classSelector) selector.classSelector = []
                  return selector.classSelector.push(child)
                }
                case 'TypeSelector': {
                  const { name } = child
                  if (name[0].toUpperCase() === name[0]) {
                    const entry = ComponentEntries[name]
                    selector = entry && child
                    return entry?.styles.push(child)
                  }
                }
                default: {
                  selector = null
                }
              }
            })
          }
        },
      })

      Object.values(ComponentEntries).forEach(({ name, tags, styles }) => {
        if (styles.length === 0) return

        const className = `s-${hash(filename + name)}`

        tags.forEach((node) => {
          const classAttribute = node.attributes.find(({ name }) => name === 'class')
          if (classAttribute) {
            const { start, end } = classAttribute

            let [, value] = s.slice(start, end).split('=')
            if (value[0] === '{') value = `"${value}"`
            value = `${value.slice(0, -1)} ${className}${value.slice(-1)}`

            s.overwrite(start, end, `class=${value}`)
          } else {
            s.appendLeft(node.start + name.length + 1, ` class="${className}"`)
          }
        })

        styles.forEach(({ start, end, classSelector }) => {
          const classes =
            classSelector
              ?.map((node) => {
                end = node.end
                return `.${node.name}`
              })
              .join('') || ''
          s.overwrite(start, end, `:global(.${className}${classes})`, { storeName: true })
        })
      })

      return {
        code: s.toString(),
        map: s.generateMap({ hires: true, file: filename }),
      }
    },
  }
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
const regex_return_characters = /\r/g
function hash(str) {
  str = str.replace(regex_return_characters, '')
  let hash = 5381
  let i = str.length

  while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i)
  return (hash >>> 0).toString(36)
}
