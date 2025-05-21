<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { IPaneApi, Time } from '@santiment-network/chart-next'
  import type { TSeries } from '../ctx/series.svelte.js'

  import Button from '$ui/core/Button/index.js'

  import { usePanesTooltip } from './ctx.svelte'
  import MetricInfoPopover from './Metric/InfoPopover.svelte'
  import { useChartPlanRestrictionsCtx } from '../RestrictedDataDialog/index.js'
  import Pane from './Pane.svelte'

  type TProps = {
    class?: string
    children: Snippet<[{ pane: IPaneApi<Time>; metrics: Set<TSeries>; index: number }]>
  }
  let { class: className, children }: TProps = $props()

  const { chartPlanRestrictions } = useChartPlanRestrictionsCtx()
  const { paneSet, panes } = usePanesTooltip()
</script>

<MetricInfoPopover>
  {#key paneSet.$}
    {#each Object.keys(paneSet.$) as paneIndex}
      {@const chartPane = panes.$[+paneIndex]}
      {@const metricsList = paneSet.$[+paneIndex]}

      <Pane class={className} {chartPane}>
        {@render children({ pane: chartPane, metrics: metricsList, index: +paneIndex })}

        {#if +paneIndex === 0 && Object.keys(chartPlanRestrictions.$).length}
          <Button
            variant="border"
            icon="crown"
            iconSize="12"
            class="border-orange fill-orange"
            onclick={() =>
              chartPlanRestrictions.showDialog({ source: 'chart_pane_legend_upgrade_btn' })}
          >
            Upgrade to see all Data!
          </Button>
        {/if}
      </Pane>
    {/each}
  {/key}
</MetricInfoPopover>
