import type { MouseEventParams } from '@santiment-network/chart-next'
import type { TPane } from '../ctx/panes.svelte.js'

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

  const paneIndexSeries = $derived(
    metricSeries.$.reduce((acc, metric) => {
      const index = metric.pane.$ ?? 0

      // @ts-ignore
      const pane = metric.chartSeriesApi?.getPane()._pane as TPane
      const series = acc.get(pane) || [index]

      series.push(metric)

      return acc.set(pane, series)
    }, new Map<TPane, [number, ...TSeries[]]>()),
  )

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
    paneIndexSeries: {
      get $() {
        return paneIndexSeries
      },
    },

    hoverPoint: {
      get $() {
        return hoverPoint
      },
    },
  }
})

export const useShiftModeStartPoint = createCtx('charts_useShiftModeStartPoint', () => {
  let startPointIndex = $state.raw<null | number>(null)

  return {
    startPointIndex: {
      get $() {
        return startPointIndex
      },

      set $(value: typeof startPointIndex) {
        startPointIndex = value
      },
    },
  }
})
