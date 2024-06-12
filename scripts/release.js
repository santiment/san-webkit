import { exec as _exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { exec } from './utils.js'

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

  let [versionHash] = await exec('git rev-parse --short HEAD', false)
  versionHash = versionHash.trim()

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

#/src/
/tests/`,
  )

  await exec(`git add -A`)
  await exec(`git commit -m "[RELEASE] ${versionHash}"`)

  //  Make a new tag off of the latest build
  const tag = `lib-${versionHash}`
  await exec(`git checkout ${MAIN_BRANCH}`)

  let [res1, err1] = await exec(`git tag "${tag}" ${RELEASE_BRANCH}`)
  console.log('tag ', res1, err1)

  await exec(`git push origin ${RELEASE_BRANCH}`)
  await exec(`git push origin "${tag}"`)

  console.log(`\n✅ Library published. Tag: ${tag}\n`)
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
