import type { IPaneApi } from '@santiment-network/chart-next'

import { SvelteMap } from 'svelte/reactivity'

import { createCtx, type TNominal } from '$lib/utils/index.js'

export type TPane = TNominal<unknown, 'TPane'> & IPaneApi<any>

type TPaneWidget = {
  _paneCell: HTMLElement
}

export const useChartPanesCtx = createCtx('webkit_useChartPanesCtx', () => {
  const state = new SvelteMap<TPane, HTMLElement>()

  return {
    panes: {
      get $() {
        return state
      },
    },
    onPaneWidgetMount(paneWidget: TPaneWidget, pane: TPane) {
      state.set(pane, paneWidget._paneCell)

      return () => {
        state.delete(pane)
      }
    },
  }
})
