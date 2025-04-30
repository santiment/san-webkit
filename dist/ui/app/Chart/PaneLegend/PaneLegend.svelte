<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { IPaneApi, Time } from '@santiment-network/chart-next'
  import type { TSeries } from '../ctx/series.svelte.js'

  import { cn } from '../../../utils/index.js'
  import Button from '../../../core/Button/index.js'

  import { usePanesTooltip } from './ctx.svelte'
  import { useChartPlanRestrictionsCtx } from '../RestrictedDataDialog/index.js'

  type TProps = {
    class?: string
    children: Snippet<[{ pane: IPaneApi<Time>; metrics: Set<TSeries>; index: number }]>
  }
  let { class: className, children }: TProps = $props()

  const { chartPlanRestrictions } = useChartPlanRestrictionsCtx.get()
  const { paneSet, panes } = usePanesTooltip()

  function mountToPane(node: HTMLElement, { chartPane }: { chartPane: any }) {
    requestAnimationFrame(() => {
      const el = chartPane.getHTMLElement()
      if (!el) return

      el.children[1].appendChild(node)

      node.classList.remove('hidden')
    })

    return {
      destroy() {
        node?.remove()
      },
    }
  }
</script>

{#key paneSet.$}
  {#each Object.keys(paneSet.$) as paneIndex}
    {@const chartPane = panes.$[+paneIndex]}
    {@const metricsList = paneSet.$[+paneIndex]}
    <section
      class={cn('absolute left-1 top-1 z-[3] hidden items-start gap-0.5 column', className)}
      use:mountToPane={{ chartPane }}
    >
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
    </section>
  {/each}
{/key}
