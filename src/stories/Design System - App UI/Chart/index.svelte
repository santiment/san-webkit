<script lang="ts">
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import {
    getDateFormats,
    getTimeFormats,
    parseAsStartEndDate,
    suggestPeriodInterval,
  } from '$lib/utils/dates/index.js'
  import { JobScheduler } from '$lib/utils/job-scheduler.js'
  import { type TMetricData } from '$ui/app/Chart/api/index.js'
  import {
    useMetricSeriesCtx,
    useChartGlobalParametersCtx,
    useColorGenerator,
  } from '$ui/app/Chart/ctx/index.js'
  import { useApiMetricFetchSettingsCtx } from '$ui/app/Chart/ctx/metric-data.svelte.js'
  import Chart, { ApiMetricSeries, DatesRangeShortcuts } from '$ui/app/Chart/index.js'
  import PaneLegend, { PaneMetric } from '$ui/app/Chart/PaneLegend/index.js'
  import { useMetricsRestrictionsCtx } from '$lib/ctx/metrics-registry/index.js'
  import SpikeExplanations from '$ui/app/Chart/SpikeExplanations'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import { onMount } from 'svelte'
  import { useChartPlanRestrictionsCtx } from '$ui/app/Chart/RestrictedDataDialog/index.js'
  import { TimeZoneSelector } from '$ui/app/Chart/index.js'
  import { useClockCtx, useTimeZoneCtx } from '$lib/ctx/time/index.js'

  useAssetsCtx.set()
  const { applyTimeZoneOffset } = useTimeZoneCtx.set()
  useClockCtx.set()
  const { MetricsRestrictions } = useMetricsRestrictionsCtx.set()

  $inspect(MetricsRestrictions.$)

  const jobScheduler = JobScheduler()
  useApiMetricFetchSettingsCtx.set({ jobScheduler })

  const { colorGenerator } = useColorGenerator()

  const { globalParameters } = useChartGlobalParametersCtx({
    from: 'utc_now-2y',
    interval: suggestPeriodInterval(
      parseAsStartEndDate('utc_now-2y', { dayStart: true }),
      parseAsStartEndDate('utc_now', { dayStart: false }),
    ),
  })
  const { metricSeries } = useMetricSeriesCtx([
    {
      name: 'price_usd',
      label: 'Price USD',
      style: 'line',
      color: colorGenerator.new(),
      scaleId: 'right-price_usd',
    },
    {
      name: 'social_dominance_total',
      style: 'line',
      color: colorGenerator.new(),
      scaleId: 'right-social_dominance_total',
    },
    {
      name: 'social_volume_total',
      style: 'histogram',
      color: colorGenerator.new(),
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

  useChartPlanRestrictionsCtx.set()

  const priceSeries = metricSeries.$[0]

  function toggle() {
    priceSeries.scale.$$.visible = !priceSeries.scale.$$.visible
  }

  const slugs = ['bitcoin', 'ethereum']

  function timeFormatter(time: number) {
    const date = applyTimeZoneOffset(new Date(time * 1000))

    const { ddd, DD, MMM, YY } = getDateFormats(date)
    const { HH, mm } = getTimeFormats(date)

    return `${ddd} ${DD} ${MMM}'${YY}  ${HH}:${mm}`
  }

  onMount(() => {
    return () => {
      jobScheduler.destroy()
    }
  })
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

  <div class="flex center">
    <TimeZoneSelector></TimeZoneSelector>
  </div>

  <div class="mt-4 flex gap-2">
    {#each metricSeries.$ as metric}
      <div class="rounded border p-1" style="border-color:{metric.color.$}">
        {metric.label}
      </div>
    {/each}
  </div>

  <Chart
    watermark
    class="h-[500px]"
    onRangeSelectChange={console.log}
    onRangeSelectEnd={console.log}
    options={{
      localization: { timeFormatter },
    }}
  >
    {#each metricSeries.$ as item (item.id)}
      <ApiMetricSeries series={item}></ApiMetricSeries>
    {/each}

    <SpikeExplanations></SpikeExplanations>

    <PaneLegend>
      {#snippet children({ metrics })}
        {#each metrics as metric (metric.id)}
          <PaneMetric {metric}></PaneMetric>
        {/each}
      {/snippet}
    </PaneLegend>
  </Chart>

  <div class="mt-3 flex">
    <DatesRangeShortcuts></DatesRangeShortcuts>
  </div>

  <button onclick={toggle}> Toggle axis </button>
</main>
