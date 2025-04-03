import { type TExecutorOptions } from '../../../../api/index.js';
import { type TSeries } from './series.svelte.js';
export declare function useApiMetricDataFlow(metric: TSeries, { fetcher }: {
    fetcher?: TExecutorOptions['fetcher'];
}): void;
