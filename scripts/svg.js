import path from 'path'
import fs from 'fs'

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

  return new Promise(async (resolve) => {
    if (!svg) svg = await optimizeSvg(filePath)

    const spriter = new SVGSpriter(options)

    spriter.add(filePath, null, svg)
    spriter.compile((error, result, data) => {
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
