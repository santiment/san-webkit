import { catchError, from, of, switchMap, tap } from 'rxjs';
import { useObserveFnCall } from '../../../../utils/observable.svelte.js';
import {} from '../../../../api/index.js';
import { RxQuery } from '../../../../api/executor.js';
import { controlledPromisePolyfill, createCtx } from '../../../../utils/index.js';
import { useChartGlobalParametersCtx } from './global-parameters.svelte.js';
import {} from './series.svelte.js';
import { queryGetMetric, } from '../api/index.js';
export const useApiMetricFetchSettingsCtx = createCtx('charts_useApiMetricFetchSettings', (ctx = {}) => {
    return ctx;
});
export function useApiMetricDataFlow(metric) {
    const { globalParameters } = useChartGlobalParametersCtx.get();
    const { fetcher, jobScheduler } = useApiMetricFetchSettingsCtx();
    const loadMetricData = useObserveFnCall(() => switchMap(({ localParameters, globalParameters, scheduledData }) => {
        metric.loading.$ = true;
        metric.data.$ = [];
        const queryData$ = () => queryGetMetric({ executor: RxQuery, fetcher })({
            metric: localParameters.metric,
            selector: localParameters.selector || globalParameters.selector,
            from: globalParameters.from,
            to: globalParameters.to,
            interval: globalParameters.interval,
        }).pipe(tap((data) => {
            const formattedData = metric.transformData?.(data) || data;
            metric.data.$ = formattedData;
            metric.error.$ = null;
            metric.loading.$ = false;
            scheduledData?.jobResolve();
        }), catchError((err) => {
            metric.data.$ = [];
            metric.loading.$ = false;
            metric.error.$ = err;
            scheduledData?.jobReject(err);
            return of(null);
        }));
        return scheduledData
            ? from(scheduledData.fetchStartPromise).pipe(switchMap(queryData$))
            : queryData$();
    }));
    $effect(() => {
        const from = globalParameters.$$.from;
        const to = globalParameters.$$.to;
        const selector = $state.snapshot(globalParameters.$$.selector);
        const interval = globalParameters.$$.interval;
        const includeIncompleteData = globalParameters.$$.includeIncompleteData;
        const { scheduledData } = createScheduledData(jobScheduler);
        loadMetricData({
            scheduledData,
            localParameters: {
                metric: metric.apiMetricName,
                selector: $state.snapshot(metric.selector.$),
                transform: $state.snapshot(metric.transform),
            },
            globalParameters: { selector, from, to, interval, includeIncompleteData },
        });
        return scheduledData?.cancel;
    });
}
function createScheduledData(jobScheduler) {
    if (!jobScheduler)
        return {};
    const { promise, resolve, reject } = controlledPromisePolyfill();
    const { promise: fetchStartPromise, resolve: fetchStart } = controlledPromisePolyfill();
    const job = jobScheduler.schedule(() => {
        fetchStart();
        return promise;
    });
    return {
        scheduledData: {
            fetchStartPromise,
            jobResolve: resolve,
            jobReject: reject,
            cancel() {
                if (job)
                    jobScheduler.cancelJob(job);
            },
        },
    };
}
