import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

const FunctionSignature = (fnName: string, ...args: string[]) => ({
  label: fnName,
  detail: 'Function', // Displayed in completion as a description on the right

  kind: CompletionKind.Function,
  insertTextRules: CompletionInsertTextRule.InsertAsSnippet,

  signature: {
    label: `${fnName}(${args.join(', ')})`,
    parameters: args.map((label) => ({ label })),
  },
})

type TCompletionItemKind = typeof monaco.languages.CompletionItemKind
type TCompletionItemKindRecord = {
  [K in keyof TCompletionItemKind]?: TCompletionItemKind[K]
}
const CompletionKind = {
  Function: 1,
} satisfies TCompletionItemKindRecord

type TCompletionItemInsertTextRule = typeof monaco.languages.CompletionItemInsertTextRule
type TCompletionItemInsertTextRuleRecord = {
  [K in keyof TCompletionItemInsertTextRule]?: TCompletionItemInsertTextRule[K]
}
const CompletionInsertTextRule = {
  InsertAsSnippet: 4,
} satisfies TCompletionItemInsertTextRuleRecord

export const DEFINITIONS = [
  {
    ...FunctionSignature('sma', 'data: Timeseries', 'period: Number'),

    documentation: 'Simple Moving Average',
    insertText: 'sma(${1:m1}, ${2:30})',
  },

  {
    ...FunctionSignature('ema', 'data: Timeseries', 'period: Number'),

    documentation: 'Exponential Moving Average',
    insertText: 'ema(${1:m1}, ${2:30})',
  },

  {
    ...FunctionSignature('rsi', 'data: Timeseries', 'period: Number'),

    documentation: 'Relative Strength Index',
    insertText: 'rsi(${1:m1}, ${2:30})',
  },

  {
    ...FunctionSignature('asset_metric', 'api_metric: String', 'asset_slug: String'),

    documentation: 'Asset Metric',
    insertText: 'asset_metric(${1:"price_usd"}, ${2:"bitcoin"})',
  },
]
