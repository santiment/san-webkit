<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'
  import type { MaybeCtx } from '../../../../utils/index.js'

  import { onMount } from 'svelte'
  import {
    AreaSeries,
    BaselineSeries,
    CandlestickSeries,
    HistogramSeries,
    LineSeries,
    type LineWidth,
  } from '@santiment-network/chart-next'

  import { MetricStyle } from '../../../../ctx/metrics-registry/types/index.js'

  import { useChartCtx, useHighlightedMetricCtx } from '../ctx/index.js'
  import {
    getAreaSeriesColors,
    applyHistogramBaselineColorData,
    getCandlesSeriesColors,
  } from './coloring.js'

  type TProps = { series: TSeries }
  let { series }: TProps = $props()

  const { data, scale, pane, visible, ui } = series

  const { chart } = useChartCtx()
  const highlightedMetricCtx = useHighlightedMetricCtx.get() as MaybeCtx<
    typeof useHighlightedMetricCtx
  >

  const priceFormat =
    ui.$$.scaleFormatter &&
    ({
      type: 'custom',
      minMove: 0.0001,
      formatter: ui.$$.scaleFormatter,
    } as const)

  const chartSeries = createChartSeries()
  series.chartSeriesApi = chartSeries

  $effect.pre(() => {
    chartSeries.applyOptions({ visible: visible.$ })
  })

  $effect.pre(() => {
    chartSeries.applyOptions(getSeriesTypeOptions())
  })

  $effect.pre(() => {
    const isOtherHighlighted =
      highlightedMetricCtx?.highlighted.$ && series !== highlightedMetricCtx.highlighted.$

    chartSeries.applyOptions({
      opacity: isOtherHighlighted ? 0.13 : 1,
    })
  })

  $effect.pre(() => {
    const { color, style } = ui.$$
    const options = { color }

    if (style === MetricStyle.AREA) {
      Object.assign(options, getAreaSeriesColors(series))
    } else if (style === MetricStyle.CANDLES) {
      Object.assign(options, getCandlesSeriesColors(series))
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

    chartSeries.setData(data.$)

    chart.$!.resetAllScales() // TODO: Any alternative? For example, allStrictRange in _recalculatePriceScaleImpl
  })

  onMount(() => () => {
    chart.$!.removeSeries(chartSeries)
    series.chartSeriesApi = null
  })

  function createChartSeries() {
    const { style, color } = ui.$$
    const options = { ...getSeriesTypeOptions(), color, priceScaleId: scale.$$.id }

    switch (style) {
      case MetricStyle.HISTOGRAM:
        return chart.$!.addSeries(HistogramSeries, options, pane.$)
      case MetricStyle.AREA:
        return chart.$!.addSeries(ui.$$.baseline ? BaselineSeries : AreaSeries, options, pane.$)
      case MetricStyle.CANDLES:
        return chart.$!.addSeries(CandlestickSeries, options, pane.$)
      default:
        return chart.$!.addSeries(LineSeries, options, pane.$)
    }
  }

  function getSeriesTypeOptions() {
    const base = { zOrder: 10, priceFormat }

    switch (ui.$$.style) {
      case MetricStyle.HISTOGRAM:
        return Object.assign(base, { zOrder: 10 })
      case MetricStyle.AREA:
        return Object.assign(base, { zOrder: 20, lineWidth: 1.5 as LineWidth })
      case MetricStyle.CANDLES:
        return Object.assign(base, { zOrder: 30 })
      default:
        return Object.assign(base, { zOrder: 60, lineWidth: 2 as LineWidth })
    }
  }
</script>
