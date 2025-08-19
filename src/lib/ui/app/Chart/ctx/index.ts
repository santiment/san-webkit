import type { IChartApi } from '@santiment-network/chart-next'

import { ss } from 'svelte-runes'

import { createCtx } from '$lib/utils/index.js'

export const useChartCtx = createCtx('useChartCtx', () => {
  const chart = ss<undefined | IChartApi>()

  return {
    chart,
  }
})

export { useChartGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js'

export { useApiMetricDataFlow, useApiMetricFetchSettingsCtx } from './metric-data.svelte.js'

export { useMetricSeriesCtx, createSeries, type TSeries } from './series.svelte.js'

export { useColorGenerator } from './colors.js'

export { useChartPanesCtx } from './panes.svelte.js'

export { useHighlightedMetricCtx } from './highlighted-metric.svelte.js'
