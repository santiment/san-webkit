const fs = require('fs')
const path = require('path')

const newSpriterOptions = (plugins = []) => ({
  mode: { symbol: { example: false } },
  shape: {
    transform: [
      {
        svgo: {
          plugins: [{ removeXMLNS: true }].concat(plugins),
        },
      },
    ],
  },
})

const optimizeSvg = (path) => require('svgo').optimize(fs.readFileSync(path), { path }).data

function getSvgSprite(filePath, options, svg) {
  const fileName = path.basename(filePath, '.svg')

  return new Promise((resolve) => {
    if (!svg) svg = optimizeSvg(filePath)

    const SVGSpriter = require('svg-sprite')
    const spriter = new SVGSpriter(options)
    spriter.add(filePath, undefined, svg)

    spriter.compile((error, result, data) => {
      const sprite = result.symbol.sprite.contents.toString().replace(`id="${fileName}"`, `id="0"`)

      resolve(sprite)
    })
  })
}

module.exports = {
  optimizeSvg,
  newSpriterOptions,
  getSvgSprite,
}
