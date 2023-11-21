<script lang="ts">
  import { getTooltipContext } from './tooltip'

  let className = ''
  export { className as class }
  export let syncKey: string | undefined = undefined
  export let formatValue = (value: number) => value.toString()
  export let data: number[]

  const { offsetMap, getOffset, updateOffset } = getTooltipContext()

  let width = 0
  let height = 0

  $: offset = getOffset($offsetMap, syncKey)
  $: currentValue = getValueAt(offset, width)
  $: valueFormatted = currentValue !== undefined ? formatValue(currentValue) : currentValue

  function getValueAt(offset: number | null, width: number) {
    if (!offset) return
    const valueIndex = Math.round((offset / width) * (data.length - 1))
    return data[valueIndex]
  }
</script>

<tooltip-wrapper
  class="relative {className}"
  role="figure"
  bind:clientHeight={height}
  bind:clientWidth={width}
  on:mousemove={({ offsetX }) => updateOffset(offsetX, syncKey)}
  on:mouseleave={() => updateOffset(null, syncKey)}
>
  <slot />

  {#if offset}
    <svg {width} {height}>
      <line x1={offset} x2={offset} y1="0" y2={height} stroke="var(--waterloo)" />
    </svg>
  {/if}

  {#if valueFormatted !== undefined}
    <tooltip class="c-fiord">{valueFormatted}</tooltip>
  {/if}
</tooltip-wrapper>

<style>
  tooltip-wrapper {
    display: block;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  tooltip {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    padding: 2px 4px;
    pointer-events: none;
  }
</style>
