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

  await exec('git checkout lib')
  const [mergeMsg] = await exec(
    'git merge master -X theirs -m "Merge branch \'master\' into lib"',
    false,
  )

  if (mergeMsg.includes('merge failed')) {
    return
  }

  await exec('git rm --cached -r lib', false)
  await exec('git rm --cached -r .storybook', false)
  await exec('git rm --cached -r stories', false)
  await exec('git rm --cached -r .husky', false)

  await exec('npm run lib')

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
