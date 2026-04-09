import type { IChartApi } from '@santiment-network/chart-next';
export declare const useChartCtx: (() => {
    chart: {
        $: (IChartApi & {
            __isDrawing?: boolean;
        }) | undefined;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        chart: {
            $: (IChartApi & {
                __isDrawing?: boolean;
            }) | undefined;
        };
    };
    set: () => {
        chart: {
            $: (IChartApi & {
                __isDrawing?: boolean;
            }) | undefined;
        };
    };
    __CTX: "useChartCtx";
};
export { useChartGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js';
export { useApiMetricDataFlow, useApiMetricFetchSettingsCtx } from './metric-data.svelte.js';
export { useMetricSeriesCtx, createSeries, type TSeries } from './series.svelte.js';
export { useColorGenerator } from './colors.js';
export { useChartPanesCtx } from './panes.svelte.js';
export { useHighlightedMetricCtx } from './highlighted-metric.svelte.js';
