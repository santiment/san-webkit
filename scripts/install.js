const { emitDts } = require('svelte2tsx')
const { LIB, forFile, copyFile } = require('./utils')
const { prepareTypes } = require('./types')
const { prepareSvelte } = require('./svelte')
const { prepareImports } = require('./imports')
const { prepareIcons, replaceSvgComponentIds } = require('./icons')

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
