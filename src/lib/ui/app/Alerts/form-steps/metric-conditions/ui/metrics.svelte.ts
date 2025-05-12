import { Query } from '$lib/api/executor.js'
import { getMetricsCategoryGroupGraph } from '$lib/ctx/metrics-registry/graph.js'
import {
  useMetricsRegistryCtx,
  type TMetricsRegistry,
  type TRegistryMetric,
} from '$lib/ctx/metrics-registry/index.svelte.js'
import { useSearchCtx } from '$lib/ctx/search/index.svelte.js'
import { stateIsAsset } from '$ui/app/Alerts/categories/asset/asset-form-step/state.js'
import { stateIsWatchlist } from '$ui/app/Alerts/categories/watchlist/watchlist-form-step/state.js'
import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'

import { queryAvailableMetrics } from '../api.js'
import { availableMetrics as metricsForWatchlists } from './watchlist-metrics.js'

export const useMetricGraph = () => {
  const { steps } = useAlertFormCtx.get()

  const targetState = $derived(steps[0].state.$$)
  const { MetricsRegistry } = useMetricsRegistryCtx()
  const { filter, searchTerm, onInput, onKeyUp } = useSearchCtx<TRegistryMetric>({
    getCompareValues: ({ label }) => [label],
  })

  let availableMetrics = $state<TRegistryMetric[]>([])

  const allMetrics = $derived(
    Object.values(MetricsRegistry.$) as Exclude<TMetricsRegistry[string], undefined>[],
  )

  $effect(() => {
    filterAvailableMetrics(targetState, allMetrics).then((metrics) => (availableMetrics = metrics))
  })

  const filteredMetrics = $derived(searchTerm.$ ? filter(availableMetrics) : availableMetrics)
  const metricGraph = $derived(getMetricsCategoryGroupGraph(filteredMetrics))

  return {
    onSearchInput: onInput,
    onSearchKeyUp: onKeyUp,
    searchTerm,
    graph: {
      get $() {
        return metricGraph
      },
    },
  }
}

async function filterAvailableMetrics(state: unknown, allMetrics: TRegistryMetric[]) {
  const available = await getAvailableMetrics(state)

  if (!available.size) return allMetrics

  return allMetrics.filter((metric) => available.has(metric.key))
}

async function getAvailableMetrics(state: unknown) {
  if (stateIsAsset(state)) {
    return getAvailableForSlugs(state.target.slugs)
  }

  if (stateIsWatchlist(state)) {
    return metricsForWatchlists
  }

  return new Set<string>()
}

async function getAvailableForSlugs(slugs: string[]) {
  if (!slugs.length) return new Set<string>()

  const allAvailableMetrics = await Promise.all(
    slugs.map((slug) => queryAvailableMetrics(Query)(slug).then((metrics) => new Set(metrics))),
  )

  if (slugs.length < 2) return allAvailableMetrics[0]

  const { smallest: smallestAvailable, index: smallestAvailableIndex } = allAvailableMetrics.reduce(
    (prev, availableMetrics, i) =>
      prev.smallest.size < availableMetrics.size ? prev : { smallest: availableMetrics, index: i },
    { smallest: allAvailableMetrics[0], index: 0 },
  )

  const restMetrics = allAvailableMetrics.toSpliced(smallestAvailableIndex, 1)

  smallestAvailable.forEach((metric) => {
    const hasInOthers = restMetrics.every((metrics) => metrics.has(metric))
    if (!hasInOthers) {
      smallestAvailable.delete(metric)
    }
  })

  return smallestAvailable
}
