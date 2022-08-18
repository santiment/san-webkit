const { exec: _exec } = require('child_process')
const fs = require('fs')

function exec(cmd, includeStdout = true) {
  return new Promise((resolve) => {
    const executed = _exec(cmd, (error, stdout, stderr) => {
      return resolve([stdout, error || stderr])
    })
    if (includeStdout) executed.stdout.pipe(process.stdout)
  })
}

async function publish() {
  const [status] = await exec('git status')
  if (status.includes('Your branch is ahead of') || !status.includes('nothing to commit')) {
    return console.error('❗️ Commit/push your changes first ❗️')
  }

  await exec('git branch -d lib')
  await exec('git checkout -b lib')

  await exec('npm run lib')

  await exec('git rm --cached -r stories', false)
  await exec('git rm --cached -r .storybook', false)
  await exec('git rm --cached -r .husky', false)

  const gitignore = fs.readFileSync('.gitignore').toString().replace('lib/', '')
  fs.writeFileSync('.gitignore', gitignore)

  await exec('git add -f lib')
  await exec('git add -f .gitignore')

  await exec('git commit -m "Library release"', false)
  await exec('git push --set-upstream origin lib --force')

  await exec('git clean -fd', false)
  await exec('git checkout master')

  const [hash] = await exec('git rev-parse --short HEAD', false)

  console.log(`\n✅ Library published. Hash: ${hash}\n`)
}

if (process.argv[2] === '--run') publish()

module.exports = { publish }
