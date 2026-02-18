// @RELEASE
import { escapeTag } from '../../../../utils/escape.js';
import { addDocumentationSnippetSyntax } from './syntax-highlight.js';
// ...args: [Signature, Default value in snippet][]
const FunctionSignature = (fnName, ...args) => {
    const signatureArgs = args.map((arg) => arg[0]);
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
    };
};
const CompletionKind = {
    Function: 1,
    Variable: 4,
};
const CompletionInsertTextRule = {
    InsertAsSnippet: 4,
};
export const createVariableDefinition = (name, extra) => ({
    label: name,
    kind: CompletionKind.Variable,
    insertText: name,
    documentation: '',
    ...extra,
});
export function createChartVariableDocumentation(metric, varName, formula) {
    return addDocumentationSnippetSyntax(formula
        ? escapeTag `<p>The "${metric.label}" is a user defined formula metric. This metric was added to the current chart and is available as <code>${varName}</code> variable in formula.</p>
<pre><code>sma(${varName}, 30)</code></pre>
<p>The "${metric.label}" has a following formula:</p>
<pre><code>${formula.expr}</code></pre>`
        : escapeTag `<p>The "${metric.label}" is an asset metric with a selector <code>${metric.fullSelector}</code>. This metric was added to the current chart and is available as <code>${varName}</code> variable in formula.</p>
<pre><code>sma(${varName}, 30)</code></pre>
<p>You can also define this metric as a local variable.</p>
<pre><code>x1 = api_metric(&quot;${metric.apiMetricName}&quot;, &quot;${metric.selector}&quot;)
</code></pre>`);
}
export const DEFINITIONS = [
    {
        ...FunctionSignature('sma', ['data: Timeseries', 'm1'], ['period: Number', '30']),
        icon: 'stack',
        documentation: "<p>Simple Moving Average (SMA) indicator calculates the average of a timeseries over a specified period by summing closing values and dividing by the number of periods. It smooths timeseries data to identify trends by reducing noise from short-term fluctuations.</p>\n<pre><code><span class=\"mtk6\">sma</span>(m1, <span class=\"mtk7\">30</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.</p>\n<pre><code>x1 = <span class=\"mtk6\">sma</span>(m2, <span class=\"mtk7\">7</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('ema', ['data: Timeseries', 'm1'], ['period: Number', '30']),
        icon: 'stack',
        documentation: "<p>The Exponential Moving Average (EMA) indicator gives more weight to recent values in a timeseries over a specified period, reacting faster to value changes than a Simple Moving Average. It&#39;s commonly used to spot trends early and filter out minor price fluctuations.</p>\n<pre><code><span class=\"mtk6\">ema</span>(m1, <span class=\"mtk7\">30</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.</p>\n<pre><code>x1 = <span class=\"mtk6\">ema</span>(m2, <span class=\"mtk7\">7</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('rsi', ['data: Timeseries', 'm1'], ['period: Number', '30']),
        icon: 'stack',
        documentation: "<p>The Relative Strength Index (RSI) measures the speed and magnitude of value movements in a timeseries over a specified period, indicating whether an asset is overbought (high RSI) or oversold (low RSI). It helps traders identify potential reversals or trend strength.</p>\n<pre><code><span class=\"mtk6\">rsi</span>(m1, <span class=\"mtk7\">30</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.</p>\n<pre><code>x1 = <span class=\"mtk6\">rsi</span>(m2, <span class=\"mtk7\">7</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('atr', ['data: OHLC_Timeseries', 'm1'], ['period: Number', '14']),
        icon: 'stack',
        documentation: "<p>The Average True Range (ATR) is a technical analysis indicator that measures market volatility by averaging the range of price movement over a specified period.  It does not indicate direction, but rather the intensity of price swings, making it useful for setting stop-losses and gauging breakout strength.</p>\n<pre><code><span class=\"mtk8\"># m1 metric must include OHLC (open/high/low/close) data</span>\n<span class=\"mtk6\">atr</span>(m1, <span class=\"mtk7\">14</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.</p>\n<pre><code>x1 = <span class=\"mtk6\">atr</span>(m1, <span class=\"mtk7\">14</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('z_score', ['data: Timeseries', 'm1'], ['period: Number', '14']),
        icon: 'stack',
        documentation: "<p>The Z Score measures how many standard deviations a current data point in a timeseries is from its average value over a specified period, helping traders identify extremes and potential mean reversion points. A high positive or negative score suggests the value is unusually far from its recent average.</p>\n<pre><code><span class=\"mtk6\">z_score</span>(m1, <span class=\"mtk7\">14</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.</p>\n<pre><code>x1 = <span class=\"mtk6\">z_score</span>(m1, <span class=\"mtk7\">14</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('pow', ['base: Number | Timeseries', 'm1'], ['power: Number', '10']),
        icon: 'stack',
        documentation: "<p>The Power (pow) function raises a number or each value in a timeseries to the power of a given base (default is 10). Commonly used to amplify small price changes or scale values exponentially for custom indicator calculations.</p>\n<pre><code><span class=\"mtk8\"># 100 raised to the power of 2 is 10,000</span>\n<span class=\"mtk6\">pow</span>(<span class=\"mtk7\">100</span>, <span class=\"mtk7\">2</span>)\n</code></pre>\n<p>Apply the power function to a timeseries to amplify its values.</p>\n<pre><code><span class=\"mtk8\"># Each data point raised to the power of 2</span>\n<span class=\"mtk6\">pow</span>(m1, <span class=\"mtk7\">2</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('log', ['a: Number | Timeseries', 'm1'], ['base?: Number', '10']),
        icon: 'stack',
        documentation: "<p>The Logarithm (log) function calculates the logarithm of a number or each value in a timeseries to a specified base (default is natural logarithm). Commonly used to normalize price data, measure proportional change, or compress large value ranges for smoother analysis.</p>\n<pre><code><span class=\"mtk8\"># The logarithm of 100 to the base 10 is 2</span>\n<span class=\"mtk6\">log</span>(<span class=\"mtk7\">100</span>, <span class=\"mtk7\">10</span>)\n</code></pre>\n<p>Apply the logarithm function to a timeseries to normalize its values.</p>\n<pre><code><span class=\"mtk8\"># Calculating the base-10 logarithm for every data point</span>\n<span class=\"mtk6\">log</span>(m1, <span class=\"mtk7\">10</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('exp', ['a: Number | Timeseries', 'm1']),
        icon: 'stack',
        documentation: "<p>The Exponential (exp) function calculates the exponential value (e raised to the power) of a number or each value in a timeseries. Useful for reversing logarithmic scaling, modeling continuous growth, and calculating certain volatility or probability metrics in finance.</p>\n<pre><code>original_values = <span class=\"mtk6\">exp</span>(<span class=\"mtk6\">log</span>(m1))\n</code></pre>\n",
    },
    {
        ...FunctionSignature('absolute', ['a: Number | Timeseries', 'm1']),
        icon: 'stack',
        documentation: "<p>The Absolute function returns the non-negative value of a number or each value in a timeseries. Useful for calculating distances from zero, such as the magnitude of price changes or the size of deviations from a moving average.</p>\n<pre><code><span class=\"mtk8\"># Absolute value of -100 is 100</span>\n<span class=\"mtk6\">absolute</span>(-<span class=\"mtk7\">100</span>)\n</code></pre>\n<p>Create a timeseries of absolute values:</p>\n<pre><code><span class=\"mtk6\">absolute</span>(m1)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('shift', ['data: Timeseries', 'm1'], ['period: Number', '1']),
        icon: 'stack',
        documentation: "<p>The Shift function moves a timeseries forward or backward in time by a specified period (depends on the granularity of the timeseries), allowing you to compare current values with past or future data points.</p>\n<pre><code><span class=\"mtk8\"># Shifting a timeseries by 1 period to the right</span>\n<span class=\"mtk6\">shift</span>(m1, <span class=\"mtk7\">1</span>)\n</code></pre>\n<p>Shifting a daily closing price series by -1 day creates a lagged series, which is commonly used to calculate day-over-day price changes or to build custom momentum indicators.</p>\n<pre><code><span class=\"mtk8\"># E.g. m1 is a price timeseries with granularity of 1 day</span>\n<span class=\"mtk8\"># Shifting a timeseries by 1 day to the left</span>\nyesterday_price = <span class=\"mtk6\">shift</span>(m1, -<span class=\"mtk7\">1</span>)\ndaily_change = m1 - yesterday_price\n</code></pre>\n",
    },
    {
        ...FunctionSignature('diff', ['data: Timeseries', 'm1'], ['period: Number', '1']),
        icon: 'stack',
        documentation: "<p>The Difference (diff) function calculates the simple difference between the current value in a timeseries and a value at a specified offset period.</p>\n<pre><code><span class=\"mtk8\"># Calculate a difference between the current and next data point</span>\n<span class=\"mtk6\">diff</span>(m1, <span class=\"mtk7\">1</span>)\n</code></pre>\n<p>With a daily series, it subtracts the previous day&#39;s price from today&#39;s price, showing the day-over-day change.</p>\n<pre><code><span class=\"mtk8\"># E.g. m1 is a price timeseries with granularity of 1 day</span>\n<span class=\"mtk6\">diff</span>(m1, -<span class=\"mtk7\">1</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('cumprod', ['data: Timeseries', 'm1']),
        icon: 'stack',
        documentation: "<p>The Cumulative Product (cumprod) function calculates the running cumulative product of all values in a timeseries, which multiplies each new value by the previous product.</p>\n<pre><code><span class=\"mtk6\">cumprod</span>(m1)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('cumsum', ['data: Timeseries', 'm1']),
        icon: 'stack',
        documentation: "<p>The Cumulative Sum (cumsum) function calculates the running total (cumulative sum) of all values in a timeseries, continuously adding each new value to the previous sum.</p>\n<pre><code><span class=\"mtk6\">cumsum</span>(m1)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('api_metric', ['api_metric: String', '"price_usd"'], ['selector: Selector', '{slug: "bitcoin"}']),
        icon: 'asset-small',
        documentation: "<p>Fetches a timeseries metric (e.g., price, volume) for a given cryptocurrency (like Bitcoin) from Sanbase API.</p>\n<pre><code><span class=\"mtk6\">api_metric</span>(<span class=\"mtk20\">&quot;price_usd&quot;</span>, {slug: <span class=\"mtk20\">&quot;bitcoin&quot;</span>})\n</code></pre>\n<p>You can also save the result in a local variable for later use.</p>\n<pre><code>x1 = <span class=\"mtk6\">api_metric</span>(<span class=\"mtk20\">&quot;price_usd&quot;</span>, {slug: <span class=\"mtk20\">&quot;bitcoin&quot;</span>})\n</code></pre>\n",
    },
    {
        ...FunctionSignature('selector_from', ['chart_metric: Timeseries', 'm1']),
        icon: 'alert',
        documentation: "<p>Extracts the selector (e.g., &quot;Bitcoin&quot;) from an existing chart metric. Useful for reusing the dynamic selector in other functions.</p>\n<pre><code><span class=\"mtk6\">selector_from</span>(m1)\n</code></pre>\n<p>You can also save the result in a local variable for later use.</p>\n<pre><code>m1_selector = <span class=\"mtk6\">selector_from</span>(m1)\nx1 = <span class=\"mtk6\">api_metric</span>(<span class=\"mtk20\">&quot;price_usd&quot;</span>, m1_selector)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('if', ['condition: Boolean', 'm1 > m2'], ['if_true: Number | Timeseries', '1'], ['if_false: Number | Timeseries', '-1']),
        icon: 'stack',
        documentation: "<pre><code><span class=\"mtk8\"># ==, !=, &lt;, &lt;=, &gt;, &gt;=</span>\n<span class=\"mtk6\">if</span>(m1 &gt; m2, <span class=\"mtk7\">1</span>, <span class=\"mtk7\">0</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('backtest', ['price_data: Timeseries', 'm1'], ['signals: Timeseries', 'm1 / m1'], ['options: Object', '{ capital: 1000, fee: 0.001, stop_loss: 0, take_profit: 0 }']),
        icon: 'stack',
        documentation: "<pre><code><span class=\"mtk8\"># `0` means the option is disabled</span>\n<span class=\"mtk6\">backtest</span>(m1, m1 / m1, { capital: <span class=\"mtk7\">1000</span>, fee: <span class=\"mtk7\">0</span>.<span class=\"mtk7\">001</span>, stop_loss: <span class=\"mtk7\">0</span>, take_profit: <span class=\"mtk7\">0</span> })\n</code></pre>\n",
    },
];
