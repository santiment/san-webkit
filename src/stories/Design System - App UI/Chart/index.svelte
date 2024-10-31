<script lang="ts">
  import { type TMetricData } from '$ui/app/Chart/api/index.js'
  import { useMetricSeriesCtx, useGlobalParametersCtx } from '$ui/app/Chart/ctx/index.js'
  import Chart, { ApiMetricSeries } from '$ui/app/Chart/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  const { globalParameters } = useGlobalParametersCtx()
  const { metricSeries } = useMetricSeriesCtx([
    { name: 'price_usd', style: 'line', color: 'green', scaleId: 'right-price_usd' },
    {
      name: 'social_dominance_total',
      style: 'line',
      color: 'orange',
      scaleId: 'right-social_dominance_total',
    },
    {
      name: 'social_volume_total',
      style: 'histogram',
      color: 'cyan',
      scaleId: 'right-social_volume_total',
    },
    {
      name: 'sentiment_positive_total',
      color: 'green',
      style: 'histogram',

      pane: 1,

      scaleId: 'right-sentiment',
      scaleFormatter: (value) => Math.abs(value).toFixed(2),
    },
    {
      name: 'sentiment_negative_total',
      style: 'histogram',
      color: 'red',

      pane: 1,

      transformData: (data: TMetricData) => data.map((item) => ({ ...item, value: -item.value })),

      scaleId: 'right-sentiment',
    },
  ])

  const priceSeries = metricSeries.$[0]

  function toggle() {
    priceSeries.scale.$$.visible = !priceSeries.scale.$$.visible
  }

  const slugs = ['bitcoin', 'ethereum']
</script>

<main class="p-4">
  <div class="flex gap-2 p-3">
    {#each slugs as slug}
      <Button
        variant="border"
        class={cn(globalParameters.$$.selector.slug === slug && 'border-green')}
        onclick={() => {
          globalParameters.$$.selector.slug = slug
        }}>{slug}</Button
      >
    {/each}
  </div>

  <div class="mt-4 flex gap-2">
    {#each metricSeries.$ as metric}
      <div class="rounded border p-1" style="border-color:{metric.color.$}">
        {metric.key}
      </div>
    {/each}
  </div>

  <Chart watermark={'#e7eaf3FA'}>
    {#each metricSeries.$ as item}
      <ApiMetricSeries series={item}></ApiMetricSeries>
    {/each}
  </Chart>

  <button onclick={toggle}> Toggle axis </button>
</main>
