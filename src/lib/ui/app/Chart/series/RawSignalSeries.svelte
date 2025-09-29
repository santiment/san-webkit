<script lang="ts">
  import type { TSeries } from '../ctx/series.svelte.js'
  import type { MaybeCtx } from '$lib/utils/index.js'
  import type { TMetricData } from '../api/index.js'

  import { onMount } from 'svelte'
  import { createSeriesMarkers, LineSeries } from '@santiment-network/chart-next'

  import { useChartCtx, useHighlightedMetricCtx } from '../ctx/index.js'

  type TProps = { series: TSeries; priceSeries: TSeries }
  let { series, priceSeries }: TProps = $props()

  const { data, pane, visible, ui } = series

  const chartCtx = useChartCtx()
  const chart = chartCtx.chart.$!

  const _highlightedMetricCtx = useHighlightedMetricCtx.get() as MaybeCtx<
    typeof useHighlightedMetricCtx
  >

  const chartSeries = createChartSeries()
  series.chartSeriesApi = chartSeries

  const markers = createSeriesMarkers(priceSeries.chartSeriesApi!, [], { zOrder: 'top' })

  $effect(() => {
    const seriesData = data.$

    chartSeries.setData(seriesData)
    markers.setMarkers(visible.$ ? createSignalsData(seriesData) : [])
  })

  onMount(() => () => {
    markers.detach()
    chart.removeSeries(chartSeries)
    series.chartSeriesApi = null
  })

  function createSignalsData(data: TMetricData) {
    const result = [] as any[]

    const { isZeroIncluded = true } = ui.$$.signal || {}
    const signal = Object.assign(
      {
        shape: 'arrowDown',
        color: '#e91e63',
        position: 'aboveBar',
        size: 2,
      },
      ui.$$.signal,
      {
        color: ui.$$.color,
      },
    )

    let lastValue = 0
    for (const { value, time } of data) {
      if (value === lastValue) {
        continue
      }

      lastValue = value

      if (isZeroIncluded || value !== 0) {
        result.push({ ...signal, time })
      }
    }

    return result
  }

  function createChartSeries() {
    return chart.addSeries(LineSeries, { visible: false }, pane.$)
  }
</script>
