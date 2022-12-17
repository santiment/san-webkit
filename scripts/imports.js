const fs = require('fs')
const { resolve, relative } = require('path')
const { LIB, forFile, ROOT } = require('./utils')

const ROUTE_REGEX = /from ('|")@\//g
const IMPORT_REGEX = /import ('|")@\//g
const DYN_IMPORT_REGEX = /import\(('|")@\//g
const REQUIRE_REGEX = /require\(('|")@\//g

async function prepareImports() {
  forFile(['lib/**/*.ts', 'lib/**/*.js', 'lib/**/*.svelte'], async (entry) => {
    const filePath = resolve(ROOT, entry)
    fs.writeFileSync(filePath, replaceModuleAliases(LIB, entry, fs.readFileSync(filePath)))
  })
}

function replaceModuleAliases(root, filePath, fileContent) {
  const diff = relative(filePath, root).replace('..', '.')

  return fileContent
    .toString()
    .replace(ROUTE_REGEX, `from $1${diff}/`)
    .replace(IMPORT_REGEX, `import $1${diff}/`)
    .replace(DYN_IMPORT_REGEX, `import($1${diff}/`)
    .replace(REQUIRE_REGEX, `require($1${diff}/`)
    .replace(/from 'san-chart/g, `from '@santiment-network/chart`)
    .replace(/from 'webkit/g, `from 'san-webkit/lib`)
    .replace(/from 'studio/g, `from 'san-studio/lib`)
    .replace(/from '@cmp\//g, `from '${diff}/components/`)
}

module.exports = { prepareImports, replaceModuleAliases }
