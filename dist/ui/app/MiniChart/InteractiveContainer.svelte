<script lang="ts">
  import type { Snippet } from 'svelte'

  import { useMiniChartTooltipCtx } from './ctx.svelte.js'
  import { getOffset } from './utils.js'

  const { tooltip } = useMiniChartTooltipCtx()

  type TProps = {
    tooltipSyncKey: string
    children: Snippet<[{ offset: number }]>
  } & { as: any } & Record<string, any>

  const { as, tooltipSyncKey, children, ...props }: TProps = $props()

  let localOffset = $state(0)

  const offset = $derived(
    getOffset({
      localOffset,
      sharedOffset: tooltip.$.offset,
      tooltipSyncKey,
      storeSyncKey: tooltip.$.syncKey,
    }),
  )

  function onMouseMove({ offsetX }: MouseEvent) {
    localOffset = offsetX

    if (tooltipSyncKey) {
      tooltip.updateOffset(offsetX, tooltipSyncKey)
    }
  }

  function onMouseLeave() {
    localOffset = 0

    if (tooltipSyncKey) {
      tooltip.updateOffset(0, tooltipSyncKey)
    }
  }
</script>

{#if typeof as === 'string'}
  <svelte:element this={as} {...props} onmousemove={onMouseMove} onmouseleave={onMouseLeave}>
    {@render children({ offset })}
  </svelte:element>
{:else}
  {@const Component = as}

  <Component {...props} onmousemove={onMouseMove} onmouseleave={onMouseLeave}>
    {@render children({ offset })}
  </Component>
{/if}
