<script lang="ts">
  import type { TMiniChartProps } from './types.js'
  import type { Snippet } from 'svelte'

  import { cn } from '../../utils/index.js'

  import Chart from './index.svelte'

  type TProps = {
    class?: string
    id?: string
    data: TMiniChartProps['data']
    width: TMiniChartProps['width']
    height: TMiniChartProps['height']
    valueKey?: TMiniChartProps['valueKey']
    style: TMiniChartProps['style']
    onmousemove?: any
    onmouseleave?: any
    children?: Snippet
  }

  const {
    class: className = '',
    id = '',
    data,
    width,
    height,
    valueKey,
    style,
    onmousemove,
    onmouseleave,
    children,
  }: TProps = $props()

  function getAreaPoints(points: TMiniChartProps['points'], linePoints: string) {
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
  {onmousemove}
  {onmouseleave}
  class={cn('relative', className)}
>
  {#snippet areaFill({ points, linePoints })}
    <polyline points={getAreaPoints(points, linePoints)} fill="url(#{id}-area)" />

    <defs>
      <linearGradient id="{id}-area" x1="0" x2="0" y1="0" y2="2">
        <stop offset="0%" stop-color="var(--color)" stop-opacity="0.3" />
        <stop offset="60%" stop-color="var(--white)" stop-opacity="0" />
      </linearGradient>
    </defs>
  {/snippet}

  {@render children?.()}
</Chart>
