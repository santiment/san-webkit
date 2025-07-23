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
<pre><code>x1 = asset_metric(&quot;${metric.apiMetricName}&quot;, &quot;${metric.selector}&quot;)
</code></pre>`);
}
export const DEFINITIONS = [
    {
        ...FunctionSignature('sma', ['data: Timeseries', 'm1'], ['period: Number', '30']),
        icon: 'stack',
        documentation: "<p>Simple Moving Average (SMA) indicator calculates the average of a timeseries over a specified period by summing closing values and dividing by the number of periods. It smooths timeseries data to identify trends by reducing noise from short-term fluctuations.</p>\n<pre><code><span class=\"mtk6\">sma</span>(m1, <span class=\"mtk7\">30</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.  </p>\n<pre><code>x1 = <span class=\"mtk6\">sma</span>(m2, <span class=\"mtk7\">7</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('ema', ['data: Timeseries', 'm1'], ['period: Number', '30']),
        icon: 'stack',
        documentation: "<p>The Exponential Moving Average (EMA) indicator gives more weight to recent prices in a timeseries over a specified period, reacting faster to price changes than a Simple Moving Average. It&#39;s commonly used to spot trends early and filter out minor price fluctuations.</p>\n<pre><code><span class=\"mtk6\">ema</span>(m1, <span class=\"mtk7\">30</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.  </p>\n<pre><code>x1 = <span class=\"mtk6\">ema</span>(m2, <span class=\"mtk7\">7</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('rsi', ['data: Timeseries', 'm1'], ['period: Number', '30']),
        icon: 'stack',
        documentation: "<p>The Relative Strength Index (RSI) measures the speed and magnitude of price movements in a timeseries over a specified period, indicating whether an asset is overbought (high RSI) or oversold (low RSI). It helps traders identify potential reversals or trend strength.  </p>\n<pre><code><span class=\"mtk6\">rsi</span>(m1, <span class=\"mtk7\">30</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.  </p>\n<pre><code>x1 = <span class=\"mtk6\">rsi</span>(m2, <span class=\"mtk7\">7</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('asset_metric', ['api_metric: String', '"price_usd"'], ['asset_slug: String', '"bitcoin"']),
        icon: 'asset-small',
        documentation: "<p>Fetches a timeseries metric (e.g., price, volume) for a given cryptocurrency (like Bitcoin) from Sanbase API. </p>\n<pre><code><span class=\"mtk6\">asset_metric</span>(<span class=\"mtk20\">&quot;price_usd&quot;</span>, <span class=\"mtk20\">&quot;bitcoin&quot;</span>)\n</code></pre>\n<p>You can also save the result in a local variable for later use.  </p>\n<pre><code>x1 = <span class=\"mtk6\">asset_metric</span>(<span class=\"mtk20\">&quot;price_usd&quot;</span>, <span class=\"mtk20\">&quot;bitcoin&quot;</span>)\n</code></pre>\n",
    },
    {
        ...FunctionSignature('selector_from', ['chart_metric: Timeseries', 'm1']),
        icon: 'alert',
        documentation: "<p>Extracts the selector (e.g., &quot;Bitcoin&quot;) from an existing chart metric. Useful for reusing the dynamic selector in other functions. </p>\n<pre><code><span class=\"mtk6\">selector_from</span>(m1)\n</code></pre>\n<p>You can also save the result in a local variable for later use.  </p>\n<pre><code>m1_selector = <span class=\"mtk6\">selector_from</span>(m1)\nx1 = <span class=\"mtk6\">asset_metric</span>(<span class=\"mtk20\">&quot;price_usd&quot;</span>, m1_selector)\n</code></pre>\n",
    },
];
