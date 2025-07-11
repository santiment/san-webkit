<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Area from './Area.svelte'
  import SvgTooltip from './SvgTooltip.svelte'
  import { getOffset, getValueAt } from './utils.js'
  import { useMiniChartTooltipCtx } from './ctx.svelte.js'

  type TProps = {
    tooltipVisible?: boolean
    tooltipSyncKey?: string
    formatTooltipValue?: (value: number) => string
  } & ComponentProps<typeof Area>

  const { tooltip } = useMiniChartTooltipCtx()

  const {
    data,
    width,
    height,
    tooltipVisible = false,
    tooltipSyncKey = '',
    formatTooltipValue = (value: number) => value.toString(),
    ...rest
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
  const currentValue = $derived(getValueAt(data, offset, width))
  const valueFormatted = $derived(formatTooltipValue(currentValue))

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

<Area {...rest} {data} {width} {height} onmousemove={onMouseMove} onmouseleave={onMouseLeave}>
  {#if tooltipVisible && offset}
    <line x1={offset} x2={offset} y1="0" y2={height} class="stroke-waterloo" stroke-width="2" />

    <foreignObject {width} {height}>
      <SvgTooltip {valueFormatted} />
    </foreignObject>
  {/if}
</Area>
