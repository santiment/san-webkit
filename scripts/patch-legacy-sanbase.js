#!/usr/bin/env node

import path from 'path'
import { exec, patchSvelteKitFile } from './utils.js'

run()

async function run() {
  const [instructions] = await exec('pnpm patch @sveltejs/kit')

  let patchPath = instructions.split(': ')[1]
  patchPath = patchPath.slice(0, patchPath.indexOf('\n'))

  const LEGACY_REQUEST_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'src/runtime/server/page/load_data.js'),
    (file) =>
      file.replace(
        `const result = await node.universal.load.call(null, {`,
        `const result = await node.universal.load.call(null, {
       		request: event.request,
          getClientAddress: event.getClientAddress,
          `,
      ),
  )

  const CONFIG_DEFINES_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'src/exports/vite/index.js'),
    (file) =>
      file.replace(
        `const prefix = \`\${kit.appDir}/immutable\`;`,
        `const prefix = \`\${kit.appDir}/immutable\`;
        Object.assign(config.define, ssr ? config.serverDefines : config.clientDefines)`,
      ),
  )

  await Promise.all([LEGACY_REQUEST_PATCH, CONFIG_DEFINES_PATCH])

  const [, commitError] = await exec(`pnpm patch-commit ${patchPath}`)

  if (commitError) {
    return console.error(commitError)
  }

  console.log(`\n✅ Legacy SvelteKit was patched! \n`)
}
