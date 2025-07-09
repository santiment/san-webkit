<script lang="ts">
  import { useTimeZoneCtx } from '$lib/ctx/time/index.js'
  import { useItemViewportPriorityFlow } from '$lib/ctx/viewport-priority/index.js'
  import { getFormattedDetailedTimestamp } from '$lib/utils/dates/index.js'
  import { AskForInsightButton } from '$ui/app/AIChatbot/index.js'
  import { useMetricSeriesCtx } from '$ui/app/Chart/ctx/index.js'
  import BaseChart, {
    ViewportChart,
    ApiMetricSeries,
    DatesRangeShortcuts,
    Minimap,
    TimeZoneSelector,
  } from '$ui/app/Chart/index.js'
  import PaneLegend, { PaneMetric } from '$ui/app/Chart/PaneLegend/index.js'
  import SpikeExplanations from '$ui/app/Chart/SpikeExplanations/index.js'

  let { viewportPriority = false } = $props()

  const { applyTimeZoneOffset } = useTimeZoneCtx.set()

  const { metricSeries } = useMetricSeriesCtx.get()

  // NOTE: viewportPriority is story arg
  const { viewportObserverAction } = viewportPriority ? useItemViewportPriorityFlow() : {}
  const Chart = viewportPriority ? ViewportChart : BaseChart

  function timeFormatter(time: number) {
    return getFormattedDetailedTimestamp(applyTimeZoneOffset(new Date(time * 1000)), { utc: true })
  }
</script>

<div class="relative column">
  <div
    class="viewport-anchor"
    use:viewportObserverAction={{ top: '-150px', bottom: '-150px' }}
  ></div>

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
    {#each metricSeries.$ as item, index (item.id)}
      <ApiMetricSeries {index} series={item}></ApiMetricSeries>
    {/each}

    <SpikeExplanations>
      {#snippet children({ slug, explanation })}
        <AskForInsightButton {slug} {explanation}></AskForInsightButton>
      {/snippet}
    </SpikeExplanations>

    <PaneLegend>
      {#snippet children({ metrics })}
        {#each metrics as metric (metric.id)}
          <PaneMetric {metric}></PaneMetric>
        {/each}
      {/snippet}
    </PaneLegend>
  </Chart>

  <div class="mt-3 column">
    <Minimap></Minimap>

    <div class="flex">
      <DatesRangeShortcuts></DatesRangeShortcuts>
    </div>
  </div>
</div>
