<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'

  import { onMount } from 'svelte'
  import { useChartCtx } from '../ctx/index.js'

  let { type, data, color, scale, pane, scaleFormatter }: TSeries = $props()

  const { chart } = useChartCtx()

  const priceFormat =
    scaleFormatter &&
    ({
      type: 'custom',
      formatter: scaleFormatter,
    } as const)

  const chartSeries = createChartSeries()

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
    chart.$.timeScale().fitContent()

    // TOOD: Should it be handled by the library?
    // NOTE: This will correctly fit new data on a scale.
    chartSeries.priceScale().applyOptions({ autoScale: true })
    requestAnimationFrame(() => {
      chartSeries.priceScale().applyOptions({ autoScale: false })
    })
  })

  onMount(() => () => {
    chart.$.removeSeries(chartSeries)
  })

  function createChartSeries() {
    const base = { color: color.$, priceScaleId: scale.$$.id, zOrder: 10, priceFormat }

    switch (type.$) {
      case 'histogram':
        return chart.$.addHistogramSeries(Object.assign(base, { zOrder: 10 }), pane.$)
      default:
        return chart.$.addLineSeries(Object.assign(base, { zOrder: 60 }), pane.$)
    }
  }
</script>
