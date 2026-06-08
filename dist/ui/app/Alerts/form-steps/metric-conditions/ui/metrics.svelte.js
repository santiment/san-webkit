import { Query } from '../../../../../../api/executor.js';
import { getMetricsCategoryGroupGraph } from '../../../../../../ctx/metrics-registry/graph.js';
import { useMetricsRegistryCtx, } from '../../../../../../ctx/metrics-registry/index.js';
import { useSearchCtx } from '../../../../../../ctx/search/index.svelte.js';
import { useAlertFormCtx } from '../../../ctx/index.svelte.js';
import { queryAvailableMetrics } from '../api.js';
import { availableMetrics as metricsForWatchlists } from './watchlist-metrics.js';
export const useMetricGraph = () => {
    const { steps } = useAlertFormCtx.get();
    const { MetricsRegistry } = useMetricsRegistryCtx();
    const { filter, searchTerm, onInput, onKeyUp } = useSearchCtx({
        getCompareValues: ({ label }) => [label],
    });
    let availableMetrics = $state([]);
    const allMetrics = $derived(Object.values(MetricsRegistry.$));
    $effect(() => {
        filterAvailableMetrics(steps[0], allMetrics).then((metrics) => (availableMetrics = metrics));
    });
    const filteredMetrics = $derived(searchTerm.$ ? filter(availableMetrics) : availableMetrics);
    const metricGraph = $derived(getMetricsCategoryGroupGraph(filteredMetrics));
    return {
        onSearchInput: onInput,
        onSearchKeyUp: onKeyUp,
        searchTerm,
        graph: {
            get $() {
                return metricGraph;
            },
        },
    };
};
async function filterAvailableMetrics(step, allMetrics) {
    const available = await getAvailableMetrics(step);
    if (!available.size)
        return allMetrics;
    return allMetrics.filter((metric) => available.has(metric.key));
}
async function getAvailableMetrics(step) {
    if (step.name === 'assets') {
        return getAvailableForSlugs(step.state.$$.target.slugs);
    }
    if (step.name === 'watchlist') {
        return metricsForWatchlists;
    }
    return new Set();
}
async function getAvailableForSlugs(slugs) {
    if (!slugs.length)
        return new Set();
    const allAvailableMetrics = await Promise.all(slugs.map((slug) => queryAvailableMetrics(Query)(slug).then((metrics) => new Set(metrics))));
    if (slugs.length < 2)
        return allAvailableMetrics[0];
    const { smallest: smallestAvailable, index: smallestAvailableIndex } = allAvailableMetrics.reduce((prev, availableMetrics, i) => prev.smallest.size < availableMetrics.size ? prev : { smallest: availableMetrics, index: i }, { smallest: allAvailableMetrics[0], index: 0 });
    const restMetrics = allAvailableMetrics.toSpliced(smallestAvailableIndex, 1);
    smallestAvailable.forEach((metric) => {
        const hasInOthers = restMetrics.every((metrics) => metrics.has(metric));
        if (!hasInOthers) {
            smallestAvailable.delete(metric);
        }
    });
    return smallestAvailable;
}
