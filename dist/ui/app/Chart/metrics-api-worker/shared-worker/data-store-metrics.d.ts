import type { TMetricData, TVariables as TGetMetricVariables } from '../../api/index.js';
export type TDataStoreParameters = {
    type: string;
} & Record<string, unknown>;
export type TQueryVariables = Pick<TGetMetricVariables, 'from' | 'to' | 'interval' | 'aggregation'>;
export type TResolver = (storeParameters: Exclude<TDataStoreParameters, 'type'>, queryVariables: TQueryVariables, recache?: boolean) => Promise<TMetricData>;
export declare namespace TDataStore {
    type Parameters = TDataStoreParameters;
    type Variables = TQueryVariables;
    type Resolver = TResolver;
}
export declare const DATA_STORE_TYPE_RESOLVER: Record<string, undefined | TResolver>;
export declare function handleGenericDataStoreMetric(storeParameters: TDataStoreParameters, queryVariables: TQueryVariables, recache?: boolean): Promise<TMetricData>;
export declare function registerDataStoreTypeResolver(type: string, resolver: TResolver): void;
