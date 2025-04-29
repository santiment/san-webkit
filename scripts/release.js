import fs from 'fs'
import path from 'path'

import { exec, forFile } from './utils.js'
import { fetchStatusAssetLogos, replaceAssetLogosSource } from './asset-logos.js'
import {
  fetchMetricsRestrictions,
  replaceDefaultMetricsRestrictionsSource,
} from './metrics-restrictions.js'
import { ILLUS_OPTIONS, SPRITES_OPTIONS, processSvgWithOutput, replaceSvgIdsType } from './svg.js'

const MAIN_BRANCH = 'next'
const RELEASE_BRANCH = 'lib-release'
const ROOT = path.resolve('.')

export async function release() {
  const [currentBranchMsg] = await exec('git rev-parse --abbrev-ref HEAD', false)

  if (currentBranchMsg.includes(MAIN_BRANCH) === false) {
    return console.error(
      ` ❗️Current branch is "${currentBranchMsg.trim()}" but should be "${MAIN_BRANCH}" ❗️`,
    )
  }

  const [status] = await exec('git status')
  if (status.includes('Your branch is ahead of') || !status.includes('nothing to commit')) {
    return console.error('❗️ Commit/push your changes first ❗️')
  }

  await exec('git pull', false)

  const { releaseTag, gitHash } = await getReleaseTag()

  // Remove previous release branch
  await exec(`git branch -D ${RELEASE_BRANCH} 2>/dev/null`, false)
  await exec(`git push origin --delete ${RELEASE_BRANCH} 2>/dev/null`, false)

  // Create a new release branch
  await exec(`git checkout -b ${RELEASE_BRANCH}`)

  // Building library
  await exec(`npm run prepublishOnly`)

  await processSvg()
  await replaceStaticAssetLogos()
  await replaceStaticMetricsRestrictions()
  await updateLibraryPackageJson()
  await replaceViteConfigSrcImports()

  await exec('git rm --cached -r tests', false)
  await exec('git rm --cached -r src', false)
  await exec('git rm --cached -r static', false)

  fs.writeFileSync(
    '.gitignore',
    `.DS_Store
node_modules
/build
/.svelte-kit
/package
.env
.env.*
!.env.example
vite.config.js.timestamp-*
vite.config.ts.timestamp-*
*storybook.log


/mkcert

.husky
/static/
/src/
/tests/`,
  )

  await exec(`git add . -A`)
  await exec(`git commit -m "[RELEASE] ${gitHash}"`)

  //  Make a new tag off of the latest build
  await exec(`git checkout ${MAIN_BRANCH}`)

  await exec(`git tag "${releaseTag}" ${RELEASE_BRANCH}`)
  await exec(`git push origin ${RELEASE_BRANCH}`)
  await exec(`git push origin "${releaseTag}"`)

  console.log(`\n✅ Library published. Tag: ${releaseTag} (git: ${gitHash})\n`)

  await exec(`npm run prepare`, false)
}

if (process.argv[2] === '--run') release()

async function getReleaseTag() {
  let [gitHash] = await exec('git rev-parse --short HEAD', false)
  gitHash = gitHash.trim()

  const date = new Date()
  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = date.getUTCFullYear().toString().slice(-2)

  const releaseTag = `lib-${gitHash}-${day}${month}${year}`

  return { releaseTag, gitHash }
}

async function updateLibraryPackageJson() {
  const exports = {}

  await forFile([path.resolve(ROOT, 'src/lib/**/index.ts')], async (entry) => {
    const rawPath = entry.slice(path.resolve(ROOT, 'src/lib').length, -'/index.ts'.length)

    exports['.' + rawPath] = {
      types: './dist' + rawPath + '/index.d.ts',
      svelte: './dist' + rawPath + '/index.js',
    }
  })
  const tsExports = await processTypescriptFiles()

  const filepath = path.resolve(ROOT, 'package.json')
  const pkgJson = JSON.parse(fs.readFileSync(filepath))

  pkgJson.exports = { ...exports, ...tsExports, ...pkgJson.exports }
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

async function replaceViteConfigSrcImports() {
  await forFile(['./vite.config.*'], (entry) => {
    const file = fs.readFileSync(entry)
    fs.writeFileSync(entry, file.toString().replaceAll('./src/lib/', './dist/'))
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
