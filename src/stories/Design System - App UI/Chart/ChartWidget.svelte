<script lang="ts">
  import { MetricType } from '$lib/ctx/metrics-registry/types/index.js'
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
    useChartGlobalParametersCtx,
    useHighlightedMetricCtx,
    useMetricSeriesCtx,
    type TSeries,
  } from '$ui/app/Chart/ctx/index.js'
  import { useDrawingToolsCtx } from '$ui/app/Chart/drawing-tools/ctx.svelte.js'
  import Drawings from '$ui/app/Chart/drawing-tools/Drawings.svelte'
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
  import AIExplanationStatus from '$ui/app/Chart/PaneLegend/Metric/AIExplanationStatus.svelte'
  import SpikeExplanations from '$ui/app/Chart/SpikeExplanations/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import Select from '$ui/core/Select/Select.svelte'
  import DrawingTools from './DrawingTools.svelte'

  let { viewportPriority = false, drawings = [] } = $props()

  useChartCtx()
  const { applyTimeZoneOffset } = useTimeZoneCtx.set()

  const { metricSeries } = useMetricSeriesCtx.get()
  const { chart } = useChartCtx()

  const { highlighted, onMetricEnter, onMetricLeave } = useHighlightedMetricCtx()
  const { globalParameters } = useChartGlobalParametersCtx.get()

  // NOTE: viewportPriority is story arg
  const { viewportObserverAction } = viewportPriority ? useItemViewportPriorityFlow() : {}
  const Chart = viewportPriority ? ViewportChart : BaseChart

  const showFormulaEditorDialog = showFormulaEditorDialog$()

  useDrawingToolsCtx.set({
    drawings,
  })

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

  const metricUpdates = new Map<string, [number, number]>()
  function onData() {
    const { from, to } = globalParameters.dates$
    const key = from + to

    let updates = metricUpdates.get(key)

    if (!updates) {
      metricUpdates.clear()
      metricUpdates.set(key, (updates = [Date.now(), 0]))
    }

    if (updates[1] > 2) return

    updates[1]++

    // NOTE: Ignoring updates that came after 5 seconds
    if (Date.now() > updates[0] + 5000) {
      return
    }

    const chartWidget = chart.$
    if (!chartWidget) return

    chartWidget.resetAllScales()
  }

  let granularityShortcut = $state.raw<null | {
    metric: TSeries
    customAnchor: HTMLElement
    onSelect: (item: any) => void
  }>(null)
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
        onclick={metric.type === MetricType.FORMULAS
          ? () =>
              showFormulaEditorDialog({ formula: metric.formula!.$, index })
                .then((data) => {
                  console.log(data)
                  if (!data) return
                  metric.formula!.$ = data.formula
                })
                .catch((e) => console.error('In catch', e))
          : () => {
              metric.ui.$$.style = metric.ui.$$.style === 'line' ? 'histogram' : 'line'
            }}
      >
        {metric.label}
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
        <ApiMetricSeries {index} series={item} {onData}></ApiMetricSeries>
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
            isFocused={metric === granularityShortcut?.metric}
            paneControls
            onmouseenter={() => onMetricEnter(metric)}
            onmouseleave={onMetricLeave}
          >
            {#snippet label()}
              {metric.label}

              <PaneMetricVersionStatus {metric}></PaneMetricVersionStatus>
              <PaneMetricGranularityStatus
                {metric}
                onclick={(e) => {
                  const customAnchor = e.currentTarget

                  granularityShortcut = {
                    metric,
                    customAnchor,
                    onSelect(item) {
                      console.log(item, metric)
                    },
                  }
                }}
              ></PaneMetricGranularityStatus>

              {#if 'apiMetricName' in metric && metric.apiMetricName === 'price_usd'}
                <AIExplanationStatus {metric}></AIExplanationStatus>
              {/if}
            {/snippet}
          </PaneMetric>
        {/each}
      {/snippet}
    </PaneLegend>

    <Drawings></Drawings>
  </Chart>

  <div class="mt-3 column">
    <Minimap></Minimap>

    <div class="flex">
      <DatesRangeShortcuts></DatesRangeShortcuts>
    </div>
  </div>
</div>

{#if granularityShortcut}
  <Select
    open={true}
    withDefaultTrigger={false}
    items={[{ value: 1, label: '1' }]}
    {...granularityShortcut}
    onOpenChange={() => setTimeout(() => (granularityShortcut = null), 100)}
  ></Select>
{/if}
