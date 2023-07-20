import fs from 'fs'
import path from 'path'
import { preprocess } from 'svelte/compiler'
import sveltePreprocess from 'svelte-preprocess'
import { LIB, forFile } from './utils.js'
import { replaceModuleAliases } from './imports.js'
import config from '../svelte.config.js'

export const Preprocess = (options) =>
  sveltePreprocess({
    ...options,
  })

export const RoutesPreprocess = (root) => ({
  script: ({ content, filename }) => ({
    code: replaceModuleAliases(root, filename, content),
  }),
})

const routesPreprocess = RoutesPreprocess(LIB)

const LANG_TS_REGEX = / lang="ts"/g

export async function preprocessSvelte(file, filename) {
  const { code } = await preprocess(file.toString(), [routesPreprocess, ...config.preprocess], {
    filename,
  })

  return code.replace(LANG_TS_REGEX, '').replace('lang="scss"', '')
}

export async function prepareSvelte() {
  return forFile(['lib/**/*.svelte'], async (entry) => {
    const filePath = entry.replace('lib/', '')
    const libFilePath = path.resolve(LIB, filePath)

    const file = fs.readFileSync(libFilePath)

    fs.writeFileSync(libFilePath, preprocessSvelte(file.toString(), libFilePath))
  })
}
