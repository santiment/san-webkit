import { switchMap, tap } from 'rxjs';
import { useObserveFnCall } from '../../../../utils/observable.svelte.js';
import { useGlobalParametersCtx } from './global-parameters.svelte.js';
import {} from './series.svelte.js';
import { queryGetMetric, } from '../api/index.js';
export function useApiMetricDataFlow(metric) {
    const { globalParameters } = useGlobalParametersCtx.get();
    const loadMetricData = useObserveFnCall(() => switchMap(({ localParameters, globalParameters }) => {
        metric.loading.$ = true;
        metric.data.$ = [];
        return queryGetMetric()({
            metric: localParameters.metric,
            selector: localParameters.selector || globalParameters.selector,
            from: globalParameters.from,
            to: globalParameters.to,
            interval: globalParameters.interval,
        }).pipe(tap((data) => {
            const formattedData = metric.transformData?.(data) || data;
            metric.data.$ = formattedData;
            metric.loading.$ = false;
        }));
    }));
    $effect(() => {
        const from = globalParameters.$$.from;
        const to = globalParameters.$$.to;
        const selector = globalParameters.$$.selector;
        const interval = globalParameters.$$.interval;
        const includeIncompleteData = globalParameters.$$.includeIncompleteData;
        loadMetricData({
            localParameters: {
                metric: metric.apiMetricName,
                selector: metric.selector.$,
                transform: metric.transform,
            },
            globalParameters: { selector, from, to, interval, includeIncompleteData },
        });
    });
}
