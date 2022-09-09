const fs = require('fs')
const path = require('path')
const svelte = require('svelte/compiler')
const sveltePreprocess = require('svelte-preprocess')
const cssModules = require('svelte-preprocess-cssmodules')
const babel = require('@babel/core')
const { LIB, forFile } = require('./utils')
const { replaceModuleAliases } = require('./imports')

const BABEL = {
  assumptions: { noDocumentAll: true },
  plugins: ['@babel/plugin-proposal-optional-chaining'],
}

const Preprocess = (options) =>
  sveltePreprocess({
    babel: BABEL,
    ...options,
  })

const TEMPS = /(\([\w$\.]* = [\w$\.]*\))/g
function replaceTemps(code) {
  const matches = code.match(TEMPS)
  if (!matches) return code

  matches.reverse().forEach((match) => {
    const [temp, variable] = match.slice(1, -1).split(' = ')
    code = code.replace(match, variable)
    code = code.replace(new RegExp(temp.replace('$', '\\$'), 'g'), variable)
  })

  return code
}

const RoutesPreprocess = (root) => ({
  script: ({ content, filename }) => ({
    code: replaceModuleAliases(root, filename, content),
  }),
  markup: ({ content }) => {
    const expressions = content.match(/{.*(\?\.).*}/g)

    if (expressions) {
      const scriptStart = content.indexOf('<script')
      const scriptEnd = content.indexOf('</script')

      expressions.forEach((expr) => {
        const index = content.indexOf(expr)
        if (index > scriptStart && index < scriptEnd) return

        const result = babel.transform(expr.slice(1, -1), BABEL).code.split('\n')[2].slice(0, -1)
        content = content.replace(expr, `{${replaceTemps(result)}}`)
      })
    }

    return { code: content }
  },
})

const preprocess = Preprocess({
  typescript: { tsconfigDirectory: path.resolve(__dirname, '../') },
})

const routesPreprocess = RoutesPreprocess(LIB)

async function prepareSvelte() {
  return forFile(['lib/**/*.svelte'], async (entry) => {
    const filePath = entry.replace('lib/', '')
    const libFilePath = path.resolve(LIB, filePath)

    const file = fs.readFileSync(libFilePath)
    const { code } = await svelte.preprocess(
      file.toString(),
      [routesPreprocess, preprocess, cssModules()],
      { filename: libFilePath },
    )

    fs.writeFileSync(libFilePath, code.replace(' lang="ts"', '').replace('lang="scss"', ''))
  })
}

module.exports = { prepareSvelte, Preprocess, RoutesPreprocess }
