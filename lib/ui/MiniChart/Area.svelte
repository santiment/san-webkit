<script>import Chart from './index.svelte';
let className = '';
export { className as class };
export let id = '';
export let data;
export let width;
export let height;
export let valueKey = undefined;
export let style = undefined;
export function getAreaPoints(points, linePoints) {
    const [startX, startY] = points[0].split(',');
    const [lastX] = points[points.length - 1].split(',');
    return `${linePoints} ${lastX},${height} ${startX},${height}, ${startX},${startY}`;
}
</script>

<Chart {data} {width} {height} {valueKey} class={className} {style} let:points let:linePoints>
  <polyline points={getAreaPoints(points, linePoints)} fill="url(#{id}-area)" />
  <defs>
    <linearGradient id="{id}-area" x1="0" x2="0" y1="0" y2="2">
      <stop offset="0%" stop-color="var(--color)" stop-opacity="0.3" />
      <stop offset="60%" stop-color="var(--white)" stop-opacity="0" />
    </linearGradient>
  </defs>
</Chart>
