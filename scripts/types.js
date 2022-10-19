const fs = require('fs')
const path = require('path')
const { copyFile, LIB, forFile } = require('./utils')

const TYPES_PATH = path.resolve(LIB, 'types', 'index.d.ts')

const normalize = (entry) => entry.replace('lib/types', '.').replace('.d.ts', '')

async function prepareTypes() {
  await forFile(['src/**/*.d.ts'], copyFile)

  const file = fs.readFileSync(TYPES_PATH)
  let refs = ''

  await forFile(['lib/types/**/*.d.ts'], (entry) => {
    if (TYPES_PATH.includes(entry)) return

    refs += `/// <reference types="${normalize(entry)}" />\n`
  })

  fs.writeFileSync(TYPES_PATH, refs + file)
}

module.exports = {
  prepareTypes,
}
