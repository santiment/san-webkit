const { exec: _exec } = require('child_process')

function exec(cmd) {
  return new Promise((resolve) => {
    _exec(cmd, (error, stdout, stderr) => {
      return resolve([stdout, error || stderr])
    }).stdout.pipe(process.stdout)
  })
}

async function publish() {
  const [status] = await exec('git status')
  if (!status.includes('nothing to commit') || status.includes('Your branch is ahead of')) {
    return console.error('❗️ Commit/push your changes first ❗️')
  }

  await exec('git branch -d lib')
  await exec('git checkout -b lib')

  await exec('npm run lib')

  await exec('git add -f lib')
  await exec('git push --set-upstream origin lib --force')

  await exec('git checkout master')

  console.log('✅ Lib published')
}

if (process.argv[2] === '--run') publish()

module.exports = { publish }
