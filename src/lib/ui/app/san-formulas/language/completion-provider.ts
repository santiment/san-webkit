import { languages } from 'monaco-editor/esm/vs/editor/editor.api.js'

import { LANGUAGE_ID } from './language.js'
import { getModelMetadata } from './metadata.js'
import { DEFINITIONS } from './definitions.js'

languages.registerCompletionItemProvider(LANGUAGE_ID, {
  provideCompletionItems: function (model, position) {
    const { localVariables = [], chartVariables = [] } = getModelMetadata(model)

    const word = model.getWordUntilPosition(position)
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn,
    }

    const suggestions = [
      ...localVariables.map((varName) => ({
        label: varName,
        kind: languages.CompletionItemKind.Variable,
        insertText: varName,
        range,
        detail: 'Local variable',
      })),

      ...chartVariables.map((varName) => ({
        label: varName,
        kind: languages.CompletionItemKind.Variable,
        insertText: varName,
        range,
        detail: 'Chart metric',
      })),

      // Functions
      ...DEFINITIONS,
    ].map((item) => ({ range, ...item }))

    return { suggestions }
  },
})
