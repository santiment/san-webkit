<script lang="ts">
  import type { MouseEventParams } from '@santiment-network/chart'

  import { onMount } from 'svelte'
  import { getDateFormats, getTimeFormats } from '$lib/utils/dates.js'
  import { useChartCtx, useMetricSeriesCtx } from '../ctx/index.js'

  const { chart } = useChartCtx()
  const { metricSeries } = useMetricSeriesCtx()

  let hoverPoint = $state.raw<null | {
    datetime: number
    seriesData: MouseEventParams['seriesData']
  }>(null)

  function handleCrosshairMove(param: MouseEventParams) {
    if (param.time) {
      hoverPoint = {
        datetime: (param.time as number) * 1000,
        seriesData: param.seriesData,
      }
    } else {
      hoverPoint = null
    }
  }

  function formatDate(time: number) {
    const date = new Date(time)
    const { DD, MMMM, YYYY } = getDateFormats(date)
    const { HH, mm } = getTimeFormats(date)

    return `${HH}:${mm}, ${MMMM} ${DD}, ${YYYY}`
  }

  onMount(() => {
    chart.$.subscribeCrosshairMove(handleCrosshairMove)
    return () => {
      chart.$.unsubscribeCrosshairMove(handleCrosshairMove)
    }
  })
</script>

{#if hoverPoint}
  {@const { datetime, seriesData } = hoverPoint}
  <div class="pointer-events-none absolute left-1 top-2 z-10 rounded border text-sm">
    <section class="bg-athens/90 p-1 px-2">
      {formatDate(datetime)}
    </section>

    <section class="bg-white/70 p-1 px-2">
      {#each metricSeries.$ as metric}
        {#if metric.data.$.length}
          {@const data = metric.chartSeriesApi && seriesData.get(metric.chartSeriesApi)}
          {#if data && 'value' in data}
            <div class="color items-center gap-2 row" style:--color={metric.color.$}>
              {metric.tooltipFormatter(data.value)}
              <span class="text-waterloo">{metric.label}</span>
            </div>
          {/if}
        {/if}
      {/each}
    </section>
  </div>
{/if}

<style>
  .color::before {
    content: '';
    display: block;
    background: var(--color);
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
</style>
