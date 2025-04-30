import type { TMetricRestrictions } from '$lib/ctx/metrics-registry/restrictions/api.js'

import { useMetricsRestrictionsCtx } from '$lib/ctx/metrics-registry/index.js'
import { createCtx } from '$lib/utils/index.js'

import { useMetricSeriesCtx } from '../ctx/series.svelte.js'
import { showRestrictedDataDialog$ } from './RestrictedDataDialog.svelte'

type TChartPlanRestriction = TMetricRestrictions & {
  label: string
}

export const useChartPlanRestrictionsCtx = createCtx('webkit_useChartPlanRestrictionsCtx', () => {
  const showRestrictedDataDialog = showRestrictedDataDialog$()

  const { MetricsRestrictions } = useMetricsRestrictionsCtx.get()
  const { metricSeries } = useMetricSeriesCtx.get()

  let chartPlanRestrictions = $state.raw<Record<string, undefined | TChartPlanRestriction>>({})

  $effect(() => {
    chartPlanRestrictions = metricSeries.$.reduce(
      (acc, item) => {
        const restrictions = MetricsRestrictions.$[item.apiMetricName]

        if (restrictions && (restrictions.restrictedFrom || restrictions.restrictedTo)) {
          acc[item.apiMetricName] = Object.assign({ label: item.label }, restrictions)
        }

        return acc
      },
      {} as typeof chartPlanRestrictions,
    )
  })

  return {
    chartPlanRestrictions: {
      get $() {
        return chartPlanRestrictions
      },

      has$(apiMetricName: string): boolean {
        return apiMetricName in chartPlanRestrictions
      },

      showDialog: showRestrictedDataDialog,
    },
  }
})
