<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import { onMount, untrack } from 'svelte'
  import {
    BaselineSeries,
    CandlestickSeries,
    HistogramSeries,
    LineSeries,
    type LineWidth,
  } from '@santiment-network/chart-next'

  import { MetricStyle } from '$lib/ctx/metrics-registry/types/index.js'

  import { useChartCtx, useHighlightedMetricCtx } from '../ctx/index.js'
  import {
    getAreaSeriesColors,
    applyHistogramBaselineColorData,
    getCandlesSeriesColors,
  } from './coloring.js'

  type TProps = { series: TSeries }
  let { series }: TProps = $props()

  const { data, scale, pane, visible, ui, formatters } = series

  const chartCtx = useChartCtx()
  const chart = chartCtx.chart.$!

  const highlightedMetricCtx = useHighlightedMetricCtx.maybeGet()

  const priceFormat = $derived(
    formatters.$.scaleFormatter &&
      ({
        type: 'custom',
        minMove: 0.0001,
        formatter: formatters.$.scaleFormatter,
      } as const),
  )

  const _oldChartSeriesApi = series.chartSeriesApi ?? null // NOTE: Used inside fullscreen dialog when reusing metricSeries ctx

  let chartSeries = $state.raw() as ReturnType<typeof createChartSeries>

  $effect.pre(() => {
    // Listening for style change that requires series recreation
    series.ui.$$.style

    const oldSeries = untrack(() => chartSeries)

    chartSeries = series.chartSeriesApi = untrack(createChartSeries)

    if (oldSeries) {
      chart.removeSeries(oldSeries)
    }
  })

  $effect.pre(() => {
    chartSeries.applyOptions({ visible: visible.$ })
  })

  $effect.pre(() => {
    chartSeries.applyOptions({ priceFormat })
  })

  // $effect.pre(() => {
  //   chartSeries.applyOptions(getSeriesTypeOptions())
  // })

  $effect.pre(() => {
    const isOtherHighlighted =
      highlightedMetricCtx?.highlighted.$ && series !== highlightedMetricCtx.highlighted.$

    chartSeries.applyOptions({
      opacity: isOtherHighlighted ? 0.13 : 1,
    })
  })

  $effect.pre(() => {
    const { color, title, style, lineStyle, lastValueVisible, priceLineVisible } = ui.$$
    const options = {
      color,
      title,
      lastValueVisible,
      priceLineVisible,
    }

    if (style === MetricStyle.AREA) {
      Object.assign(options, getAreaSeriesColors(series), { lineStyle })
    } else if (style === MetricStyle.CANDLES) {
      Object.assign(options, getCandlesSeriesColors(series))
    } else if (style !== MetricStyle.HISTOGRAM) {
      Object.assign(options, { lineStyle })
    }

    chartSeries.applyOptions({ ...options, priceScaleId: scale.$$.id })
  })

  $effect.pre(() => {
    chartSeries
      .priceScale()
      .applyOptions({ invertScale: scale.$$.inverted, scaleMargins: scale.$$.scaleMargins })
  })

  $effect.pre(() => {
    if (scale.$$.id.startsWith('right-')) {
      chartSeries.priceScale().applyOptions({ visible: scale.$$.visible })
    }
  })

  $effect(() => {
    const isHistogramBaselineColorApplied = applyHistogramBaselineColorData(series)
    if (isHistogramBaselineColorApplied) {
      return
    }

    untrack(() => chartSeries).setData(data.$)

    //chart.$!.resetAllScales() // TODO: Any alternative? For example, allStrictRange in _recalculatePriceScaleImpl
  })

  onMount(() => () => {
    series.chartSeriesApi = _oldChartSeriesApi

    highlightedMetricCtx?.onMetricLeave()

    chart.removeSeries(chartSeries)
  })

  function createChartSeries() {
    const { style, color } = ui.$$
    const options = { ...getSeriesTypeOptions(), color, priceScaleId: scale.$$.id }

    switch (style) {
      case MetricStyle.HISTOGRAM:
        return chart.addSeries(HistogramSeries, options, pane.$)
      case MetricStyle.AREA:
        return chart.addSeries(BaselineSeries, options, pane.$)
      case MetricStyle.CANDLES:
        return chart.addSeries(CandlestickSeries, options, pane.$)
      default:
        return chart.addSeries(LineSeries, options, pane.$)
    }
  }

  function getSeriesTypeOptions() {
    const base = {
      zOrder: 10,
      priceFormat: untrack(() => priceFormat),
      title: ui.$$.title,
      lastValueVisible: ui.$$.lastValueVisible,
      priceLineVisible: ui.$$.priceLineVisible,
    }

    switch (ui.$$.style) {
      case MetricStyle.HISTOGRAM:
        return Object.assign(base, { zOrder: 10 })
      case MetricStyle.AREA:
        return Object.assign(base, {
          zOrder: 20,
          lineWidth: 1.5 as LineWidth,
          lineStyle: ui.$$.lineStyle,
        })
      case MetricStyle.CANDLES:
        return Object.assign(base, { zOrder: 30 })
      default:
        return Object.assign(base, {
          zOrder: 60,
          lineWidth: 2 as LineWidth,
          lineStyle: ui.$$.lineStyle,
        })
    }
  }
</script>
