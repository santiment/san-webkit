const fs = require('fs')
const path = require('path')
const { copyFile, LIB, forFile } = require('./utils')

const normalize = (entry) => entry.replace('lib/types', '.').replace('.d.ts', '')

async function prepareTypes() {
  await forFile(['src/**/*.d.ts'], copyFile)
}

async function indexTypes(libPath = LIB) {
  const indexPath = path.resolve(libPath, 'types', 'index.d.ts')

  const file = fs.readFileSync(indexPath)
  let refs = ''

  await forFile(['lib/types/**/*.d.ts'], (entry) => {
    if (indexPath.includes(entry)) return

    refs += `/// <reference types="${normalize(entry)}" />\n`
  })

  fs.writeFileSync(indexPath, refs + file)
}

module.exports = {
  prepareTypes,
  indexTypes,
}
