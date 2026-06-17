import type { TSeries } from './series.svelte.js'

import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

export const useHighlightedMetricCtx = createCtx('webkit_useHighlightedMetricCtx', () => {
  let timer: number
  let highlighted = $state.raw<null | TSeries>(null)

  onMount(() => () => {
    window.clearTimeout(timer)
  })

  function hover(series: null | TSeries) {
    highlighted = series
  }

  function onMetricEnter(series: TSeries) {
    window.clearTimeout(timer)

    if (highlighted) {
      return hover(series)
    }

    timer = window.setTimeout(() => hover(series), 120)
  }

  function onMetricLeave() {
    window.clearTimeout(timer)

    if (!highlighted) {
      return
    }

    timer = window.setTimeout(() => hover(null), 100)
  }

  return {
    highlighted: {
      get $() {
        return highlighted
      },
    },
    onMetricEnter,
    onMetricLeave,
  }
})
