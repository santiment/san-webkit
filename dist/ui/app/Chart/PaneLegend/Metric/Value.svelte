<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { usePanesTooltip } from '../ctx.svelte.js'

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

  function calculateChange(firstValue: number, lastValue: number) {
    const percent = ((lastValue - firstValue) / firstValue) * 100

    const sign = percent >= 0 ? '+' : ''

    return sign + percent.toFixed(2) + '%'
  }
</script>

{#if lastData || hoverValue}
  {@const value = hoverValue || lastData.value}

  <span style:color={metric.color.$}>
    {formatter(value)}

    {#if firstData}
      ({calculateChange(firstData.value, value)})
    {/if}
  </span>
{/if}
