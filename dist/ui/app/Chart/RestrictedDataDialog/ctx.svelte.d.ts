import type { TMetricRestrictions } from '../../../../ctx/metrics-registry/restrictions/api.js';
type TChartPlanRestriction = TMetricRestrictions & {
    label: string;
};
export declare const useChartPlanRestrictionsCtx: (() => {
    chartPlanRestrictions: {
        readonly $: Record<string, TChartPlanRestriction | undefined>;
        has$(apiMetricName: string): boolean;
        showDialog: (() => Promise<undefined>) & ((props: Omit<import("../../../core/Dialog/dialogs.js").TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        chartPlanRestrictions: {
            readonly $: Record<string, TChartPlanRestriction | undefined>;
            has$(apiMetricName: string): boolean;
            showDialog: (() => Promise<undefined>) & ((props: Omit<import("../../../core/Dialog/dialogs.js").TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
        };
    };
    set: () => {
        chartPlanRestrictions: {
            readonly $: Record<string, TChartPlanRestriction | undefined>;
            has$(apiMetricName: string): boolean;
            showDialog: (() => Promise<undefined>) & ((props: Omit<import("../../../core/Dialog/dialogs.js").TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
        };
    };
    __CTX: "webkit_useChartPlanRestrictionsCtx";
};
export {};
