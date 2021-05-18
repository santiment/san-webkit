const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')

const SRC = path.resolve(__dirname, '../src')
const LIB = path.resolve(__dirname, '../lib')

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

module.exports = {
  SRC,
  LIB,
  mkdir,
  forFile,
}
