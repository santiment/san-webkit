import type { TSeries } from '../../ctx/series.svelte.js'

import { createCtx } from '$lib/utils/index.js'

export const useMetricInfoCtx = createCtx(
  'chart_useMetricInfoCtx',
  (
    getOpenedMetric: () => null | TSeries,
    onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void,
  ) => {
    return {
      onMetricInfoClick,
      openedMetric: {
        get $() {
          return getOpenedMetric()
        },
      },
    }
  },
)
