<script lang="ts">
  import type { Props } from './svelte'

  import Chart from './index.svelte'
  import { getTooltipContext } from './tooltip'
  import { getValue } from './utils'

  let className = ''
  export { className as class }
  export let id = ''
  export let data: Props['data']
  export let width: number
  export let height: number
  export let valueKey: Props['valueKey'] = undefined
  export let style: Props['style'] = undefined

  export let tooltipVisible = false
  export let tooltipSyncKey: string | undefined = undefined
  export let formatTooltipValue = (value: number) => value.toString()

  const { offset$: sharedOffset$, updateOffset, checkKey } = getTooltipContext()

  let localOffset: number | null = null

  $: sharedOffset = tooltipSyncKey && checkKey(tooltipSyncKey) ? $sharedOffset$ : null
  $: offset = tooltipSyncKey ? sharedOffset : localOffset
  $: currentValue = getValueAt(offset, width)
  $: valueFormatted = currentValue !== undefined ? formatTooltipValue(currentValue) : currentValue

  function getValueAt(offset: number | null, width: number) {
    if (!offset) return
    const valueIndex = Math.round((offset / width) * (data.length - 1))
    return getValue(data[valueIndex])
  }

  function onMouseMove({ offsetX }: MouseEvent) {
    localOffset = offsetX
    if (tooltipSyncKey) {
      updateOffset(offsetX, tooltipSyncKey)
    }
  }

  function onMouseLeave() {
    localOffset = null
    if (tooltipSyncKey) {
      updateOffset(null, tooltipSyncKey)
    }
  }

  export function getAreaPoints(points: Props['points'], linePoints: string) {
    const [startX, startY] = points[0].split(',')
    const [lastX] = points[points.length - 1].split(',')

    return `${linePoints} ${lastX},${height} ${startX},${height}, ${startX},${startY}`
  }
</script>

<Chart
  {data}
  {width}
  {height}
  {valueKey}
  {style}
  class="relative {className}"
  on:mousemove={onMouseMove}
  on:mouseleave={onMouseLeave}
  let:points
  let:linePoints
>
  <polyline points={getAreaPoints(points, linePoints)} fill="url(#{id}-area)" />
  <defs>
    <linearGradient id="{id}-area" x1="0" x2="0" y1="0" y2="2">
      <stop offset="0%" stop-color="var(--color)" stop-opacity="0.3" />
      <stop offset="60%" stop-color="var(--white)" stop-opacity="0" />
    </linearGradient>
  </defs>

  {#if tooltipVisible && offset}
    <line x1={offset} x2={offset} y1="0" y2={height} stroke="var(--waterloo)" />

    <foreignObject {width} {height}>
      <tooltip class="c-fiord">{valueFormatted}</tooltip>
    </foreignObject>
  {/if}
</Chart>

<style>
  tooltip {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    padding: 2px 4px;
  }
</style>
