import fs from 'fs'

import { processFormulasModules } from './san-formulas-check.js'
import { exec } from './utils.js'
import { build } from './build.js'

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

  const { releaseTag, gitHash } = await getReleaseTag()

  // Remove previous release branch
  await exec(`git branch -D ${RELEASE_BRANCH} 2>/dev/null`, false)
  await exec(`git push origin --delete ${RELEASE_BRANCH} 2>/dev/null`, false)

  // Create a new release branch
  await exec(`git checkout -b ${RELEASE_BRANCH}`)

  // Processing @RELEASE directives
  await processFormulasModules()

  // Building library
  await build()

  await exec('git rm --cached -r tests', false)
  await exec('git rm --cached -r src', false)
  await exec('git rm --cached -r static', false)
  await exec('git rm --cached -r vite.config.ts', false)

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
vite.config.ts
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

  await exec(`git clean -df`, false)
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
