import 'tsx/esm'

Promise.all([
  import('../src/lib/ui/app/san-formulas/language/definitions.ts'),
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
})
