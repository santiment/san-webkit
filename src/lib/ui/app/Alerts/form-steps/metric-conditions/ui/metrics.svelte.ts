import { Query } from '$lib/api/executor.js'
import { getMetricsCategoryGroupGraph } from '$lib/ctx/metrics-registry/graph.js'
import {
  useMetricsRegistryCtx,
  type TMetricsRegistry,
  type TRegistryMetric,
} from '$lib/ctx/metrics-registry/index.svelte.js'
import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'

import { queryAvailableMetrics } from '../api.js'

export const useMetricGraph = () => {
  const { steps } = useAlertFormCtx.get()

  const slugs = $derived(extractSlugs(steps[0].state.$$))

  const { MetricsRegistry } = useMetricsRegistryCtx()

  let filteredMetrics = $state<TRegistryMetric[]>([])

  const metrics = $derived(
    Object.values(MetricsRegistry.$) as Exclude<TMetricsRegistry[string], undefined>[],
  )

  $effect(() => {
    filterMetrics(slugs, metrics).then((metrics) => (filteredMetrics = metrics))
  })

  const metricGraph = $derived(getMetricsCategoryGroupGraph(filteredMetrics))

  return {
    get $() {
      return metricGraph
    },
  }
}

function extractSlugs(targetState: unknown) {
  if (typeof targetState !== 'object' || !targetState) return []
  if (!('target' in targetState)) return []

  const { target } = targetState

  if (typeof target !== 'object' || !target) return []
  if (!('slug' in target)) return []

  const { slug } = target
  if (!Array.isArray(slug)) return typeof slug === 'string' ? [slug] : []

  if (slug.length && typeof slug[0] === 'string') {
    return slug as string[]
  }

  return []
}

async function filterMetrics(slugs: string[], allMetrics: TRegistryMetric[]) {
  if (!slugs.length) return allMetrics

  const smallestAvailable = await getAvailableMetrics(slugs)

  return allMetrics.filter((metric) => smallestAvailable.has(metric.key))
}

async function getAvailableMetrics(slugs: string[]) {
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
