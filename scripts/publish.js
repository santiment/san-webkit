const { exec: _exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const { ROOT } = require('./utils')

function exec(cmd, includeStdout = true) {
  return new Promise((resolve) => {
    const executed = _exec(cmd, (error, stdout, stderr) => {
      return resolve([stdout, error || stderr])
    })
    if (includeStdout) executed.stdout.pipe(process.stdout)
  })
}

function updatePkgJson() {
  const filepath = path.resolve(ROOT, 'package.json')
  const pkgJson = JSON.parse(fs.readFileSync(filepath))

  delete pkgJson.scripts.install
  delete pkgJson.scripts.postinstall
  delete pkgJson.scripts.prepare

  fs.writeFileSync(filepath, JSON.stringify(pkgJson, null, 2))
}

async function publish() {
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

  if (!currentBranchMsg.includes('lib')) {
    return console.error(` Current branch is "${currentBranchMsg}" but should be "lib" ❗️`)
  }

  const [mergeMsg] = await exec(
    'git merge master -X theirs -m "Merge branch \'master\' into lib"',
    false,
  )
  if (mergeMsg.includes('merge failed')) {
    return console.error('❗️ Resolve merge conflicts and then run script again ❗️')
  }

  await exec('git rm --cached -r lib', false)
  await exec('git rm --cached -r .storybook', false)
  await exec('git rm --cached -r stories', false)
  await exec('git rm --cached -r .husky', false)

  await exec('npm run lib')
  updatePkgJson()

  const gitignore = fs.readFileSync('.gitignore').toString().replace('lib/', '.husky\nstories')
  fs.writeFileSync('.gitignore', gitignore)

  await exec('git add -f lib')
  await exec('git add -f .gitignore')

  await exec('git commit -m "Library release"', false)
  await exec('git push')

  const [hash] = await exec('git rev-parse --short HEAD', false)
  await exec('git clean -fd', false)
  await exec('git checkout master')

  console.log(`\n✅ Library published. Hash: ${hash}\n`)
}

if (process.argv[2] === '--run') publish()

module.exports = { publish }
