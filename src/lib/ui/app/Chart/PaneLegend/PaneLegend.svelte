<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { TSeries } from '../ctx/series.svelte.js'

  import Button from '$ui/core/Button/index.js'

  import { usePanesTooltip } from './ctx.svelte'
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
          {@render children({ metrics, index })}

          {#if index === 0 && Object.keys(chartPlanRestrictions.$).length}
            <Button
              variant="border"
              icon="crown"
              iconSize="12"
              class="mt-1.5 border-orange bg-white fill-orange"
              onclick={() =>
                chartPlanRestrictions.showDialog({ source: 'chart_pane_legend_upgrade_btn' })}
            >
              Upgrade to see all Data!
            </Button>
          {/if}
        </Pane>
      {/if}
    {/each}
  {/key}
</MetricInfoPopover>
