<script>let className = '';
export { className as class };
export let data = [];
export let points = [];
export let width = 70;
export let height = 50;
export let valueKey = undefined;
export let style;
$: points = getPoints(data);
$: linePoints = points.join(' ');
const getValue = (item, key) => key ? item[key] : item;
function getPoints(data) {
    const { length } = data;
    if (length < 2)
        return [];
    let min = getValue(data[0], valueKey);
    let max = getValue(data[0], valueKey);
    data.forEach((item) => {
        const value = getValue(item, valueKey);
        if (value < min)
            min = value;
        if (value > max)
            max = value;
    });
    if (min === max)
        min = 0;
    const xAxisFactor = width / (length - 1);
    const yAxisFactor = height / (max - min);
    return data.map((item, i) => `${i * xAxisFactor},${(max - getValue(item, valueKey)) * yAxisFactor}`);
}
</script>

{#if points.length}
  <svg
    viewBox="0 0 {width} {height}"
    {height}
    {style}
    class:empty={!points.length}
    class={className}
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
