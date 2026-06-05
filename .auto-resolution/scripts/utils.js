import { exec as _exec } from 'child_process'
import path from 'path'
import url from 'url'
import fs from 'fs'

import fg from 'fast-glob'

/**
 *
 * @param {string} cmd
 * @param {boolean} includeStdout
 * @returns
 */
export function exec(cmd, includeStdout = true) {
  return new Promise((resolve) => {
    const executed = _exec(cmd, (error, stdout, stderr) => {
      return resolve([stdout, error || stderr])
    })
    if (includeStdout) executed.stdout.pipe(process.stdout)
  })
}

/**
 *
 * @param {string[]} rule
 * @param {(entry: string) => Promise<any>} clb
 * @param {*} [opts]
 * @returns
 */
export async function forFile(rule, clb, opts) {
  const stream = fg.stream(rule, opts)
  const promise = new Promise((resolve) => stream.on('end', (data) => resolve(data)))
  const awaits = [promise]

  stream.on('data', (data) => awaits.push(clb(data)))

  return promise.then(() => Promise.all(awaits))
}

export function __dirname() {
  return path.dirname(url.fileURLToPath(import.meta.url))
}

/**
 *
 * @param {string} path
 * @param {(file: string) => string} clb
 * @returns
 */
export function patchSvelteKitFile(path, clb) {
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
