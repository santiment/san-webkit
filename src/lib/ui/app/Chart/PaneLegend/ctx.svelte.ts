import type { MouseEventParams } from '@santiment-network/chart-next'

import { onMount } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

import { useChartCtx, useMetricSeriesCtx, type TSeries } from '../ctx/index.js'

export const usePanesTooltip = createCtx('charts_usePanesTooltip', () => {
  const { chart } = useChartCtx.get()
  const { metricSeries } = useMetricSeriesCtx.get()

  let hoverPoint = $state.raw<null | {
    datetime: number
    seriesData: MouseEventParams['seriesData']
  }>(null)

  const paneSet = $derived(
    metricSeries.$.reduce(
      (acc, metric) => {
        const pane = metric.pane.$ || 0
        const set = acc[pane] || new Set()

        set.add(metric)
        acc[pane] = set

        return acc
      },
      {} as Record<number, Set<TSeries>>,
    ),
  )

  const panes = $derived(paneSet && chart.$!.panes())

  onMount(() => {
    chart.$!.subscribeCrosshairMove(handleCrosshairMove)
    return () => {
      chart.$!.unsubscribeCrosshairMove(handleCrosshairMove)
    }
  })

  function handleCrosshairMove(param: MouseEventParams) {
    if (param.time) {
      hoverPoint = {
        datetime: (param.time as number) * 1000,
        seriesData: param.seriesData,
      }
    } else {
      hoverPoint = null
    }
  }

  return {
    paneSet: {
      get $() {
        return paneSet
      },
    },

    panes: {
      get $() {
        return panes
      },
    },

    hoverPoint: {
      get $() {
        return hoverPoint
      },
    },
  }
})
