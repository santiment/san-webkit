// @RELEASE

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
  formula?: TMetricFormula,
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
<pre><code>x1 = api_metric(&quot;${metric.apiMetricName}&quot;, &quot;${metric.selector}&quot;)
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
    documentation: `The Exponential Moving Average (EMA) indicator gives more weight to recent values in a timeseries over a specified period, reacting faster to value changes than a Simple Moving Average. It's commonly used to spot trends early and filter out minor price fluctuations.
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
    documentation: `The Relative Strength Index (RSI) measures the speed and magnitude of value movements in a timeseries over a specified period, indicating whether an asset is overbought (high RSI) or oversold (low RSI). It helps traders identify potential reversals or trend strength.
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
    ...FunctionSignature('atr', ['data: OHLC_Timeseries', 'm1'], ['period: Number', '14']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Average True Range (ATR) is a technical analysis indicator that measures market volatility by averaging the range of price movement over a specified period.  It does not indicate direction, but rather the intensity of price swings, making it useful for setting stop-losses and gauging breakout strength.
\`\`\`
# m1 metric must include OHLC (open/high/low/close) data
atr(m1, 14)
\`\`\`

You can also save the result in a local variable for later use.
\`\`\`
x1 = atr(m1, 14)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('z_score', ['data: Timeseries', 'm1'], ['period: Number', '14']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Z Score measures how many standard deviations a current data point in a timeseries is from its average value over a specified period, helping traders identify extremes and potential mean reversion points. A high positive or negative score suggests the value is unusually far from its recent average.
\`\`\`
z_score(m1, 14)
\`\`\`

You can also save the result in a local variable for later use.
\`\`\`
x1 = z_score(m1, 14)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('pow', ['base: Number | Timeseries', 'm1'], ['power: Number', '10']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Power (pow) function raises a number or each value in a timeseries to the power of a given base (default is 10). Commonly used to amplify small price changes or scale values exponentially for custom indicator calculations.

\`\`\`
# 100 raised to the power of 2 is 10,000
pow(100, 2)
\`\`\`

Apply the power function to a timeseries to amplify its values.
\`\`\`
# Each data point raised to the power of 2
pow(m1, 2)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('log', ['a: Number | Timeseries', 'm1'], ['base?: Number', '10']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Logarithm (log) function calculates the logarithm of a number or each value in a timeseries to a specified base (default is natural logarithm). Commonly used to normalize price data, measure proportional change, or compress large value ranges for smoother analysis.
\`\`\`
# The logarithm of 100 to the base 10 is 2
log(100, 10)
\`\`\`

Apply the logarithm function to a timeseries to normalize its values.
\`\`\`
# Calculating the base-10 logarithm for every data point
log(m1, 10)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('exp', ['a: Number | Timeseries', 'm1']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Exponential (exp) function calculates the exponential value (e raised to the power) of a number or each value in a timeseries. Useful for reversing logarithmic scaling, modeling continuous growth, and calculating certain volatility or probability metrics in finance.
\`\`\`
original_values = exp(log(m1))
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('absolute', ['a: Number | Timeseries', 'm1']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Absolute function returns the non-negative value of a number or each value in a timeseries. Useful for calculating distances from zero, such as the magnitude of price changes or the size of deviations from a moving average.
\`\`\`
# Absolute value of -100 is 100
absolute(-100)
\`\`\`

Create a timeseries of absolute values:
\`\`\`
absolute(m1)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('shift', ['data: Timeseries', 'm1'], ['period: Number', '1']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Shift function moves a timeseries forward or backward in time by a specified period (depends on the granularity of the timeseries), allowing you to compare current values with past or future data points.
\`\`\`
# Shifting a timeseries by 1 period to the right
shift(m1, 1)
\`\`\`

Shifting a daily closing price series by -1 day creates a lagged series, which is commonly used to calculate day-over-day price changes or to build custom momentum indicators.
\`\`\`
# E.g. m1 is a price timeseries with granularity of 1 day
# Shifting a timeseries by 1 day to the left
yesterday_price = shift(m1, -1)
daily_change = m1 - yesterday_price
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('diff', ['data: Timeseries', 'm1'], ['period: Number', '1']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Difference (diff) function calculates the simple difference between the current value in a timeseries and a value at a specified offset period.
\`\`\`
# Calculate a difference between the current and next data point
diff(m1, 1)
\`\`\`

With a daily series, it subtracts the previous day's price from today's price, showing the day-over-day change.
\`\`\`
# E.g. m1 is a price timeseries with granularity of 1 day
diff(m1, -1)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('cumprod', ['data: Timeseries', 'm1']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Cumulative Product (cumprod) function calculates the running cumulative product of all values in a timeseries, which multiplies each new value by the previous product.
\`\`\`
cumprod(m1)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('cumsum', ['data: Timeseries', 'm1']),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `The Cumulative Sum (cumsum) function calculates the running total (cumulative sum) of all values in a timeseries, continuously adding each new value to the previous sum.
\`\`\`
cumsum(m1)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature(
      'api_metric',
      ['api_metric: String', '"price_usd"'],
      ['selector: Selector', '{slug: "bitcoin"}'],
    ),
    icon: 'asset-small',

    // @RELEASE:MD-COMPILE:START
    documentation: `Fetches a timeseries metric (e.g., price, volume) for a given cryptocurrency (like Bitcoin) from Sanbase API.
\`\`\`
api_metric("price_usd", {slug: "bitcoin"})
\`\`\`

You can also save the result in a local variable for later use.
\`\`\`
x1 = api_metric("price_usd", {slug: "bitcoin"})
\`\`\``,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature('selector_from', ['chart_metric: Timeseries', 'm1']),
    icon: 'alert',

    // @RELEASE:MD-COMPILE:START
    documentation: `Extracts the selector (e.g., "Bitcoin") from an existing chart metric. Useful for reusing the dynamic selector in other functions.
\`\`\`
selector_from(m1)
\`\`\`

You can also save the result in a local variable for later use.
\`\`\`
m1_selector = selector_from(m1)
x1 = api_metric("price_usd", m1_selector)
\`\`\``,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature(
      'if',
      ['condition: Boolean', 'm1 > m2'],
      ['if_true: Number | Timeseries', '1'],
      ['if_false: Number | Timeseries', '-1'],
    ),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `
\`\`\`
# ==, !=, <, <=, >, >=
if(m1 > m2, 1, 0)
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },

  {
    ...FunctionSignature(
      'backtest',
      ['price_data: Timeseries', 'm1'],
      ['signals: Timeseries', 'm1 / m1'],
      ['options: Object', '{ capital: 1000, fee: 0.001, stop_loss: 0, take_profit: 0 }'],
    ),
    icon: 'stack',

    // @RELEASE:MD-COMPILE:START
    documentation: `
\`\`\`
# \`0\` means the option is disabled
backtest(m1, m1 / m1, { capital: 1000, fee: 0.001, stop_loss: 0, take_profit: 0 })
\`\`\`
`,
    // @RELEASE:MD-COMPILE:END
  },
]

// @RELEASE:DELETE:START
// eslint-disable-next-line import/order
import { marked } from 'marked'
// eslint-disable-next-line import/order
import type { TMetricFormula } from '$lib/ctx/metrics-registry/types/index.js'
DEFINITIONS.forEach((item) => {
  item.documentation = addDocumentationSnippetSyntax(marked.parse(item.documentation) as string)
})
// @RELEASE:DELETE:END
