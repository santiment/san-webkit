#!/usr/bin/env node

import path from 'path'

import { exec, patchSvelteKitFile } from './utils.js'

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
        '(url.hostname.includes(process.env.CORS_HOSTNAME) || `.${url.hostname}`.endsWith(`.${event.url.hostname}`))',
      ),
  )

  const PAGE_LOAD_FETCH_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'src/runtime/server/page/load_data.js'),
    (file) =>
      file.replace(
        `const same_origin = url.origin === event.url.origin;`,
        `const same_domain = url.hostname.includes(process.env.CORS_HOSTNAME);
const same_origin = same_domain || url.origin === event.url.origin;
        `,
      ),
  )

  await Promise.all([RUNTIME_FETCH_PATCH, PAGE_LOAD_FETCH_PATCH])

  const [, commitError] = await exec(`pnpm patch-commit ${patchPath}`)

  if (commitError) {
    return console.error(commitError)
  }

  await patchAdapterNode()

  console.log(`\n✅ SvelteKit was patched! \n`)
}

async function patchAdapterNode() {
  const [instructions] = await exec('pnpm patch @sveltejs/adapter-node')

  let patchPath = instructions.split(': ')[1]
  patchPath = patchPath.slice(0, patchPath.indexOf('\n'))

  const ASSETS_HEADERS_PATCH = patchSvelteKitFile(
    path.resolve(patchPath, 'files/handler.js'),
    (file) =>
      file.replace(
        `res.setHeader('cache-control', 'public,max-age=31536000,immutable');`,
        `res.setHeader('cache-control', 'public,max-age=31536000,immutable');
        if(pathname.endsWith('.woff2')) res.setHeader('Access-Control-Allow-Origin', '*')`,
      ),
  )

  await Promise.all([ASSETS_HEADERS_PATCH])

  const [, commitError] = await exec(`pnpm patch-commit ${patchPath}`)

  if (commitError) {
    return console.error(commitError)
  }
}
