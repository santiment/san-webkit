import type { TMetricData, TVariables as TGetMetricVariables } from '../../api/index.js'

export type TDataStoreParameters = {
  type: string
} & Record<string, unknown>

type TQueryVariables = Pick<TGetMetricVariables, 'from' | 'to' | 'interval' | 'aggregation'>

type TResolver = (
  storeParameters: Exclude<TDataStoreParameters, 'type'>,
  queryVariables: TQueryVariables,
) => Promise<TMetricData>

export const DATA_STORE_TYPE_RESOLVER: Record<string, undefined | TResolver> = {}

export function handleGenericDataStoreMetric(
  storeParameters: TDataStoreParameters,
  queryVariables: TQueryVariables,
): Promise<TMetricData> {
  const resolver = DATA_STORE_TYPE_RESOLVER[storeParameters.type]

  return resolver?.(storeParameters, queryVariables) || Promise.resolve([])
}

export function registerDataStoreTypeResolver(type: string, resolver: TResolver): void {
  DATA_STORE_TYPE_RESOLVER[type] = resolver
}
