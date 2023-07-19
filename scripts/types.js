import fs from 'fs'
import path from 'path'
import { copyFile, LIB, forFile } from './utils.js'

const normalize = (entry) => entry.replace('lib/types', '.').replace('.d.ts', '')

export async function copyTypes() {
  return forFile(['src/**/*.d.ts'], copyFile)
}

export async function indexTypes(libPath = LIB) {
  const indexPath = path.resolve(libPath, 'types', 'index.d.ts')

  const file = fs.readFileSync(indexPath)
  let refs = ''

  await forFile(['lib/types/**/*.d.ts'], (entry) => {
    if (indexPath.includes(entry)) return

    refs += `/// <reference types="${normalize(entry)}" />\n`
  })

  fs.writeFileSync(indexPath, refs + file)
}

export async function prepareTypes() {
  await copyTypes()
  indexTypes()
}
