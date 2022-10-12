<script lang="ts">
  import type { Props } from './svelte'
  import Chart from './index.svelte'

  let className = ''
  export { className as class }
  export let id = ''
  export let data: Props['data']
  export let width: number
  export let height: number
  export let valueKey: Props['valueKey']
  export let style: Props['style']

  export function getAreaPoints(points: Props['points'], linePoints: string) {
    const [startX, startY] = points[0].split(',')
    const [lastX] = points[points.length - 1].split(',')

    return `${linePoints} ${lastX},${height} ${startX},${height}, ${startX},${startY}`
  }
</script>

<Chart {data} {width} {height} {valueKey} {className} {style} let:points let:linePoints>
  <polyline points={getAreaPoints(points, linePoints)} fill="url(#{id}-area)" />
  <defs>
    <linearGradient id="{id}-area" x1="0" x2="0" y1="0" y2="2">
      <stop offset="0%" stop-color="var(--color)" stop-opacity="0.3" />
      <stop offset="60%" stop-color="var(--white)" stop-opacity="0" />
    </linearGradient>
  </defs>
</Chart>
