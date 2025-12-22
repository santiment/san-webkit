import { onMount } from 'svelte'
import { BROWSER } from 'esm-env'

import { createCtx } from '$lib/utils/index.js'
import { Query } from '$lib/api/executor.js'

import { queryGetOrderedMetrics, type TMetricsRegistry } from './api.js'

let DEFAULT_METRIC_CATEGORIES: string[] = []
let DEFAULT_METRICS_REGISTRY: TMetricsRegistry = {}

export const defaultOrderedMetricsPromise = BROWSER
  ? queryGetOrderedMetrics(Query)().then((data) => {
      DEFAULT_METRIC_CATEGORIES = data.categories
      DEFAULT_METRICS_REGISTRY = data.MetricsRegistry

      return data
    })
  : Promise.resolve()

export const useMetricsRegistryCtx = createCtx('webkit_useMetricsRegistryCtx', () => {
  let metricCategories = $state.raw(DEFAULT_METRIC_CATEGORIES)
  let MetricsRegistry = $state.raw<TMetricsRegistry>(DEFAULT_METRICS_REGISTRY)

  onMount(() => {
    queryGetOrderedMetrics(Query)().then((data) => {
      metricCategories = data.categories
      MetricsRegistry = data.MetricsRegistry
    })
  })

  return {
    MetricsRegistry: {
      get $() {
        return MetricsRegistry
      },
    },
    metricCategories: {
      get $() {
        return metricCategories
      },
    },
  }
})
