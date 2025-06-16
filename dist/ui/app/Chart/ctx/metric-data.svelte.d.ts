import type { TJobScheduler } from '../../../../utils/job-scheduler.js';
import { type TExecutorOptions } from '../../../../api/index.js';
import { type TSeries } from './series.svelte.js';
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
};
export declare function useApiMetricDataFlow(metric: TSeries, settings?: {
    priority?: number;
    minimalDelay?: number;
}): void;
