import { exec as _exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { exec } from './utils.js'

function patchSvelteKitFile(path, clb) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, null, (err, data) => {
      if (err) {
        reject(err)
        return console.error(err)
      }

      fs.writeFile(path, clb(data.toString()), (err) => {
        if (err) {
          reject(err)
          return console.error(err)
        }

        resolve()
      })
    })
  })
}

async function patchSvelteKit() {
  const [instructions] = await exec('pnpm patch @sveltejs/kit')

  let patchPath = instructions.split(': ')[1]
  patchPath = patchPath.slice(0, patchPath.indexOf('\n'))

  // const CLIENT_SERVER_DEFINES_FILE = path.resolve(patchPath, 'src/exports/vite/index.js')
  const CLIENT_SERVER_DEFINES_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'src/exports/vite/index.js'),
    (file) =>
      file.replace(
        `const prefix = \`\${kit.appDir}/immutable\`;`,
        `const prefix = \`\${kit.appDir}/immutable\`;

      	Object.assign(config.define, ssr ? config.serverDefines : config.clientDefines)`,
      ),
  )

  // const UNIVERSAL_QUERY_FILE = path.resolve(patchPath, 'src/runtime/server/page/load_data.js')
  const UNIVERSAL_QUERY_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'src/runtime/server/page/load_data.js'),
    (file) =>
      file.replace(
        `await node.universal.load.call(null, {`,
        `await node.universal.load.call(null, {
		request: event.request,
		getClientAddress: event.getClientAddress, `,
      ),
  )

  await Promise.all([CLIENT_SERVER_DEFINES_PATCH, UNIVERSAL_QUERY_PATCH])

  const [, commitError] = await exec(`pnpm patch-commit ${patchPath}`)

  if (commitError) {
    return console.error(commitError)
  }

  console.log(`\n✅ SvelteKit was patched! \n`)
}

patchSvelteKit()
