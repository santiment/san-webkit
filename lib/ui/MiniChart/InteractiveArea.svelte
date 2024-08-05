<script>import Area from './Area.svelte';
import { getTooltipContext } from './tooltip';
import { getOffset, getValueAt } from './utils';
import SvgTooltip from './SvgTooltip.svelte';
export let data;
export let width;
export let height;
export let tooltipVisible = false;
export let tooltipSyncKey = '';
export let formatTooltipValue = (value) => value.toString();
const { offset$: sharedOffset$, syncKey$, updateOffset } = getTooltipContext() ?? {};
let localOffset = 0;
$: offset = getOffset({
    localOffset,
    sharedOffset: $sharedOffset$,
    tooltipSyncKey,
    storeSyncKey: $syncKey$,
});
$: currentValue = getValueAt(data, offset, width);
$: valueFormatted = formatTooltipValue(currentValue);
function onMouseMove({ offsetX }) {
    localOffset = offsetX;
    if (tooltipSyncKey) {
        updateOffset?.(offsetX, tooltipSyncKey);
    }
}
function onMouseLeave() {
    localOffset = 0;
    if (tooltipSyncKey) {
        updateOffset?.(0, tooltipSyncKey);
    }
}
</script>

<Area {...$$props} {data} {width} {height} on:mousemove={onMouseMove} on:mouseleave={onMouseLeave}>
  {#if tooltipVisible && offset}
    <line x1={offset} x2={offset} y1="0" y2={height} stroke="var(--waterloo)" stroke-width={2} />

    <foreignObject {width} {height}>
      <SvgTooltip {valueFormatted} />
    </foreignObject>
  {/if}
</Area>
