import { untrack } from 'svelte';
import {} from '../../../../api/index.js';
import { createCtx } from '../../../../utils/index.js';
import { useChartGlobalParametersCtx } from './global-parameters.svelte.js';
import { useMetricSeriesCtx } from './series.svelte.js';
import {} from '../api/index.js';
import { workerFetchFormulaMetric, workerFetchMetric } from '../metrics-api-worker/index.js';
export const useApiMetricFetchSettingsCtx = createCtx('charts_useApiMetricFetchSettings', (ctx = {}) => {
    return ctx;
});
export function useApiMetricDataFlow(metric, index, settings) {
    const { globalParameters } = useChartGlobalParametersCtx.get();
    const { metricSeries } = useMetricSeriesCtx.get();
    function onWorkerData(msg) {
        if ('error' in msg.payload) {
            metric.data.$ = [];
            metric.loading.$ = false;
            metric.error.$ = msg.payload.error;
            return;
        }
        const data = msg.payload.timeseries;
        const formattedData = metric.transformData?.(data) || data;
        metric.data.$ = formattedData;
        metric.error.$ = null;
        metric.loading.$ = false;
    }
    $effect(() => {
        //if (meric.formula?.valid === false) {
        //  return
        //}
        const from = globalParameters.$$.from;
        const to = globalParameters.$$.to;
        const selector = $state.snapshot(globalParameters.$$.selector);
        const interval = metric.interval.$ || globalParameters.$$.interval || globalParameters.autoInterval$;
        const includeIncompleteData = globalParameters.$$.includeIncompleteData;
        const { priority, minimalDelay } = untrack(() => $state.snapshot(settings)) || {};
        const parameters = {
            metric: metric.apiMetricName,
            selector: $state.snapshot(metric.selector.$) || selector,
            from,
            to,
            interval,
            includeIncompleteData,
            aggregation: metric.aggregation.$,
        };
        const payload = { priority, minimalDelay, parameters };
        const workerRequest = metric.formula
            ? workerFetchFormulaMetric({
                ...payload,
                index,
                formula: $state.snapshot(metric.formula.$),
                metrics: metricSeries.asScope$,
            }, onWorkerData)
            : workerFetchMetric(payload, onWorkerData);
        untrack(() => {
            metric.loading.$ = true;
            metric.data.$ = [];
        });
        return () => {
            workerRequest.cancel();
        };
    });
}
