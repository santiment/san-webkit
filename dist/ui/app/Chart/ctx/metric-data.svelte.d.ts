import type { TJobScheduler } from '../../../../utils/job-scheduler.js';
import { type TExecutorOptions } from '../../../../api/index.js';
import { type TSeries } from './series.svelte.js';
import { type TMetricTargetSelectorInputObject, type TTimeseriesMetricTransformInputObject } from '../api/index.js';
export type TLocalParameters = {
    metric: string;
    selector?: null | TMetricTargetSelectorInputObject;
    transform?: null | TTimeseriesMetricTransformInputObject;
};
export declare const useApiMetricFetchSettingsCtx: ((ctx?: {
    fetcher?: TExecutorOptions["fetcher"];
    jobScheduler?: TJobScheduler;
}) => {
    fetcher?: TExecutorOptions["fetcher"];
    jobScheduler?: TJobScheduler;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        fetcher?: TExecutorOptions["fetcher"];
        jobScheduler?: TJobScheduler;
    };
    set: (ctx?: {
        fetcher?: TExecutorOptions["fetcher"];
        jobScheduler?: TJobScheduler;
    }) => {
        fetcher?: TExecutorOptions["fetcher"];
        jobScheduler?: TJobScheduler;
    };
    __CTX: "charts_useApiMetricFetchSettings";
};
export declare function useApiMetricDataFlow(metric: TSeries, index: number, settings?: {
    priority?: number;
    minimalDelay?: number;
}): void;
