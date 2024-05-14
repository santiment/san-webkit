export const ICONS = prepareIconsData(
  import.meta.glob('../../../lib/icons/**', { query: '?raw', eager: true, import: 'default' }),
  '../../../lib/icons/',
)

export const ICON_CATEGORIES = categorize(ICONS)
console.log(ICON_CATEGORIES)

function extractAttributeValue(string: string, anchor: string) {
  const start = string.indexOf(anchor) + anchor.length + 2
  const end = string.indexOf('"', start)
  return string.slice(start, end).toString()
}

function extractMetadata(string: string) {
  const start = string.indexOf('<!--{')
  if (start === -1) return

  const meta = string.slice(start + 5, string.indexOf('}-->'))

  if (meta) {
    try {
      return JSON.parse(`{${meta}}`)
    } catch (e) {
      console.error(e)
    }
  }
}

function prepareIconsData(imported: Record<string, string>, path: string) {
  const ICONS = []

  for (const importedPath in imported) {
    const svg = imported[importedPath]
    const key = importedPath.replace(path, '').replace('.svg', '')

    const width = extractAttributeValue(svg, 'width')
    const height = extractAttributeValue(svg, 'height')

    ICONS.push({
      key,
      width,
      height,

      svg,
      sprite: createSprite(svg, key, width, height),
      meta: extractMetadata(svg),
    })
  }

  return ICONS
}

function createSprite(svg: string, key: string, width: string, height: string) {
  svg = svg.replace(/fill="[#\S]+"/g, '').replaceAll('\n', '')

  const match = svg.match(/>(.)+<\/svg>/)
  const children = match?.[0].slice(1, -6)

  return `<?xml version="1.0" encoding="utf-8"?><svg style="display:none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 ${width} ${height}" id="${key}">${children}</symbol></svg>
<svg style="width:${width}px;height:${height}px"><use xlink:href="#${key}" /></svg>
  `
}

function categorize<T extends { meta?: { category: string } }>(icons: T[]) {
  const categories = { _: [] } as Record<string, typeof icons>

  icons.forEach((icon) => {
    if (!icon.meta) {
      return categories._.push(icon)
    }

    const { category } = icon.meta

    if (!categories[category]) {
      categories[category] = []
    }

    categories[category].push(icon)
  })

  return categories
}
