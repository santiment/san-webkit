<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'
  import type { MaybeCtx } from '$lib/utils/index.js'

  import { onMount } from 'svelte'
  import {
    AreaSeries,
    BaselineSeries,
    CandlestickSeries,
    HistogramSeries,
    LineSeries,
    type LineWidth,
  } from '@santiment-network/chart-next'

  import { applyHexColorOpacity } from '$ui/utils/index.js'
  import { MetricStyle } from '$lib/ctx/metrics-registry/types/index.js'

  import { useChartCtx, useHighlightedMetricCtx } from '../ctx/index.js'

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
    const { color, style, isFilledGradient = false } = ui.$$
    const options = { color }

    const isOtherHighlighted =
      highlightedMetricCtx?.highlighted.$ && series !== highlightedMetricCtx.highlighted.$

    if (isOtherHighlighted) {
      options.color = applyHexColorOpacity(color, '29')
    }

    if (style === MetricStyle.AREA) {
      let opacity = isFilledGradient ? '50' : '1c'

      if (isOtherHighlighted) {
        opacity = isFilledGradient ? '15' : '09'
      }

      const { baseline } = ui.$$

      if (baseline) {
        const lineOpacity = isOtherHighlighted ? '29' : 'ff'

        const topLineColor = applyHexColorOpacity(baseline.topColor, lineOpacity)
        const bottomLineColor = applyHexColorOpacity(baseline.bottomColor, lineOpacity)

        Object.assign(options, {
          baseValue: { type: 'price', price: baseline.value },
          topLineColor,
          bottomLineColor,
          topFillColor1: applyHexColorOpacity(topLineColor, opacity),
          topFillColor2: applyHexColorOpacity(topLineColor, isFilledGradient ? '09' : opacity),
          bottomFillColor2: applyHexColorOpacity(bottomLineColor, opacity),
          bottomFillColor1: applyHexColorOpacity(
            bottomLineColor,
            isFilledGradient ? '09' : opacity,
          ),
        })
      } else {
        Object.assign(options, {
          lineColor: options.color,
          topColor: applyHexColorOpacity(color, opacity),
          bottomColor: applyHexColorOpacity(color, isFilledGradient ? '00' : opacity),
        })
      }
    } else if (style === MetricStyle.CANDLES) {
      const downColor = applyHexColorOpacity(
        ui.$$.candleDownColor || options.color,
        isOtherHighlighted ? '15' : 'ff',
      )

      Object.assign(options, {
        downColor,
        wickDownColor: downColor,
        upColor: options.color,
        wickUpColor: options.color,
        borderVisible: !isOtherHighlighted,
      })
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
