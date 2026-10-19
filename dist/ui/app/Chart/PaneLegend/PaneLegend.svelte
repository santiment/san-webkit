<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { TSeries } from '../ctx/series.svelte.js'

  import Button from '../../../core/Button/index.js'
  import { cn } from '../../../utils/index.js'

  import { usePaneLegendCompactCtx, usePanesTooltip } from './ctx.svelte'
  import MetricInfoPopover from './Metric/InfoPopover.svelte'
  import { useChartPlanRestrictionsCtx } from '../RestrictedDataDialog/index.js'
  import Pane from './Pane.svelte'
  import { useChartPanesCtx } from '../ctx/panes.svelte.js'

  type TProps = {
    class?: string
    children: Snippet<[{ metrics: TSeries[]; index: number }]>
  }
  let { class: className, children }: TProps = $props()

  const { panes } = useChartPanesCtx.get()

  const { chartPlanRestrictions } = useChartPlanRestrictionsCtx()
  const { paneIndexSeries } = usePanesTooltip()

  let paneMetrics: { paneData: undefined | [number, ...TSeries[]]; element: HTMLElement }[] =
    $state.raw([])

  const { isHiddenMetricsDisplayed } = usePaneLegendCompactCtx()

  $effect(() => {
    panes.$
    paneIndexSeries.$

    // Accumulate multiple pane changes
    const timer = setTimeout(() => {
      paneMetrics = Array.from(panes.$).map(([pane, element]) => {
        return { paneData: paneIndexSeries.$.get(pane), element }
      })
    }, 30)

    return () => {
      clearTimeout(timer)
    }
  })
</script>

<MetricInfoPopover>
  {#key paneMetrics}
    {#each paneMetrics as { paneData, element }}
      {#if paneData}
        {@const [index, ...metrics] = paneData}

        <Pane class={className} {element}>
          {@const legendMetrics = isHiddenMetricsDisplayed.$
            ? metrics
            : metrics.filter((metric) => metric.visible.$)}

          {@render children({ metrics: legendMetrics, index })}

          {#if index === 0 && Object.keys(chartPlanRestrictions.$).length}
            <Button
              variant="border"
              icon="crown"
              iconSize="12"
              class="my-1.5 border-orange bg-white fill-orange"
              onclick={() =>
                chartPlanRestrictions.showDialog({ source: 'chart_pane_legend_upgrade_btn' })}
            >
              Upgrade to see all Data!
            </Button>
          {/if}

          <Button
            variant="border"
            icon="arrow-down"
            size="sm"
            class={cn('ml-1.5 bg-white', isHiddenMetricsDisplayed.$ && '[&_svg]:rotate-180')}
            iconSize="10"
            style="--expl-left:0"
            explanation="{isHiddenMetricsDisplayed.$
              ? 'Hide'
              : `Show ${metrics.length - legendMetrics.length}`} hidden metrics"
            onclick={() => (isHiddenMetricsDisplayed.$ = !isHiddenMetricsDisplayed.$)}
          ></Button>
        </Pane>
      {/if}
    {/each}
  {/key}
</MetricInfoPopover>
