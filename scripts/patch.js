#!/usr/bin/env node

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

run()

async function run() {
  const [instructions] = await exec('pnpm patch @sveltejs/kit')

  let patchPath = instructions.split(': ')[1]
  patchPath = patchPath.slice(0, patchPath.indexOf('\n'))

  const RUNTIME_FETCH_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'src/runtime/server/fetch.js'),
    (file) =>
      file.replace(
        '`.${url.hostname}`.endsWith(`.${event.url.hostname}`)',
        "(event.url.hostname.includes('santiment.net') || `.${url.hostname}`.endsWith(`.${event.url.hostname}`))",
      ),
  )

  const PAGE_LOAD_FETCH_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'src/runtime/server/page/load_data.js'),
    (file) =>
      file.replace(
        `const same_origin = url.origin === event.url.origin;`,
        `const same_domain = url.hostname.includes('santiment.net');
const same_origin = same_domain || url.origin === event.url.origin;
        `,
      ),
  )

  await Promise.all([RUNTIME_FETCH_PATCH, PAGE_LOAD_FETCH_PATCH])

  const [, commitError] = await exec(`pnpm patch-commit ${patchPath}`)

  if (commitError) {
    return console.error(commitError)
  }

  console.log(`\n✅ SvelteKit was patched! \n`)
}
