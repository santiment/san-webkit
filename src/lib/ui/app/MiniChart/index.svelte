<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { TMiniChartProps } from './types.js'

  import { cn } from '$ui/utils/index.js'

  import { getValue } from './utils.js'

  type TProps = {
    class?: string
    data?: TMiniChartProps['data']
    width?: number
    height?: number
    valueKey?: TMiniChartProps['valueKey']
    style?: string
    areaFill: Snippet<[{ points: string[]; linePoints: string }]>
    children?: Snippet
    onmousemove: (e: MouseEvent) => void
    onmouseleave: (e: MouseEvent) => void
  }

  const {
    class: className = '',
    data = [],
    width = 70,
    height = 50,
    valueKey,
    style = '',
    areaFill,
    children,
    onmousemove,
    onmouseleave,
  }: TProps = $props()

  const points = $derived(getPoints(data))
  const linePoints = $derived(points.join(' '))

  function getPoints(data: TMiniChartProps['data']) {
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
    class={cn('overflow-hidden', !points.length && 'invisible', className)}
    role="figure"
    {onmousemove}
    {onmouseleave}
  >
    <polyline class="fill-none stroke-[var(--color)] stroke-2" points={linePoints} />
    {@render areaFill({ points, linePoints })}
    {@render children?.()}
  </svg>
{/if}
