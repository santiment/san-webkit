<script lang="ts">
  import { useMetricsRestrictionsCtx } from '$lib/ctx/metrics-registry/index.js'
  import type { TChartMetric } from '$lib/ctx/metrics-registry/types/index.js'
  import { useMetricSeriesCtx } from '$ui/app/Chart/ctx/series.svelte.js'
  import RestrictedDataDialog, {
    useChartPlanRestrictionsCtx,
  } from '$ui/app/Chart/RestrictedDataDialog/index.js'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const METRICS: TChartMetric[] = [
    {
      apiMetricName: 'social_volume_total',
      type: 'asset_metric',
    },
    {
      apiMetricName: 'social_dominance_total',
      type: 'asset_metric',
    },
    {
      apiMetricName: 'price_usd',
      type: 'asset_metric',
    },
    {
      apiMetricName: 'sentiment_positive_total',
      type: 'asset_metric',
    },
    {
      apiMetricName: 'sentiment_negative_total',
      type: 'asset_metric',
    },
  ]

  useMetricSeriesCtx.set(METRICS)
  useMetricsRestrictionsCtx.set()
  const { chartPlanRestrictions } = useChartPlanRestrictionsCtx()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => chartPlanRestrictions.showDialog({ source: 'storybook' })}>Open</button>
  </div>
</div>

<StoryDialog render={RestrictedDataDialog}></StoryDialog>
