<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Area from './Area.svelte'
  import SvgTooltip from './SvgTooltip.svelte'
  import { getValueAt } from './utils.js'
  import InteractiveContainer from './InteractiveContainer.svelte'

  type TProps = {
    tooltipVisible?: boolean
    tooltipSyncKey?: string
    formatTooltipValue?: (value: number) => string
  } & ComponentProps<typeof Area>

  const {
    data,
    width,
    height,
    tooltipVisible = false,
    tooltipSyncKey = '',
    formatTooltipValue = (value: number) => value.toString(),
    ...rest
  }: TProps = $props()
</script>

<InteractiveContainer as={Area} {tooltipSyncKey} {data} {width} {height} {...rest}>
  {#snippet children({ offset })}
    {#if tooltipVisible && offset}
      {@const currentValue = getValueAt(data, offset, width)}
      {@const valueFormatted = formatTooltipValue(currentValue)}
      <line x1={offset} x2={offset} y1="0" y2={height} class="stroke-waterloo" stroke-width="2" />

      <foreignObject {width} {height}>
        <SvgTooltip {valueFormatted} />
      </foreignObject>
    {/if}
  {/snippet}
</InteractiveContainer>
