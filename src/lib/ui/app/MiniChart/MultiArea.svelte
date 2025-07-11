<script lang="ts">
  import type { TMiniChartProps, TArea } from './types.js'

  import Area from './Area.svelte'
  import { useMiniChartTooltipCtx } from './ctx.svelte.js'
  import { getOffset, getValueAt } from './utils.js'
  import SvgTooltip from './SvgTooltip.svelte'

  type TProps = {
    id?: string
    width: TMiniChartProps['width']
    height: TMiniChartProps['height']
    areas: TArea[]
    tooltipVisible?: boolean
    tooltipSyncKey?: string
  }

  let { tooltip } = useMiniChartTooltipCtx()

  const {
    id = '',
    width,
    height,
    areas,
    tooltipVisible = false,
    tooltipSyncKey = '',
  }: TProps = $props()

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

  const defaultFormatter = (value: number) => value.toString()
</script>

<article
  style="width: {width}px; height: {height}px;"
  class="relative"
  onmouseleave={onMouseLeave}
  onmousemove={onMouseMove}
>
  {#each areas as { data, color }, i}
    <div class="absolute">
      <Area {data} {height} {width} style="--color: var(--{color}); opacity: 0.9" id="{id}-{i}" />
    </div>
  {/each}

  {#if tooltipVisible && offset}
    <svg viewBox="0 0 {width} {height}" {height} role="figure">
      <line x1={offset} x2={offset} y1="0" y2={height} stroke="var(--waterloo)" stroke-width={2} />
    </svg>

    <SvgTooltip>
      {#snippet value()}
        <div class="flex flex-col">
          {#each areas as { title, data, formatter = defaultFormatter }}
            {@const currentValue = getValueAt(data, offset, width)}
            {@const valueFormatted = formatter(currentValue)}

            <div class="flex gap-1">
              <span>{valueFormatted}</span>
              <span class="text-waterloo">{title}</span>
            </div>
          {/each}
        </div>
      {/snippet}
    </SvgTooltip>
  {/if}
</article>
