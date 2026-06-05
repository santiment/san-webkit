import type { TSeries } from './series.svelte.js'

import { SvelteSet } from 'svelte/reactivity'

import { createCtx } from '$lib/utils/index.js'

export type TApiMetricSeries = Extract<TSeries, { apiMetricName: string; selector: any }>

export const useMetricsAIExplanationCtx = createCtx('webkit_useMetricsAIExplanationCtx', () => {
  const activeAssetMetric = new SvelteSet<string>()

  return {
    checkIsActiveAssetMetric$(metric: TSeries): metric is TApiMetricSeries {
      const key = metric.id
      return activeAssetMetric.has(key)
    },
    toggleExplanation(metric: TApiMetricSeries) {
      const key = metric.id

      if (activeAssetMetric.has(key)) activeAssetMetric.delete(key)
      else activeAssetMetric.add(key)
    },
  }
})
