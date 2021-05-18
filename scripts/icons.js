const fs = require('fs')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const { optimize } = require('svgo')
const { LIB, forFile, mkdir } = require('./utils')

const SPRITE_OPTIONS = {
  mode: {
    symbol: {
      example: false,
    },
  },
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            { removeXMLNS: true },
            { removeAttrs: { attrs: ['fill'] } },
          ],
        },
      },
    ],
  },
}

const SPRITES_DIR = path.resolve(LIB, 'sprites')

async function prepareIcons() {
  mkdir(SPRITES_DIR)

  forFile(['lib/icons/*.svg'], async (entry) => {
    const filePath = entry.replace('lib/', '')
    const libFilePath = path.resolve(LIB, filePath)
    const spritesFilePath = path.resolve(
      SPRITES_DIR,
      filePath.replace('icons/', ''),
    )
    const fileName = path.basename(filePath, '.svg')

    const { data } = optimize(fs.readFileSync(libFilePath), {
      path: libFilePath,
    })

    fs.writeFile(libFilePath, data, () => {})

    const spriter = new SVGSpriter(SPRITE_OPTIONS)
    spriter.add(libFilePath, undefined, data)

    spriter.compile((error, result, data) => {
      const sprite = result.symbol.sprite.contents
        .toString()
        .replace(`id="${fileName}"`, `id="0"`)

      fs.writeFile(spritesFilePath, sprite, () => {})
    })
  })
}

module.exports = { prepareIcons }
