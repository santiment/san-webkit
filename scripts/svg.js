import path from 'path'
import fs from 'fs'

import { forFile } from './utils.js'

/**
 *
 * @param {string} path
 * @returns
 */
export const optimizeSvg = async (path) =>
  (await import('svgo')).optimize(fs.readFileSync(path).toString(), { path }).data

/**
 *
 * @param {string} filePath
 * @param {any} options
 * @param {string} [svg]
 * @returns {Promise<string>}
 */
export async function getSvgSprite(filePath, options, svg) {
  const fileName = path.basename(filePath, '.svg')
  const SVGSpriter = (await import('svg-sprite')).default

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    if (!svg) svg = await optimizeSvg(filePath)

    const spriter = new SVGSpriter(options)

    spriter.add(filePath, null, svg)
    spriter.compile((_error, result, _data) => {
      const sprite = result.symbol.sprite.contents.toString().replace(`id="${fileName}"`, `id="0"`)

      resolve(sprite)
    })
  })
}

/**
 *
 * @param {any[]} plugins
 */
function createSpriterOptions(plugins = []) {
  return {
    mode: { symbol: { example: false } },
    shape: {
      transform: [
        {
          svgo: {
            plugins: ['removeXMLNS', ...plugins],
          },
        },
      ],
    },
  }
}

/**
 *
 * @param {string} pathname
 * @param {string} value
 */
export function writeFile(pathname, value) {
  return new Promise((resolve) => {
    const resultDir = path.dirname(pathname)
    fs.mkdirSync(resultDir, { recursive: true })
    fs.writeFile(pathname, value, () => {
      resolve(null)
    })
  })
}

export const SPRITES_OPTIONS = createSpriterOptions([
  { name: 'removeAttrs', params: { attrs: 'fill' } },
])
export const ILLUS_OPTIONS = createSpriterOptions()

const LIB_PATH = './src/lib/'

/**
 *
 * @param {string} inputPath
 * @param {string} outputDir
 * @param {undefined | string} outputSpriteDir
 * @param {any} spriteOptions
 */
export async function processSvgWithOutput(
  inputPath,
  outputDir,
  outputSpriteDir,
  spriteOptions,
  replacePath = LIB_PATH,
) {
  const basePath = inputPath.replace(replacePath, '')

  const svg = await optimizeSvg(inputPath)
  writeFile(outputDir + basePath, svg)

  const sprite = await getSvgSprite(inputPath, spriteOptions, svg)
  await writeFile(outputSpriteDir + basePath, sprite)
}

/**
 *
 * @param {string} src - Source code
 * @param {Array<string>} ids - Array of IDs
 * @returns {string}
 */
export const replaceSvgIdsType = (src, ids) =>
  src.replace(
    'type TSvgId = string',
    `type TSvgId = ${ids.map((id) => `"${id}"`).join(' | ')} | (string & {})`,
  )

export async function combineSvgsToSprite() {
  /**
   *
   * @param {string[]} path
   * @param {any} options
   */
  async function process(path, options) {
    await forFile(path, async (entry) => {
      processSvgWithOutput(entry, './dist/', './dist/sprites/', options, './dist/')
    })
  }

  await process(['./dist/icons/**/*.svg'], SPRITES_OPTIONS)
  await process(['./dist/illus/**/*.svg'], ILLUS_OPTIONS)
}

export async function getSvgIds() {
  /**
   * @type {string[]}
   */
  const ids = []

  /**
   *
   * @param {string[]} path
   */
  async function process(path) {
    await forFile(path, async (entry) => {
      const id = entry.replace('./dist/icons/', '').replace('./dist/illus/', '').replace('.svg', '')
      ids.push(id)
    })
  }

  await process(['./dist/icons/**/*.svg'])
  await process(['./dist/illus/**/*.svg'])

  return ids
}

/**
 *
 * @param {string} src - Source code
 * @param {Array<string>} svgs - Stringified JSON array
 * @returns {string}
 */
export const replaceAvailableSvgs = (src, svgs) =>
  src.replace('AVAILABLE_IDS = []', `AVAILABLE_IDS = ${JSON.stringify(svgs)}`)
