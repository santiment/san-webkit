const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')

const ROOT = path.resolve(__dirname, '..')
const SRC = path.resolve(ROOT, 'src')
const LIB = path.resolve(ROOT, 'lib')

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

function copyFile(entry) {
  const filePath = entry.replace('src/', '')
  const libFilePath = path.resolve(LIB, filePath)
  const srcFilePath = path.resolve(SRC, filePath)

  mkdir(path.dirname(libFilePath))

  const file = fs.readFileSync(srcFilePath)
  fs.writeFileSync(libFilePath, file)
}

module.exports = {
  ROOT,
  SRC,
  LIB,
  mkdir,
  getLibPath,
  forFile,
  optimizeSvg,
  newSpriterOptions,
  getSvgSprite,
  copyFile,
}
