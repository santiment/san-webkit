import type { TMetricParameters } from '../types.js';
import { type TDataStoreParameters } from './data-store-metrics.js';
type TGenericMetricParameters = Exclude<TMetricParameters, 'selector'> & {
    version?: string;
};
export declare function queryMetric(metric: string, parameters: TGenericMetricParameters, recache?: boolean): Promise<import("../../api/index.js").TMetricData>;
export declare function queryGenericMetric(target: {
    metric: string;
} | {
    dataStore: TDataStoreParameters;
}, parameters: TGenericMetricParameters, recache?: boolean): Promise<import("../../api/index.js").TMetricData>;
export {};
