<script lang="ts">
  import type { Props } from './svelte'

  import { getValue } from './utils'

  let className = ''
  export { className as class }
  export let data: Props['data'] = []
  export let points: Props['points'] = []
  export let width = 70
  export let height = 50
  export let valueKey: Props['valueKey'] = undefined
  export let style: Props['style']

  $: points = getPoints(data)
  $: linePoints = points.join(' ')

  function getPoints(data) {
    if (!data) return []

    const { length } = data
    if (length < 2) return []

    let min = getValue(data[0], valueKey)
    let max = getValue(data[0], valueKey)

    data.forEach((item) => {
      const value = getValue(item, valueKey)
      if (value < min) min = value
      if (value > max) max = value
    })

    if (min === max) min = 0

    const xAxisFactor = width / (length - 1)
    const yAxisFactor = height / (max - min)

    return data.map(
      (item, i) => `${i * xAxisFactor},${(max - getValue(item, valueKey)) * yAxisFactor}`,
    )
  }
</script>

{#if points.length}
  <svg
    viewBox="0 0 {width} {height}"
    {height}
    {style}
    class:empty={!points.length}
    class={className}
    role="figure"
    on:mousemove
    on:mouseleave
  >
    <polyline points={linePoints} />
    <slot {points} {linePoints} />
  </svg>
{/if}

<style>
  svg {
    overflow: visible;
  }
  polyline {
    fill: none;
    stroke-width: 2;
    stroke: var(--color);
  }

  .empty {
    visibility: hidden;
  }
</style>
