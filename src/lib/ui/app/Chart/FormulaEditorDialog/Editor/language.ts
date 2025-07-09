import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { getModelMetadata } from './metadata.js'
import { DEFINITIONS } from './definitions.js'

monaco.languages.register({ id: 'formula-lang' })

monaco.languages.setLanguageConfiguration('formula-lang', {
  comments: {
    blockComment: ['/*', '*/'],
  },
  brackets: [['(', ')']],
  autoClosingPairs: [
    { open: '(', close: ')' },
    { open: '"', close: '"' },
  ],
  surroundingPairs: [
    { open: '(', close: ')' },
    { open: '"', close: '"' },
  ],
})

// NOTE: https://microsoft.github.io/monaco-editor/monarch.html
monaco.languages.setMonarchTokensProvider('formula-lang', {
  //defaultToken: '',

  keywords: DEFINITIONS.map((item) => item.label),

  operators: ['+', '-', '*', '/', '=', ','],

  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%]+/,

  // C# style strings
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  // The main tokenizer for our languages
  tokenizer: {
    root: [
      // identifiers and keywords
      [
        /[a-z_$][\w$]*/,
        {
          cases: {
            //'@typeKeywords': 'keyword',
            '@keywords': 'keyword',
            '@default': 'identifier',
          },
        },
      ],

      // whitespace
      { include: '@whitespace' },

      // delimiters and operators
      [/[{}()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],

      // numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
      [/\d+/, 'number'],

      // delimiter: after number because of .\d floats
      [/[;,.]/, 'delimiter'],

      // strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
      [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
    ],

    whitespace: [
      [/[ \t\r\n]+/, 'white'],
      [/\/\*/, 'comment', '@comment'],
      //[/\/\/.*$/, 'comment'], // single line comment
    ],

    comment: [
      [/[^\/*]+/, 'comment'],
      [/\/\*/, 'comment', '@push'], // nested comment
      ['\\*/', 'comment', '@pop'],
      [/[\/*]/, 'comment'],
    ],

    string: [
      [/[^\\"]+/, 'string'],
      [/@escapes/, 'string.escape'],
      [/\\./, 'string.escape.invalid'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
    ],
  },
})

monaco.languages.registerCompletionItemProvider('formula-lang', {
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
        kind: monaco.languages.CompletionItemKind.Variable,
        insertText: varName,
        range,
        detail: 'Local variable',
      })),

      ...chartVariables.map((varName) => ({
        label: varName,
        kind: monaco.languages.CompletionItemKind.Variable,
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

const SignatureIndex = {} as Record<string, number>
const SIGNATURES = DEFINITIONS.map((item, i) => {
  SignatureIndex[item.label] = i
  return item.signature
})

monaco.languages.registerSignatureHelpProvider('formula-lang', {
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
