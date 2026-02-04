<script lang="ts">
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import { JobScheduler } from '$lib/utils/job-scheduler.js'
  import { type TMetricData } from '$ui/app/Chart/api/index.js'
  import {
    useMetricSeriesCtx,
    useChartGlobalParametersCtx,
    useColorGenerator,
  } from '$ui/app/Chart/ctx/index.js'
  import { useApiMetricFetchSettingsCtx } from '$ui/app/Chart/ctx/metric-data.svelte.js'
  import { useMetricsRestrictionsCtx } from '$lib/ctx/metrics-registry/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import { onMount } from 'svelte'
  import { useChartPlanRestrictionsCtx } from '$ui/app/Chart/RestrictedDataDialog/index.js'
  import { useClockCtx, useTimeZoneCtx } from '$lib/ctx/time/index.js'
  import { useViewportPriorityCtx } from '$lib/ctx/viewport-priority/index.js'
  import ChartWidget from './ChartWidget.svelte'

  let { viewportPriority = false, defaultMetrics = [] } = $props()

  useAssetsCtx.set()
  useMetricsRestrictionsCtx.set()

  useTimeZoneCtx.set()
  useClockCtx.set()
  const jobScheduler = JobScheduler()
  useApiMetricFetchSettingsCtx.set({ jobScheduler })
  if (viewportPriority) useViewportPriorityCtx.set()

  const { colorGenerator } = useColorGenerator()

  const { globalParameters } = useChartGlobalParametersCtx({
    from: 'utc_now-2y',
  })

  const selector = {
    get $() {
      return globalParameters.$$.selector
    },
  }
  const { metricSeries } = useMetricSeriesCtx(
    defaultMetrics.length
      ? defaultMetrics.map((item) => ({
          ...item,
          selector,
          color: item.color || colorGenerator.new(),
        }))
      : [
          {
            apiMetricName: 'price_usd',
            label: 'Price USD',
            style: 'line',
            color: colorGenerator.new(),
            scaleId: 'right-price_usd',
          },
          {
            apiMetricName: 'social_dominance_total',
            style: 'line',
            color: colorGenerator.new(),
            scaleId: 'right-social_dominance_total',
          },
          {
            apiMetricName: 'social_volume_total',
            style: 'histogram',
            color: colorGenerator.new(),
            scaleId: 'right-social_volume_total',
          },
          {
            apiMetricName: 'sentiment_positive_total',
            color: 'green',
            style: 'histogram',

            pane: 1,

            scaleId: 'right-sentiment',
            scaleFormatter: (value) => Math.abs(value).toFixed(2),
          },
          {
            apiMetricName: 'sentiment_negative_total',
            style: 'histogram',
            color: 'red',

            pane: 1,

            transformData: (data: TMetricData) =>
              data.map((item) => ({ ...item, value: -item.value })),

            scaleId: 'right-sentiment',
          },
        ],
  )

  // $inspect(metricSeries.$)

  useChartPlanRestrictionsCtx.set()

  const priceSeries = metricSeries.$[0]

  function toggle() {
    priceSeries.scale.$$.visible = !priceSeries.scale.$$.visible
  }

  const slugs = ['bitcoin', 'ethereum']

  onMount(() => {
    return () => {
      jobScheduler.destroy()
    }
  })
</script>

<main class="p-4" style={viewportPriority ? 'padding:900px 16px' : ''}>
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

  <ChartWidget {viewportPriority}></ChartWidget>

  <button onclick={toggle}> Toggle axis </button>
</main>
