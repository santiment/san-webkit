import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js';
export type TGlobalParameters = {
    from: string;
    to: string;
    interval?: null | TInterval;
    selector: TMetricTargetSelectorInputObject;
    includeIncompleteData: boolean;
};
export declare const useChartGlobalParametersCtx: ((defaultCtxValue?: Partial<TGlobalParameters>) => {
    globalParameters: {
        readonly $$: TGlobalParameters;
        readonly dates$: {
            from: string;
            to: string;
            fromUtcDate: Date;
            toUtcDate: Date;
        };
        readonly autoInterval$: TInterval;
        changeDates(from: string, to: string): void;
        applyDateRange(dateRange: string): void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        globalParameters: {
            readonly $$: TGlobalParameters;
            readonly dates$: {
                from: string;
                to: string;
                fromUtcDate: Date;
                toUtcDate: Date;
            };
            readonly autoInterval$: TInterval;
            changeDates(from: string, to: string): void;
            applyDateRange(dateRange: string): void;
        };
    };
    set: (defaultCtxValue?: Partial<TGlobalParameters>) => {
        globalParameters: {
            readonly $$: TGlobalParameters;
            readonly dates$: {
                from: string;
                to: string;
                fromUtcDate: Date;
                toUtcDate: Date;
            };
            readonly autoInterval$: TInterval;
            changeDates(from: string, to: string): void;
            applyDateRange(dateRange: string): void;
        };
    };
};
