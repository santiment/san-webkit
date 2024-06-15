import { exec as _exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { exec, forFile } from './utils.js'
import { fetchStatusAssetLogos, replaceAssetLogosSource } from './asset-logos.js'
import { ILLUS_OPTIONS, SPRITES_OPTIONS, processSvgWithOutput } from './svg.js'

const MAIN_BRANCH = 'next'
const RELEASE_BRANCH = 'lib-release'
const ROOT = path.resolve('.')

export async function release() {
  await processSvg()
  await replaceStaticAssetLogos()

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

  await updateLibraryPackageJson()

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
}

if (process.argv[2] === '--run') release()

async function getReleaseTag() {
  let [gitHash] = await exec('git rev-parse --short HEAD', false)
  gitHash = gitHash.trim()

  const date = new Date()
  const day = date.getUTCDay().toString().padStart(2, '0')
  const month = date.getUTCMonth().toString().padStart(2, '0')
  const year = date.getUTCFullYear().toString().slice(-2)

  const releaseTag = `lib-${gitHash}-${day}${month}${year}`

  return { releaseTag, gitHash }
}

async function updateLibraryPackageJson() {
  const exports = {}

  await forFile([path.resolve(ROOT, 'src/lib/ui/**/index.ts')], async (entry) => {
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

  delete pkgJson.scripts.install
  delete pkgJson.scripts.postinstall
  delete pkgJson.scripts.prepare

  fs.writeFileSync(filepath, JSON.stringify(pkgJson, null, 2))
}

async function processTypescriptFiles() {
  const exports = {}

  await forFile(['./plugins/*.{js,ts}', './scripts/*.{js,ts}', './*.config.js'], async (entry) => {
    const rawPath = entry.slice(0, -3)

    await exec(
      `npx tsc ./${entry} --allowJs --declaration --lib esnext --module nodenext --moduleResolution nodenext`,
      false,
    )

    exports['./' + rawPath + '.js'] = {
      types: './' + rawPath + '.d.ts',
      import: './' + rawPath + '.js',
    }
  })

  return exports
}

async function replaceStaticAssetLogos() {
  const logos = JSON.stringify(await fetchStatusAssetLogos())
  await forFile(['./dist/**/AssetLogo.svelte'], (entry) => {
    const file = fs.readFileSync(entry)
    fs.writeFileSync(entry, replaceAssetLogosSource(file.toString(), logos))
  })
}

async function processSvg() {
  async function process(path, options) {
    await forFile(path, async (entry) => {
      processSvgWithOutput(entry, './dist/', './dist/sprites/', options, './dist/')
    })
  }

  await process(['./dist/icons/**/*.svg'], SPRITES_OPTIONS)
  await process(['./dist/illus/**/*.svg'], ILLUS_OPTIONS)
}
