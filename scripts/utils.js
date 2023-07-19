import fs from 'fs'
import path from 'path'
import fg from 'fast-glob'
import { fileURLToPath } from 'url'

export let ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
if (ROOT.includes('node_modules')) {
  ROOT = ROOT.slice(0, ROOT.indexOf('node_modules'))
}

export const SRC = path.resolve(ROOT, 'src')
export const LIB = path.resolve(ROOT, 'lib')

export const getLibPath = (filePath) => path.resolve(LIB, filePath.replace('lib/', ''))

export function mkdir(path) {
  if (fs.existsSync(path) === false) {
    fs.mkdirSync(path, { recursive: true }, (err) => {
      if (err) throw err
    })
  }
}

export async function forFile(rule, clb, opts) {
  const stream = fg.stream(rule, opts)
  for await (const entry of stream) {
    clb(entry)
  }
}

export function copyFile(entry) {
  const filePath = entry.replace('src/', '')
  const libFilePath = path.resolve(LIB, filePath)
  const srcFilePath = path.resolve(SRC, filePath)

  mkdir(path.dirname(libFilePath))

  const file = fs.readFileSync(srcFilePath)
  fs.writeFileSync(libFilePath, file)
}
