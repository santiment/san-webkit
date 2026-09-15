import { queryGetOrderedMetrics } from './api.js';
import { Query } from '../../api/executor.js';
export const fetchMetricsRegistry = () => queryGetOrderedMetrics({
    // @ts-ignore
    fetcher: globalThis.__VITE_GQL_FETCHER,
    executor: Query,
})().catch((e) => {
    console.error(e);
    return { categories: [], MetricsRegistry: {} };
});
export async function StaticMetricsRegistryPlugin() {
    return {
        name: 'static-metrics-registry',
        async transform(src, id, env) {
            if (id.includes('/ctx/metrics-registry/index.svelte.')) {
                const data = await fetchMetricsRegistry();
                let code = src.replace(`DEFAULT_METRIC_CATEGORIES = []`, `DEFAULT_METRIC_CATEGORIES = ${JSON.stringify(data.categories || [])}`);
                if (env.ssr) {
                    code = src.replace('DEFAULT_METRICS_REGISTRY = {}', `DEFAULT_METRICS_REGISTRY = ${JSON.stringify(data.MetricsRegistry || {})}`);
                }
                return {
                    code,
                    map: null,
                };
            }
        },
    };
}
