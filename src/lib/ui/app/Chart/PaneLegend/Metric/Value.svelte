<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { usePanesTooltip } from '../ctx.svelte.js'
  import { calculatePercentageChange } from '../../utils.js'

  type TProps = {
    metric: TSeries
  }
  let { metric }: TProps = $props()

  const { hoverPoint } = usePanesTooltip.get()

  const formatter = metric.tooltipFormatter

  const seriesPoint = $derived(hoverPoint.$?.seriesData.get(metric.chartSeriesApi!))
  const hoverValue = $derived(seriesPoint && 'value' in seriesPoint ? seriesPoint.value : undefined)

  const data = $derived(metric.data.$)
  const firstData = $derived(data[0])
  const lastData = $derived(data[data.length - 1])
</script>

{#if lastData || hoverValue}
  {@const value = hoverValue || lastData.value}

  <span style:color={metric.color.$} class="pr-1.5">
    {formatter(value)}

    {#if firstData}
      ({calculatePercentageChange(firstData.value, value)})
    {/if}
  </span>
{/if}
