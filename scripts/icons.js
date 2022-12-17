const fs = require('fs')
const path = require('path')
const { LIB, forFile, mkdir, getLibPath } = require('./utils')
const { optimizeSvg, newSpriterOptions, getSvgSprite } = require('./svg')

const SPRITES_DIR = path.resolve(LIB, 'sprites')
const SPRITES_OPTIONS = newSpriterOptions({ removeAttrs: { attrs: ['fill'] } })
const ILLUS_OPTIONS = newSpriterOptions()

const SVG_IDS = []

function getSvgId(dir, path) {
  return path.replace(dir, '').replace('.svg', '')
}

async function prepareIcons() {
  mkdir(SPRITES_DIR)

  forFile(['lib/icons/**/*.svg'], async (entry) => {
    const filePath = entry.replace('lib/', '')
    const libFilePath = path.resolve(LIB, filePath)
    const spritesFilePath = path.resolve(SPRITES_DIR, filePath.replace('icons/', ''))

    const svg = optimizeSvg(libFilePath)
    fs.writeFile(libFilePath, svg, () => {})

    const sprite = await getSvgSprite(libFilePath, SPRITES_OPTIONS, svg)
    mkdir(path.dirname(spritesFilePath))
    fs.writeFile(spritesFilePath, sprite, () => {})

    SVG_IDS.push(getSvgId('lib/icons/', entry))
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

    SVG_IDS.push(getSvgId('lib/illus/', entry))
  })
}

function replaceSvgComponentIds() {
  const libFilePath = path.resolve(LIB, 'ui/svg/svelte.d.ts')
  const file = fs.readFileSync(libFilePath)

  const ids = SVG_IDS.map((id) => `"${id}"`).join(' | ')

  fs.writeFileSync(libFilePath, file.toString().replace(`id: string`, `id: ${ids}`))
}

module.exports = { getSvgId, prepareIcons, replaceSvgComponentIds }
