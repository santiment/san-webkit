import { SvelteSet } from 'svelte/reactivity';
import { createCtx } from '../../../../utils/index.js';
export const useMetricsAIExplanationCtx = createCtx('webkit_useMetricsAIExplanationCtx', () => {
    const activeAssetMetric = new SvelteSet();
    return {
        checkIsActiveAssetMetric$(metric) {
            const key = metric.id;
            return activeAssetMetric.has(key);
        },
        toggleExplanation(metric) {
            const key = metric.id;
            if (activeAssetMetric.has(key))
                activeAssetMetric.delete(key);
            else
                activeAssetMetric.add(key);
        },
    };
});
