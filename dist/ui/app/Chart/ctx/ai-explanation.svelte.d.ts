import type { TSeries } from './series.svelte.js';
export type TApiMetricSeries = Extract<TSeries, {
    apiMetricName: string;
    selector: any;
}>;
export declare const useMetricsAIExplanationCtx: (() => {
    checkIsActiveAssetMetric$(metric: TSeries): metric is TApiMetricSeries;
    toggleExplanation(metric: TApiMetricSeries): void;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        checkIsActiveAssetMetric$(metric: TSeries): metric is TApiMetricSeries;
        toggleExplanation(metric: TApiMetricSeries): void;
    };
    set: () => {
        checkIsActiveAssetMetric$(metric: TSeries): metric is TApiMetricSeries;
        toggleExplanation(metric: TApiMetricSeries): void;
    };
    __CTX: "webkit_useMetricsAIExplanationCtx";
};
