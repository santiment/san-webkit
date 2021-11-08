const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const { optimize } = require('svgo')
const SVGSpriter = require('svg-sprite')

const SRC = path.resolve(__dirname, '../src')
const LIB = path.resolve(__dirname, '../lib')

const getLibPath = (filePath) => path.resolve(LIB, filePath.replace('lib/', ''))

function mkdir(path) {
  if (fs.existsSync(path) === false) {
    fs.mkdirSync(path, { recursive: true }, (err) => {
      if (err) throw err
    })
  }
}

async function forFile(rule, clb, opts) {
  const stream = fg.stream(rule, opts)
  for await (const entry of stream) {
    clb(entry)
  }
}

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

const optimizeSvg = (path) => optimize(fs.readFileSync(path), { path }).data

function getSvgSprite(filePath, options, svg) {
  const fileName = path.basename(filePath, '.svg')

  return new Promise((resolve) => {
    if (!svg) svg = optimizeSvg(filePath)

    const spriter = new SVGSpriter(options)
    spriter.add(filePath, undefined, svg)

    spriter.compile((error, result, data) => {
      const sprite = result.symbol.sprite.contents
        .toString()
        .replace(`id="${fileName}"`, `id="0"`)

      resolve(sprite)
    })
  })
}

module.exports = {
  SRC,
  LIB,
  mkdir,
  getLibPath,
  forFile,
  optimizeSvg,
  newSpriterOptions,
  getSvgSprite,
}
