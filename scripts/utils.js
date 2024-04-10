const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const { fileURLToPath } = require('url')
const { exec: _exec } = require('child_process')

let ROOT = path.resolve(__dirname, '..')
if (ROOT.includes('node_modules')) {
  ROOT = ROOT.slice(0, ROOT.indexOf('node_modules'))
}

const SRC = path.resolve(ROOT, 'src')
const LIB = path.resolve(ROOT, 'lib')

const getLibPath = (filePath) => path.resolve(LIB, filePath.replace('lib/', ''))

function mkdir(path) {
  if (fs.existsSync(path) === false) {
    fs.mkdirSync(path, { recursive: true }, (err) => {
      if (err) throw err
    })
  }
}

async function forFile(rule, clb, opts) {
  const stream = fg.stream(rule, opts)
  for await (const entry of stream) {
    clb(entry)
  }
}

function copyFile(entry) {
  const filePath = entry.replace('src/', '')
  const libFilePath = path.resolve(LIB, filePath)
  const srcFilePath = path.resolve(SRC, filePath)

  mkdir(path.dirname(libFilePath))

  const file = fs.readFileSync(srcFilePath)
  fs.writeFileSync(libFilePath, file)
}

function exec(cmd, includeStdout = true) {
  return new Promise((resolve) => {
    const executed = _exec(cmd, (error, stdout, stderr) => {
      return resolve([stdout, error || stderr])
    })
    if (includeStdout) executed.stdout.pipe(process.stdout)
  })
}

module.exports = {
  ROOT,
  SRC,
  LIB,
  getLibPath,
  mkdir,
  forFile,
  copyFile,
  exec,
}
