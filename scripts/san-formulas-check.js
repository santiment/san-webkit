import 'tsx/esm'

import { readFile, writeFile } from 'node:fs/promises'

const DEFINITIONS_MODULE_PATH = 'src/lib/ui/app/san-formulas/language/definitions.ts'

const importedLanguageModulePromise = import('../' + DEFINITIONS_MODULE_PATH)

Promise.all([
  importedLanguageModulePromise,
  import('../src/lib/ui/app/san-formulas/math/index.ts'),
]).then(([language, spec]) => {
  const languageDefinitions = new Set(language.DEFINITIONS.map((item) => item.label))

  for (const key in spec.DEFINITIONS) {
    const isSupportedInLanguage = languageDefinitions.has(key)
    if (isSupportedInLanguage) continue

    throw new Error(
      `[san-formulas] Language definitions (/language/definitions.ts) is missing "${key}" defined in the spec (/math/index.ts)`,
    )
  }

  return definitionsFilePromise
})

export async function processFormulasModules() {
  const language = await importedLanguageModulePromise

  const definitionsFilePromise = readFile(DEFINITIONS_MODULE_PATH)
    .then((file) => {
      const source = file.toString()

      let mdCompileIndex = 0

      return source
        .replace(/\/\/ @RELEASE:DELETE:START([\s\S]+?)\/\/ @RELEASE:DELETE:END/g, '')
        .replace(
          /\/\/ @RELEASE:MD-COMPILE:START([\s\S]+?)\/\/ @RELEASE:MD-COMPILE:END/g,
          () =>
            `documentation: ${JSON.stringify(language.DEFINITIONS[mdCompileIndex++].documentation)},`,
        )
    })
    .then((source) => writeFile(DEFINITIONS_MODULE_PATH, source))

  return definitionsFilePromise
}
