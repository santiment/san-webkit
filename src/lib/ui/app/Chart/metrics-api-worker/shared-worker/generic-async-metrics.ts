import type { TMetricParameters } from '../types.js'

import { Query } from '$lib/api/executor.js'

import { queryGetMetric } from '../../api/index.js'
import { handleGenericDataStoreMetric, type TDataStoreParameters } from './data-store-metrics.js'

type TGenericMetricParameters = Exclude<TMetricParameters, 'selector'> & { version?: string }

export function queryMetric(
  metric: string,
  parameters: TGenericMetricParameters,
  recache?: boolean,
) {
  const { selector, interval, from, to, aggregation, version } = parameters
  return queryGetMetric({ executor: Query, recache })({
    metric,
    selector,
    from,
    to,
    interval,
    aggregation,
    version,
  })
}

export function queryGenericMetric(
  target: { metric: string } | { dataStore: TDataStoreParameters },
  parameters: TGenericMetricParameters,
  recache?: boolean,
) {
  return 'metric' in target
    ? queryMetric(target.metric, parameters, recache)
    : handleGenericDataStoreMetric(target.dataStore, parameters)
}
