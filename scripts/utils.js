const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')

const ROOT = path.resolve(__dirname, '..')
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

module.exports = {
  ROOT,
  SRC,
  LIB,
  mkdir,
  getLibPath,
  forFile,
  copyFile,
}
