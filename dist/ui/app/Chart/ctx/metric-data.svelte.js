import { untrack } from 'svelte';
import {} from '../../../../api/index.js';
import { Query } from '../../../../api/executor.js';
import { controlledPromisePolyfill, createCtx } from '../../../../utils/index.js';
import { ApiCache } from '../../../../api/cache.js';
import { useChartGlobalParametersCtx } from './global-parameters.svelte.js';
import {} from './series.svelte.js';
import { queryGetMetric, } from '../api/index.js';
export const useApiMetricFetchSettingsCtx = createCtx('charts_useApiMetricFetchSettings', (ctx = {}) => {
    return ctx;
});
export function useApiMetricDataFlow(metric, settings) {
    const { globalParameters } = useChartGlobalParametersCtx.get();
    const { fetcher, jobScheduler } = useApiMetricFetchSettingsCtx();
    function loadMetricData({ localParameters, globalParameters, scheduledData, abortController, }) {
        metric.loading.$ = true;
        metric.data.$ = [];
        const queryData = () => queryGetMetric({ executor: Query, fetcher, signal: abortController.signal })({
            metric: localParameters.metric,
            selector: localParameters.selector || globalParameters.selector,
            from: globalParameters.from,
            to: globalParameters.to,
            interval: globalParameters.interval,
        })
            .then((data) => {
            if (abortController.signal.aborted) {
                return;
            }
            const formattedData = metric.transformData?.(data) || data;
            metric.data.$ = formattedData;
            metric.error.$ = null;
            metric.loading.$ = false;
        })
            .catch((err) => {
            // NOTE: Returning early if abort signal was run
            if (err.name === 'AbortError') {
                const schema = err.__schema;
                if (schema)
                    ApiCache.delete(schema);
                return;
            }
            metric.data.$ = [];
            metric.loading.$ = false;
            metric.error.$ = err;
        })
            .finally(() => scheduledData?.jobResolve());
        return scheduledData ? scheduledData.fetchStartPromise.then(queryData) : queryData();
    }
    $effect(() => {
        const from = globalParameters.$$.from;
        const to = globalParameters.$$.to;
        const selector = $state.snapshot(globalParameters.$$.selector);
        const interval = globalParameters.$$.interval || globalParameters.autoInterval$;
        const includeIncompleteData = globalParameters.$$.includeIncompleteData;
        const { scheduledData } = createScheduledData(jobScheduler, untrack(() => $state.snapshot(settings)));
        const abortController = new AbortController();
        loadMetricData({
            abortController,
            scheduledData,
            localParameters: {
                metric: metric.apiMetricName,
                selector: $state.snapshot(metric.selector.$),
                transform: $state.snapshot(metric.transform),
            },
            globalParameters: { selector, from, to, interval, includeIncompleteData },
        });
        return () => {
            abortController.abort();
            scheduledData?.cancel();
        };
    });
}
function createScheduledData(jobScheduler, settings) {
    if (!jobScheduler)
        return {};
    const { promise, resolve } = controlledPromisePolyfill();
    const { promise: fetchStartPromise, resolve: fetchStart } = controlledPromisePolyfill();
    const job = jobScheduler.schedule(() => {
        fetchStart();
        return promise;
    }, undefined, settings);
    return {
        scheduledData: {
            fetchStartPromise,
            jobResolve: resolve,
            cancel() {
                if (job)
                    jobScheduler.cancelJob(job);
            },
        },
    };
}
