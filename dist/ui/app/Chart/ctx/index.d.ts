import type { IChartApi } from '@santiment-network/chart';
export declare const useChartCtx: {
    (): {
        chart: import("svelte-runes").SS<IChartApi>;
    };
    get(allCtxs?: Map<string, any>): {
        chart: import("svelte-runes").SS<IChartApi>;
    };
    set(): {
        chart: import("svelte-runes").SS<IChartApi>;
    };
};
export { useChartGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js';
export { useApiMetricDataFlow } from './metric-data.svelte.js';
export { useMetricSeriesCtx, type TSeries } from './series.svelte.js';
export { useColorGenerator } from './colors.js';
