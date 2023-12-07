<script>var _a;
import Area from './Area.svelte';
import { getTooltipContext } from './tooltip';
import { getValue } from './utils';
export let data;
export let width;
export let height;
export let tooltipVisible = false;
export let tooltipSyncKey = '';
export let formatTooltipValue = (value) => value.toString();
const { offset$: sharedOffset$, syncKey$, updateOffset } = (_a = getTooltipContext()) !== null && _a !== void 0 ? _a : {};
let localOffset = 0;
$: hasSharedOffset = !!sharedOffset$ && !!tooltipSyncKey && $syncKey$ === tooltipSyncKey;
$: sharedOffset = hasSharedOffset ? $sharedOffset$ !== null && $sharedOffset$ !== void 0 ? $sharedOffset$ : 0 : 0;
$: offset = hasSharedOffset ? sharedOffset : localOffset;
$: currentValue = getValueAt(offset, width);
$: valueFormatted = currentValue !== undefined ? formatTooltipValue(currentValue) : currentValue;
function getValueAt(offset, width) {
    if (!offset)
        return;
    const valueIndex = Math.round((offset / width) * (data.length - 1));
    return getValue(data[valueIndex]);
}
function onMouseMove({ offsetX }) {
    localOffset = offsetX;
    if (tooltipSyncKey) {
        updateOffset === null || updateOffset === void 0 ? void 0 : updateOffset(offsetX, tooltipSyncKey);
    }
}
function onMouseLeave() {
    localOffset = 0;
    if (tooltipSyncKey) {
        updateOffset === null || updateOffset === void 0 ? void 0 : updateOffset(0, tooltipSyncKey);
    }
}
</script>

<Area {...$$props} {data} {width} {height} on:mousemove={onMouseMove} on:mouseleave={onMouseLeave}>
  {#if tooltipVisible && offset}
    <line x1={offset} x2={offset} y1="0" y2={height} stroke="var(--waterloo)" />

    <foreignObject {width} {height}>
      <tooltip class="c-fiord">{valueFormatted}</tooltip>
    </foreignObject>
  {/if}
</Area>

<style>
  tooltip {
    position: absolute;
    top: 0;
    left: 0;
    background: color-mix(in srgb, var(--white) 70%, transparent);
    border-radius: 4px;
    padding: 2px 4px;
  }
</style>
