import { createCtx } from '$lib/utils/index.js'

export const useMiniChartTooltipCtx = createCtx('webkit_useMiniChartTooltipCtx', () => {
  const state = $state({
    offset: 0,
    syncKey: '',
  })

  return {
    tooltip: {
      get $() {
        return state
      },

      updateOffset(value: number, key?: string) {
        if (key) {
          state.syncKey = key
        }

        state.offset = value
      },
    },
  }
})
