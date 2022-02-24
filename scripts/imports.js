const fs = require('fs')
const path = require('path')
const { LIB, forFile } = require('./utils')

const ROOT_IMPORT = "from '@/"
const IMPORTS_REGEXP = new RegExp(ROOT_IMPORT, 'g')
async function prepareImports() {
  forFile(['lib/**/*.ts', 'lib/**/*.js', 'lib/**/*.svelte'], async (entry) => {
    const filePath = entry.replace('lib/', '')
    const libFilePath = path.resolve(LIB, filePath)
    const pathToRoot = path.relative(entry, LIB).slice(1)

    const file = fs.readFileSync(libFilePath)
    fs.writeFileSync(libFilePath, file.toString().replace(IMPORTS_REGEXP, `from '${pathToRoot}/`))
  })
}

module.exports = { prepareImports }
