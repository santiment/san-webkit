import type { IChartApi } from '@santiment-network/chart'
import { ss } from 'svelte-runes'
import { createCtx } from '$lib/utils/index.js'

export const useChartCtx = createCtx('useChartCtx', () => {
  const chart = ss<IChartApi>()

  return {
    chart,
  }
})

export { useGlobalParametersCtx } from './global-parameters.svelte.js'

export { useApiMetricDataFlow } from './metrics-data.svelte.js'

export { useMetricSeriesCtx } from './series.svelte.js'
