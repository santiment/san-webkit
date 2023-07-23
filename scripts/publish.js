import { exec as _exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { ROOT, LIB, exec, forFile } from './utils.js'
import { replaceModuleAliases } from './imports.js'
import { preprocessSvelte } from './svelte.js'

function updatePkgJson() {
  const filepath = path.resolve(ROOT, 'package.json')
  const pkgJson = JSON.parse(fs.readFileSync(filepath))

  delete pkgJson.scripts.install
  delete pkgJson.scripts.postinstall
  delete pkgJson.scripts.prepare

  fs.writeFileSync(filepath, JSON.stringify(pkgJson, null, 2))
}

export async function publish() {
  const [status] = await exec('git status')
  if (status.includes('Your branch is ahead of') || !status.includes('nothing to commit')) {
    return console.error('❗️ Commit/push your changes first ❗️')
  }

  await exec('git pull', false)

  await exec('git checkout lib')

  const [, pullError] = await exec('git pull', false)
  // const [, pullError] = await exec('git pull --ff -X theirs -m "Merge branch \'master\' into lib"', false)
  if (pullError) {
    return console.error(`${pullError}  \n Failed to do "git pull" ❗️`)
  }

  const [currentBranchMsg] = await exec('git rev-parse --abbrev-ref HEAD', false)

  if (currentBranchMsg.includes('lib') === false) {
    return console.error(
      ` ❗️Current branch is "${currentBranchMsg.trim()}" but should be "lib" ❗️`,
    )
  }

  const [mergeMsg] = await exec(
    'git merge master -X theirs -m "Merge branch \'master\' into lib"',
    false,
  )

  if (mergeMsg.includes('merge failed')) {
    await exec('git checkout --theirs .', false)
    await exec('git add .', false)
    // return console.error('❗️ Resolve merge conflicts and then run script again ❗️')
  }

  await exec('git rm --cached -r lib', false)
  // await exec('git rm --cached -r .storybook', false)
  await exec('git rm --cached -r stories', false)
  await exec('git rm --cached -r _stories', false)
  await exec('git rm --cached -r .husky', false)

  // TODO: Add node_modules to exclude [@vanguard | 23 Jul, 2023]
  await exec('npx tsc .storybook/**/*.ts -d --module esnext')
  await exec('npm run lib')
  updatePkgJson()

  await forFile(['.storybook/**/*'], async (entry) => {
    let file = replaceModuleAliases(LIB, entry, fs.readFileSync(entry).toString())

    if (entry.endsWith('svelte')) {
      file = await preprocessSvelte(file, entry)
    }

    fs.writeFileSync(entry, file)
  })

  const gitignore = fs
    .readFileSync('.gitignore')
    .toString()
    .replace('lib/', '.husky\nstories\n_stories')
  fs.writeFileSync('.gitignore', gitignore)

  await exec('git add -f .storybook')
  await exec('git add -f lib')
  await exec('git add -f .gitignore')
  await exec('git add -f package.json')

  await exec('git commit -m "Library release"', false)
  await exec('git push')

  const [hash] = await exec('git rev-parse --short HEAD', false)
  await exec('git clean -fd', false)
  await exec('git checkout master')

  console.log(`\n✅ Library published. Hash: ${hash}\n`)
}

if (process.argv[2] === '--run') publish()
