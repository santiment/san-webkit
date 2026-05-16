import { untrack } from 'svelte';
import {} from '../../../../api/index.js';
import { createCtx } from '../../../../utils/index.js';
import { MetricType } from '../../../../ctx/metrics-registry/types/index.js';
import { FORMULA_WARNING, } from '../metrics-api-worker/types.js';
import { useChartGlobalParametersCtx } from './global-parameters.svelte.js';
import { useMetricSeriesCtx } from './series.svelte.js';
import {} from '../api/index.js';
import { workerFetchFormulaMetric, workerFetchMetric } from '../metrics-api-worker/index.js';
export const useApiMetricFetchSettingsCtx = createCtx('charts_useApiMetricFetchSettings', (ctx = {}) => {
    return ctx;
});
export function useApiMetricDataFlow(metric, index, settings, onData) {
    const { globalParameters } = useChartGlobalParametersCtx.get();
    const { metricSeries } = useMetricSeriesCtx.get();
    function onWorkerData(msg) {
        if ('error' in msg.payload) {
            metric.data.$ = [];
            metric.loading.$ = false;
            metric.error.$ = msg.payload.error;
            return;
        }
        if ('warning' in msg.payload) {
            const warnings = [];
            if (msg.payload.warning === FORMULA_WARNING.NonFiniteData) {
                warnings.push(`<span class="font-bold">Non-finite data detected in formula result.</span>

This might be caused by an incorrect math operation, e.g., division by zero. Potential solution:

<ul class="ml-4 column">
  <li class="list-disc">Handle the division programmatically: <code>if(m2 == 0, 0, m1 / m2)</code></li>
</ul>`);
            }
            metric.warnings.$ = warnings;
        }
        const data = msg.payload.timeseries ?? []; // NOTE: Ensuring the data is not undefined
        const formattedData = metric.transformData?.(data) || data;
        metric.data.$ = formattedData;
        metric.error.$ = null;
        metric.loading.$ = false;
        onData?.();
    }
    $effect(() => {
        //if (meric.formula?.valid === false) {
        //  return
        //}
        if (metric.type === MetricType.DATA_STORE) {
            return;
        }
        const from = globalParameters.$$.from;
        const to = globalParameters.$$.to;
        const interval = metric.interval.$ || globalParameters.$$.interval || globalParameters.autoInterval$;
        const includeIncompleteData = globalParameters.$$.includeIncompleteData;
        const { priority, minimalDelay } = untrack(() => $state.snapshot(settings)) || {};
        const parameters = {
            metric: metric.apiMetricName ?? '',
            selector: ('selector' in metric && $state.snapshot(metric.selector.$)) ||
                $state.snapshot(globalParameters.$$.selector),
            from,
            to,
            interval,
            includeIncompleteData,
            aggregation: metric.aggregation.$,
            version: metric.version.$,
        };
        const recache = metric.recache.wasScheduled$();
        const payload = { priority, minimalDelay, parameters, recache };
        const workerRequest = 'formula' in metric && metric.formula
            ? workerFetchFormulaMetric({
                ...payload,
                index,
                formula: $state.snapshot(metric.formula.$),
                metrics: metricSeries.asScope$,
            }, onWorkerData)
            : workerFetchMetric(payload, onWorkerData);
        untrack(() => {
            metric.loading.$ = true;
            metric.warnings.$ = null;
            metric.data.$ = [];
        });
        return () => {
            workerRequest.cancel();
        };
    });
}
