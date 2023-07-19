import { emitDts } from 'svelte2tsx'
import { createRequire } from 'node:module'
import { LIB, forFile, copyFile } from './utils.js'
import { prepareTypes } from './types.js'
import { prepareSvelte } from './svelte.js'
import { prepareImports } from './imports.js'
import { prepareIcons, replaceSvgComponentIds } from './icons.js'

const require = createRequire(import.meta.url)

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
