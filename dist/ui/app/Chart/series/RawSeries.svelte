<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'
  import type { MaybeCtx } from '../../../../utils/index.js'

  import { onMount } from 'svelte'
  import { HistogramSeries, LineSeries, type LineWidth } from '@santiment-network/chart-next'

  import { applyHexColorOpacity } from '../../../utils/index.js'

  import { useChartCtx, useHighlightedMetricCtx } from '../ctx/index.js'

  type TProps = { series: TSeries }
  let { series }: TProps = $props()

  const { type, data, color, scale, pane, scaleFormatter, visible } = series

  const { chart } = useChartCtx()
  const highlightedMetricCtx = useHighlightedMetricCtx.get() as MaybeCtx<
    typeof useHighlightedMetricCtx
  >

  const priceFormat =
    scaleFormatter &&
    ({
      type: 'custom',
      minMove: 0.0001,
      formatter: scaleFormatter,
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
    let _color = color.$

    if (highlightedMetricCtx?.highlighted.$ && series !== highlightedMetricCtx.highlighted.$) {
      _color = applyHexColorOpacity(_color, '29')
    }

    chartSeries.applyOptions({ color: _color, priceScaleId: scale.$$.id })
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
    const options = { ...getSeriesTypeOptions(), color: color.$, priceScaleId: scale.$$.id }

    switch (type.$) {
      case 'histogram':
        return chart.$!.addSeries(HistogramSeries, options, pane.$)
      default:
        return chart.$!.addSeries(LineSeries, options, pane.$)
    }
  }

  function getSeriesTypeOptions() {
    const base = { zOrder: 10, priceFormat }

    switch (type.$) {
      case 'histogram':
        return Object.assign(base, { zOrder: 10 })
      default:
        return Object.assign(base, { zOrder: 60, lineWidth: 2 as LineWidth })
    }
  }
</script>
