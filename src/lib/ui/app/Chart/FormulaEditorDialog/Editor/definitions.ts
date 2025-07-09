import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

export const DEFINITIONS = [
  {
    label: 'sma',
    detail: 'Function', // Displayed in completion as a description on the right

    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'Simple Moving Average',
    insertText: 'sma(${1:m1}, ${2:30})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

    signature: {
      label: 'sma(data: Timeseries, period: number)',
      parameters: [{ label: 'data: Timeseries' }, { label: 'period: number' }],
    },
  },

  {
    label: 'ema',
    detail: 'Function', // Displayed in completion as a description on the right

    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'Exponential Moving Average',
    insertText: 'ema(${1:m1}, ${2:30})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

    signature: {
      label: 'ema(data: Timeseries, period: number)',
      parameters: [{ label: 'data: Timeseries' }, { label: 'period: number' }],
    },
  },

  {
    label: 'rsi',
    detail: 'Function', // Displayed in completion as a description on the right

    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'Relative Strength Index',
    insertText: 'rsi(${1:m1}, ${2:30})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

    signature: {
      label: 'rsi(data: Timeseries, period: number)',
      parameters: [{ label: 'data: Timeseries' }, { label: 'period: number' }],
    },
  },
]
