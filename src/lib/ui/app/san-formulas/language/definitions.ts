// @RELEASE

import type { TSeries } from '$ui/app/Chart/ctx/series.svelte.js'
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import { escapeTag } from '$lib/utils/escape.js'

import { addDocumentationSnippetSyntax } from './syntax-highlight.js'

// ...args: [Signature, Default value in snippet][]
const FunctionSignature = (fnName: string, ...args: [string, string][]) => {
  const signatureArgs = args.map((arg) => arg[0])
  return {
    label: fnName,
    detail: 'Function', // Displayed in completion as a description on the right

    kind: CompletionKind.Function,
    insertTextRules: CompletionInsertTextRule.InsertAsSnippet,
    insertText: `${fnName}(${args.map((arg, i) => '${' + (i + 1) + ':' + arg[1] + '}').join(', ')})`,

    signature: {
      label: `${fnName}(${signatureArgs.join(', ')})`,
      parameters: signatureArgs.map((label) => ({ label })),
    },
  }
}

type TCompletionItemKind = typeof monaco.languages.CompletionItemKind
type TCompletionItemKindRecord = {
  [K in keyof TCompletionItemKind]?: TCompletionItemKind[K]
}
const CompletionKind = {
  Function: 1,
  Variable: 4,
} satisfies TCompletionItemKindRecord

type TCompletionItemInsertTextRule = typeof monaco.languages.CompletionItemInsertTextRule
type TCompletionItemInsertTextRuleRecord = {
  [K in keyof TCompletionItemInsertTextRule]?: TCompletionItemInsertTextRule[K]
}
const CompletionInsertTextRule = {
  InsertAsSnippet: 4,
} satisfies TCompletionItemInsertTextRuleRecord

export type TDocMetric = {
  apiMetricName: string
  label: string
  fullLabel: string
  selector: string
  fullSelector: string
}
export const createVariableDefinition = (
  name: string,
  extra: {
    detail: string
    documentation?: string
    metric?: TDocMetric
  },
) => ({
  label: name,
  kind: CompletionKind.Variable,
  insertText: name,
  documentation: '',
  ...extra,
})

export function createChartVariableDocumentation(
  metric: TDocMetric,
  varName: string,
  formula: TSeries['formula'],
) {
  return addDocumentationSnippetSyntax(
    formula
      ? escapeTag`<p>The "${metric.label}" is a user defined formula metric. This metric was added to the current chart and is available as <code>${varName}</code> variable in formula.</p>
<pre><code>sma(${varName}, 30)</code></pre>
<p>The "${metric.label}" has a following formula:</p>
<pre><code>${formula.expr}</code></pre>`
      : escapeTag`<p>The "${metric.label}" is an asset metric with a selector <code>${metric.fullSelector}</code>. This metric was added to the current chart and is available as <code>${varName}</code> variable in formula.</p>
<pre><code>sma(${varName}, 30)</code></pre>
<p>You can also define this metric as a local variable.</p>
<pre><code>x1 = asset_metric(&quot;${metric.apiMetricName}&quot;, &quot;${metric.selector}&quot;)
</code></pre>`,
  )
}

export const DEFINITIONS = [
  {
    ...FunctionSignature('sma', ['data: Timeseries', 'm1'], ['period: Number', '30']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `Simple Moving Average (SMA) indicator calculates the average of a timeseries over a specified period by summing closing values and dividing by the number of periods. It smooths timeseries data to identify trends by reducing noise from short-term fluctuations.
\`\`\`
sma(m1, 30)
\`\`\`

You can also save the result in a local variable for later use.  
\`\`\`
x1 = sma(m2, 7)
\`\`\``,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('ema', ['data: Timeseries', 'm1'], ['period: Number', '30']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Exponential Moving Average (EMA) indicator gives more weight to recent prices in a timeseries over a specified period, reacting faster to price changes than a Simple Moving Average. It's commonly used to spot trends early and filter out minor price fluctuations.
\`\`\`
ema(m1, 30)
\`\`\`

You can also save the result in a local variable for later use.  
\`\`\`
x1 = ema(m2, 7)
\`\`\``,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('rsi', ['data: Timeseries', 'm1'], ['period: Number', '30']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Relative Strength Index (RSI) measures the speed and magnitude of price movements in a timeseries over a specified period, indicating whether an asset is overbought (high RSI) or oversold (low RSI). It helps traders identify potential reversals or trend strength.  
\`\`\`
rsi(m1, 30)
\`\`\`

You can also save the result in a local variable for later use.  
\`\`\`
x1 = rsi(m2, 7)
\`\`\``,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature(
      'asset_metric',
      ['api_metric: String', '"price_usd"'],
      ['asset_slug: String', '"bitcoin"'],
    ),
    icon: 'asset-small',

    // @RELEASE:MD-COMPILE:START
    documentation: `Fetches a \`timeseries\` metric (e.g., price, volume) for a given cryptocurrency (like Bitcoin) from Sanbase API. 
\`\`\`
asset_metric("price_usd", "bitcoin")
\`\`\`

You can also save the result in a local variable for later use.  
\`\`\`
# Lorem ipsum 123 "string" only as comment

x1 = asset_metric("price_usd", "bitcoin")
\`\`\``,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('selector_from', ['chart_metric: Timeseries', 'm1']),
    icon: 'alert',

    // @RELEASE:MD-COMPILE:START
    documentation: `Fetches a \`timeseries\` metric (e.g., price, volume) for a given cryptocurrency (like Bitcoin) from Sanbase API. 
\`\`\`
selector_from(m1)
\`\`\`

You can also save the result in a local variable for later use.  
\`\`\`
m1_selector = selector_from(m1)
x1 = asset_metric("price_usd", m1_selector)
\`\`\``,
    // @RELEASE:MD-COMPILE:END
  },
]

// @RELEASE:DELETE:START
// eslint-disable-next-line import/order
import { marked } from 'marked'
DEFINITIONS.forEach((item) => {
  item.documentation = addDocumentationSnippetSyntax(marked.parse(item.documentation) as string)
})
// @RELEASE:DELETE:END
