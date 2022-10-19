const fs = require('fs')
const path = require('path')
const { SRC, LIB, mkdir, forFile } = require('./utils')
const { prepareTypes, indexTypes } = require('./types')
const { prepareSvelte } = require('./svelte')
const { prepareImports } = require('./imports')
const { prepareIcons } = require('./icons')

function copyFile(entry) {
  const filePath = entry.replace('src/', '')
  const libFilePath = path.resolve(LIB, filePath)
  const srcFilePath = path.resolve(SRC, filePath)

  mkdir(path.dirname(libFilePath))

  const file = fs.readFileSync(srcFilePath)
  fs.writeFileSync(libFilePath, file)
}

async function main() {
  await forFile(['src/**', '!src/**/*.ts'], copyFile)

  prepareTypes()
  indexTypes()
  prepareIcons()

  await prepareSvelte()
  prepareImports()
}
main()
