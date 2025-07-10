import { languages } from 'monaco-editor/esm/vs/editor/editor.api.js'

import { LANGUAGE_ID } from './language.js'
import { DEFINITIONS } from './definitions.js'

const SignatureIndex = {} as Record<string, number>
const SIGNATURES = DEFINITIONS.map((item, i) => {
  SignatureIndex[item.label] = i
  return item.signature
})

languages.registerSignatureHelpProvider(LANGUAGE_ID, {
  signatureHelpTriggerCharacters: ['(', ','],
  provideSignatureHelp: (model, position) => {
    // Get the text until the current position
    const textUntilPosition = model.getValueInRange({
      startLineNumber: 1,
      startColumn: 1,
      endLineNumber: position.lineNumber,
      endColumn: position.column,
    })

    // TODO: Get back to it
    //const _lastCall = textUntilPosition.match(/(\w+)\(/g)?.at(-1)
    //if (_lastCall) {
    //  console.log(textUntilPosition.slice(textUntilPosition.lastIndexOf(a)))
    //}

    // Simple parser to find the current function call
    const functionCallMatch = textUntilPosition.match(/(\w+)\s*\(([^)]*)$/)
    if (!functionCallMatch) {
      return null
    }

    const functionName = functionCallMatch[1]
    const currentArgText = functionCallMatch[2]

    // Count commas in the current argument text to determine active parameter
    const activeParameter = currentArgText.split(',').length - 1

    const index = SignatureIndex[functionName]
    return {
      value: {
        activeSignature: 0,
        activeParameter,
        signatures: SIGNATURES.slice(index, index + 1),
      },
      dispose: () => {},
    }
  },
})
