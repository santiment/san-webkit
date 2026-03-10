import type { IChartApi } from '@santiment-network/chart-next';
export declare const useChartCtx: (() => {
    chart: import("svelte-runes").SS<IChartApi | undefined>;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        chart: import("svelte-runes").SS<IChartApi | undefined>;
    };
    set: () => {
        chart: import("svelte-runes").SS<IChartApi | undefined>;
    };
    __CTX: "useChartCtx";
};
export { useChartGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js';
export { useApiMetricDataFlow, useApiMetricFetchSettingsCtx } from './metric-data.svelte.js';
export { useMetricSeriesCtx, createSeries, type TSeries } from './series.svelte.js';
export { useColorGenerator } from './colors.js';
export { useChartPanesCtx } from './panes.svelte.js';
export { useHighlightedMetricCtx } from './highlighted-metric.svelte.js';
