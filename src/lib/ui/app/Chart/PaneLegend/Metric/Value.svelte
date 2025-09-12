<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { calculatePercentageChange } from '$lib/utils/formatters/index.js'

  import { usePanesTooltip, useShiftModeStartPoint } from '../ctx.svelte.js'

  type TProps = {
    metric: TSeries
  }
  let { metric }: TProps = $props()

  const { hoverPoint } = usePanesTooltip.get()
  const { startPointIndex } = useShiftModeStartPoint.get()

  const formatter = metric.ui.$$.tooltipFormatter

  const seriesPoint = $derived(
    hoverPoint.$ ? metric.chartSeriesApi!.dataByIndex(hoverPoint.$.index, -1) : null,
  )

  const hoverValue = $derived.by(() => {
    if (!seriesPoint) return
    if ('close' in seriesPoint) return seriesPoint.close
    if ('value' in seriesPoint) return seriesPoint.value
  })

  const data = $derived(metric.data.$)
  const startData = $derived.by(() => {
    if (startPointIndex.$ === null) return

    const point = metric.chartSeriesApi!.dataByIndex(startPointIndex.$, -1)
    return point || data.find((item) => item.value)
  })

  const lastData = $derived(data[data.length - 1])
</script>

{#if lastData || hoverValue}
  {@const value = hoverValue || lastData.value}

  <span style:color={metric.ui.$$.color} class="pr-1.5">
    {formatter(value)}

    {#if startData}
      {@const change = calculatePercentageChange(startData.value, value)}
      {#if change}
        ({change})
      {/if}
    {/if}
  </span>
{/if}
