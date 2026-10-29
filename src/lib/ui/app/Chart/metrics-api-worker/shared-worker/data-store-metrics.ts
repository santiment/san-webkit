import type { TMetricData, TVariables as TGetMetricVariables } from '../../api/index.js'

export type TDataStoreParameters = {
  type: string
} & Record<string, unknown>

export type TQueryVariables = Pick<TGetMetricVariables, 'from' | 'to' | 'interval' | 'aggregation'>

export type TResolver = (
  storeParameters: Exclude<TDataStoreParameters, 'type'>,
  queryVariables: TQueryVariables,
  recache?: boolean,
) => Promise<TMetricData>

export namespace TDataStore {
  export type Parameters = TDataStoreParameters
  export type Variables = TQueryVariables
  export type Resolver = TResolver
}

export const DATA_STORE_TYPE_RESOLVER: Record<string, undefined | TResolver> = {}

export function handleGenericDataStoreMetric(
  storeParameters: TDataStoreParameters,
  queryVariables: TQueryVariables,
  recache?: boolean,
): Promise<TMetricData> {
  const resolver = DATA_STORE_TYPE_RESOLVER[storeParameters.type]

  return resolver?.(storeParameters, queryVariables, recache) || Promise.resolve([])
}

export function registerDataStoreTypeResolver(type: string, resolver: TResolver): void {
  DATA_STORE_TYPE_RESOLVER[type] = resolver
}
