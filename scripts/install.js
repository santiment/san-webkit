const fs = require('fs')
const path = require('path')
const { emitDts } = require('svelte2tsx')
const { SRC, LIB, ROOT, mkdir, forFile } = require('./utils')
const { prepareTypes } = require('./types')
const { prepareSvelte } = require('./svelte')
const { prepareImports } = require('./imports')
const { prepareIcons, replaceSvgComponentIds } = require('./icons')

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

  prepareIcons()

  await prepareSvelte()

  await emitDts({
    declarationDir: LIB,
    svelteShimsPath: require.resolve('svelte2tsx/svelte-shims.d.ts'),
  })

  replaceSvgComponentIds()
  prepareImports()
}
main()
