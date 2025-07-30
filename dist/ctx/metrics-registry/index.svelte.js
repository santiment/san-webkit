import { onMount } from 'svelte';
import { createCtx } from '../../utils/index.js';
import { Query } from '../../api/executor.js';
import { queryGetOrderedMetrics } from './api.js';
export const DEFAULT_METRIC_CATEGORIES = [];
export const DEFAULT_METRICS_REGISTRY = {};
export const useMetricsRegistryCtx = createCtx('webkit_useMetricsRegistryCtx', () => {
    let metricCategories = $state.raw(DEFAULT_METRIC_CATEGORIES);
    let MetricsRegistry = $state.raw(DEFAULT_METRICS_REGISTRY);
    onMount(() => {
        queryGetOrderedMetrics(Query)().then((data) => {
            metricCategories = data.categories;
            MetricsRegistry = data.MetricsRegistry;
        });
    });
    return {
        MetricsRegistry: {
            get $() {
                return MetricsRegistry;
            },
        },
        metricCategories: {
            get $() {
                return metricCategories;
            },
        },
    };
});
