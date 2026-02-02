<script lang="ts">
  import { useTimeZoneCtx } from '$lib/ctx/time/index.js'
  import { useItemViewportPriorityFlow } from '$lib/ctx/viewport-priority/index.js'
  import {
    createMetricSeriesCsvHeaders,
    downloadCsv,
    mergeMetricSeriesData,
  } from '$lib/utils/csv/index.js'
  import { getFormattedDetailedTimestamp } from '$lib/utils/dates/index.js'
  import { AskForInsightButton } from '$ui/app/AIChatbot/index.js'
  import {
    useChartCtx,
    useHighlightedMetricCtx,
    useMetricSeriesCtx,
    type TSeries,
  } from '$ui/app/Chart/ctx/index.js'
  import { showFormulaEditorDialog$ } from '$ui/app/Chart/FormulaEditorDialog/index.js'

  import BaseChart, {
    ViewportChart,
    ApiMetricSeries,
    ApiSignalSeries,
    DatesRangeShortcuts,
    Minimap,
    TimeZoneSelector,
    downloadChartAsJpeg,
  } from '$ui/app/Chart/index.js'
  import PaneLegend, {
    PaneMetric,
    PaneMetricGranularityStatus,
    PaneMetricVersionStatus,
  } from '$ui/app/Chart/PaneLegend/index.js'
  import SpikeExplanations from '$ui/app/Chart/SpikeExplanations/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import DrawingTools from './DrawingTools.svelte'

  let { viewportPriority = false } = $props()

  useChartCtx()
  const { applyTimeZoneOffset } = useTimeZoneCtx.set()

  const { metricSeries } = useMetricSeriesCtx.get()
  const { chart } = useChartCtx()

  const { highlighted, onMetricEnter, onMetricLeave } = useHighlightedMetricCtx()

  // NOTE: viewportPriority is story arg
  const { viewportObserverAction } = viewportPriority ? useItemViewportPriorityFlow() : {}
  const Chart = viewportPriority ? ViewportChart : BaseChart

  const showFormulaEditorDialog = showFormulaEditorDialog$()

  function timeFormatter(time: number) {
    return getFormattedDetailedTimestamp(applyTimeZoneOffset(new Date(time * 1000)), { utc: true })
  }

  function exportCSV() {
    const metrics = $state.snapshot(metricSeries.$) as TSeries[]

    const rows = mergeMetricSeriesData(metrics)
    const headers = createMetricSeriesCsvHeaders(metrics)

    const filename = metrics.map((item) => item.apiMetricName).join(', ')

    downloadCsv(filename, headers, rows)
  }

  function exportChartAsJpeg() {
    const filename = metricSeries.$.map((s) => s.apiMetricName)
      .join(', ')
      .replace(/[<>:"/\\|?*]+/g, '_')

    downloadChartAsJpeg(filename, metricSeries.$, chart.$)
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
    {#each metricSeries.$ as metric, index}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="rounded border p-1"
        style="border-color:{metric.ui.$$.color}"
        onmouseenter={() => onMetricEnter(metric)}
        onmouseleave={onMetricLeave}
        onclick={metric.formula
          ? () =>
              showFormulaEditorDialog({ formula: metric.formula!.$, index })
                .then((data) => {
                  // console.log(data)
                  metric.formula!.$ = data.formula
                })
                .catch((e) => console.error('In catch', e))
          : () => {
              metric.ui.$$.style = metric.ui.$$.style === 'line' ? 'histogram' : 'line'
            }}
      >
        {metric.formula?.$.name || metric.label}
      </div>
    {/each}

    <Button icon="download" variant="fill" onclick={exportCSV}>Download as CSV</Button>
    <Button icon="download" variant="fill" onclick={exportChartAsJpeg}>Download as JPG</Button>
  </div>

  <DrawingTools></DrawingTools>

  <Chart
    watermark
    class="h-[700px]"
    onRangeSelectChange={console.log}
    onRangeSelectEnd={console.log}
    options={{
      localization: { timeFormatter },
    }}
  >
    {#each metricSeries.$ as item, index (item.id)}
      {#if item.ui.$$.style === 'signal'}
        <ApiSignalSeries {index} series={item} priceSeries={metricSeries.$[0]}></ApiSignalSeries>
      {:else}
        <ApiMetricSeries {index} series={item}></ApiMetricSeries>
      {/if}
    {/each}

    <SpikeExplanations>
      {#snippet children({ slug, explanation })}
        <AskForInsightButton {slug} {explanation}></AskForInsightButton>
      {/snippet}
    </SpikeExplanations>

    <PaneLegend>
      {#snippet children({ metrics })}
        {#each metrics as metric (metric.id)}
          <PaneMetric
            {metric}
            paneControls
            onmouseenter={() => onMetricEnter(metric)}
            onmouseleave={onMetricLeave}
          >
            {#snippet label()}
              {metric.formula?.$.name || metric.label}

              <PaneMetricVersionStatus {metric}></PaneMetricVersionStatus>
              <PaneMetricGranularityStatus {metric}></PaneMetricGranularityStatus>
            {/snippet}
          </PaneMetric>
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
