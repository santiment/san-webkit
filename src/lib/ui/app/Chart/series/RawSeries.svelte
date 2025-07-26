<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import { onMount } from 'svelte'
  import { HistogramSeries, LineSeries, type LineWidth } from '@santiment-network/chart-next'

  import { useChartCtx } from '../ctx/index.js'
  import { RectangleDrawingTool } from '../drawing-tools/rectangle/index.js'

  type TProps = { series: TSeries }
  let { series }: TProps = $props()

  const { type, data, color, scale, pane, scaleFormatter, visible } = series

  const { chart } = useChartCtx()

  const priceFormat =
    scaleFormatter &&
    ({
      type: 'custom',
      formatter: scaleFormatter,
    } as const)

  const chartSeries = createChartSeries()
  series.chartSeriesApi = chartSeries

  $effect.pre(() => {
    chartSeries.applyOptions({ visible: visible.$ })
  })

  $effect.pre(() => {
    chartSeries.applyOptions({ color: color.$, priceScaleId: scale.$$.id })
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
    chart.$!.resetAllScales()
  })

  onMount(() => {
    if (series.apiMetricName !== 'price_usd') return

    new RectangleDrawingTool(
      chart.$!,
      chartSeries,
      document.querySelector<HTMLDivElement>('#toolbar')!,
      {
        showLabels: false,
      },
    )
  })

  onMount(() => () => {
    chart.$!.removeSeries(chartSeries)
    series.chartSeriesApi = null
  })

  function createChartSeries() {
    const base = { color: color.$, priceScaleId: scale.$$.id, zOrder: 10, priceFormat }

    switch (type.$) {
      case 'histogram':
        return chart.$!.addSeries(HistogramSeries, Object.assign(base, { zOrder: 10 }), pane.$)
      default:
        return chart.$!.addSeries(
          LineSeries,
          Object.assign(base, { zOrder: 60, lineWidth: 2 as LineWidth }),
          pane.$,
        )
    }
  }
</script>
