import path from 'path'
import fs from 'fs'
import SVGSpriter from 'svg-sprite'
import fg from 'fast-glob'
import { optimize } from 'svgo'

export const optimizeSvg = (path: string) =>
  optimize(fs.readFileSync(path).toString(), { path }).data

export async function getSvgSprite(filePath: string, options: any, svg?: string): Promise<string> {
  const fileName = path.basename(filePath, '.svg')

  return new Promise((resolve) => {
    if (!svg) svg = optimizeSvg(filePath)

    const spriter = new SVGSpriter(options)

    spriter.add(filePath, null, svg)
    spriter.compile((error, result, data) => {
      const sprite = result.symbol.sprite.contents.toString().replace(`id="${fileName}"`, `id="0"`)

      resolve(sprite)
    })
  })
}

function createSpriterOptions(plugins = [] as any[]) {
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

export function writeFile(pathname: string, value: string) {
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
export async function processSvgWithOutput(
  inputPath: string,
  outputDir: string,
  outputSpriteDir: undefined | string,
  spriteOptions: any,
) {
  const basePath = inputPath.replace(LIB_PATH, '')

  const svg = optimizeSvg(inputPath)
  writeFile(outputDir + basePath, svg)

  const sprite = await getSvgSprite(inputPath, spriteOptions, svg)
  await writeFile(outputSpriteDir + basePath, sprite)
}
