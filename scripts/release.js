import { exec as _exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { exec } from './utils.js'

const MAIN_BRANCH = 'next'
const RELEASE_BRANCH = 'lib-release'

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

  const [versionHash] = await exec('git rev-parse --short HEAD', false)

  // Remove previous release branch
  await exec(`git branch -D ${RELEASE_BRANCH} 2>/dev/null`, false)
  await exec(`git push origin --delete ${RELEASE_BRANCH} 2>/dev/null`, false)

  // Create a new release branch
  await exec(`git checkout -b ${RELEASE_BRANCH}`)

  // Building library
  await exec(`npm run prepublishOnly`)

  await exec('git rm --cached -r tests', false)
  await exec('git rm --cached -r src', false)

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
/tests/`,
  )

  await exec('git add -f dist')
  // await exec('git add -f .storybook')
  // await exec('git add -f .gitignore')
  // await exec('git add -f package.json')

  // await exec('git commit -m "Library release"', false)
  // await exec('git push')

  // const [hash] = await exec('git rev-parse --short HEAD', false)
  // await exec('git clean -fd', false)
  // await exec('git checkout master')

  // await exec(`git add -A && git commit -m "[RELEASE] ${versionHash}"`)
  console.log(`\n✅ Library published. Hash: ${versionHash}\n`)
}

if (process.argv[2] === '--run') release()

function updatePkgJson() {
  const filepath = path.resolve('', 'package.json')
  const pkgJson = JSON.parse(fs.readFileSync(filepath))

  delete pkgJson.scripts.install
  delete pkgJson.scripts.postinstall
  delete pkgJson.scripts.prepare

  fs.writeFileSync(filepath, JSON.stringify(pkgJson, null, 2))
}
