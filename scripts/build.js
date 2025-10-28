import fs from 'fs'
import path from 'path'

import { exec, forFile } from './utils.js'
import { fetchStatusAssetLogos, replaceAssetLogosSource } from './asset-logos.js'
import {
  fetchMetricsRestrictions,
  replaceDefaultMetricsRestrictionsSource,
} from './metrics-restrictions/index.js'
import { ILLUS_OPTIONS, SPRITES_OPTIONS, processSvgWithOutput, replaceSvgIdsType } from './svg.js'

const ROOT = path.resolve('.')

export async function build() {
  await exec(`npm run prepublishOnly`)

  await processSvg()
  await replaceStaticAssetLogos()
  await replaceStaticMetricsRestrictions()
  await updateLibraryPackageJson()
  await replaceSrcImports()
}

if (process.argv[2] === '--run') build()

async function updateLibraryPackageJson() {
  const exports = {}

  await forFile(
    [path.resolve(ROOT, 'src/lib/**/index.ts'), '!src/lib/san-formulas/'],
    async (entry) => {
      const rawPath = entry.slice(path.resolve(ROOT, 'src/lib').length, -'/index.ts'.length)

      exports['.' + rawPath] = {
        types: './dist' + rawPath + '/index.d.ts',
        svelte: './dist' + rawPath + '/index.js',
      }
    },
  )
  const tsExports = await processTypescriptFiles()

  const filepath = path.resolve(ROOT, 'package.json')
  const pkgJson = JSON.parse(fs.readFileSync(filepath))

  pkgJson.exports = { ...exports, ...tsExports, ...pkgJson.exports }
  pkgJson.files = [
    'tsconfig.*',
    '*.config.*',
    //'vite.config.*',
    //'eslint.config.*',
    //'tailwind.config.*',
    //'svelte.config.*',
    //'postcss.config.*',
    ...pkgJson.files,
  ]
  pkgJson.scripts = {}
  pkgJson['lint-staged'] = {}

  fs.writeFileSync(filepath, JSON.stringify(pkgJson, null, 2))
  fs.rmdirSync(path.resolve(ROOT, '.husky'), { recursive: true, force: true })
}

async function processTypescriptFiles() {
  const exports = {}

  await forFile(
    ['./plugins/*.{js,ts}', './scripts/*.{js,ts}', './*.config.{js,ts}'],
    async (entry) => {
      const rawPath = entry.slice(0, -3)

      await exec(
        `npx tsc ./${entry} --allowJs --declaration --lib esnext --module nodenext --moduleResolution nodenext`,
        false,
      )

      exports['./' + rawPath + '.js'] = {
        types: './' + rawPath + '.d.ts',
        default: './' + rawPath + '.js',
      }
    },
  )

  return exports
}

async function replaceStaticAssetLogos() {
  const logos = JSON.stringify(await fetchStatusAssetLogos())
  await forFile(['./dist/**/AssetLogo.svelte'], (entry) => {
    const file = fs.readFileSync(entry)
    fs.writeFileSync(entry, replaceAssetLogosSource(file.toString(), logos))
  })
}

async function replaceStaticMetricsRestrictions() {
  const data = JSON.stringify(await fetchMetricsRestrictions())
  await forFile(['./dist/**/metrics-registry/restrictions/api.js'], (entry) => {
    const file = fs.readFileSync(entry)
    fs.writeFileSync(entry, replaceDefaultMetricsRestrictionsSource(file.toString(), data))
  })
}

async function replaceSrcImports() {
  await forFile(['./vite.config.*', './plugins/vite.*'], (entry) => {
    const file = fs.readFileSync(entry)
    fs.writeFileSync(entry, file.toString().replaceAll('/src/lib/', '/dist/'))
  })

  await forFile(['./dist/**/metrics-registry/restrictions/api.*'], (entry) => {
    const file = fs.readFileSync(entry)
    fs.writeFileSync(
      entry,
      file.toString().replace("from '$scripts/", "from '../../../../scripts/"),
    )
  })
}

async function processSvg() {
  const ids = []
  async function process(path, options) {
    await forFile(path, async (entry) => {
      const id = entry.replace('./dist/icons/', '').replace('./dist/illus/', '').replace('.svg', '')
      ids.push(id)

      processSvgWithOutput(entry, './dist/', './dist/sprites/', options, './dist/')
    })
  }

  await process(['./dist/icons/**/*.svg'], SPRITES_OPTIONS)
  await process(['./dist/illus/**/*.svg'], ILLUS_OPTIONS)

  await forFile(['./dist/**/core/Svg/types.d.ts'], (entry) => {
    const file = fs.readFileSync(entry)

    fs.writeFileSync(entry, replaceSvgIdsType(file.toString(), ids))
  })
}
