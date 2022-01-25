const fs = require('fs')
const path = require('path')
const {
  LIB,
  forFile,
  mkdir,
  getLibPath,
  optimizeSvg,
  newSpriterOptions,
  getSvgSprite,
} = require('./utils')

const SPRITES_DIR = path.resolve(LIB, 'sprites')
const SPRITES_OPTIONS = newSpriterOptions({ removeAttrs: { attrs: ['fill'] } })
const ILLUS_OPTIONS = newSpriterOptions()

async function prepareIcons() {
  mkdir(SPRITES_DIR)

  forFile(['lib/icons/*.svg'], async (entry) => {
    const filePath = entry.replace('lib/', '')
    const libFilePath = path.resolve(LIB, filePath)
    const spritesFilePath = path.resolve(
      SPRITES_DIR,
      filePath.replace('icons/', '')
    )

    const svg = optimizeSvg(libFilePath)
    fs.writeFile(libFilePath, svg, () => {})

    const sprite = await getSvgSprite(libFilePath, SPRITES_OPTIONS, svg)
    fs.writeFile(spritesFilePath, sprite, () => {})
  })

  forFile(['lib/illus/**/*.svg'], async (entry) => {
    const filePath = entry.replace('lib/', '')
    const libFilePath = getLibPath(entry)
    const spritesFilePath = path.resolve(SPRITES_DIR, filePath)

    mkdir(path.dirname(spritesFilePath))

    const svg = optimizeSvg(libFilePath)
    fs.writeFile(libFilePath, svg, () => {})

    const sprite = await getSvgSprite(libFilePath, ILLUS_OPTIONS, svg)
    fs.writeFile(spritesFilePath, sprite, () => {})
  })
}

module.exports = { prepareIcons }
