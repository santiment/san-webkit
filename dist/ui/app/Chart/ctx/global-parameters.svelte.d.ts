import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js';
export type TGlobalParameters = {
    from: string;
    to: string;
    interval: TInterval;
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
        };
    };
};
