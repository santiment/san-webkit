import fs from 'fs'
import path from 'path'
import { LIB, forFile, mkdir, getLibPath } from './utils.js'
import { optimizeSvg, newSpriterOptions, getSvgSprite } from './svg.cjs'

const SPRITES_DIR = path.resolve(LIB, 'sprites')
const SPRITES_OPTIONS = newSpriterOptions({ removeAttrs: { attrs: ['fill'] } })
const ILLUS_OPTIONS = newSpriterOptions()

const SVG_IDS = []

export function getSvgId(dir, path) {
  return path.replace(dir, '').replace('.svg', '')
}

export async function prepareIcons() {
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

export function replaceSvgComponentIds() {
  const libFilePath = path.resolve(LIB, 'ui/Svg/svelte.d.ts')
  const file = fs.readFileSync(libFilePath)

  const ids = SVG_IDS.map((id) => `"${id}"`).join(' | ')

  fs.writeFileSync(libFilePath, file.toString().replace(`id: string`, `id: ${ids}`))
}
