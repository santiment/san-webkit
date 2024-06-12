import { exec as _exec } from 'child_process'
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
