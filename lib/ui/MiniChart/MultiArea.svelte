<script context="module">var _a;
</script>

<script>var _a;
import Area from './Area.svelte';
import { getTooltipContext } from './tooltip';
import { getOffset, getValueAt } from './utils';
import SvgTooltip from './SvgTooltip.svelte';
export let id = '';
export let width;
export let height;
export let areas;
export let tooltipVisible = false;
export let tooltipSyncKey = '';
const defaultFormatter = (value) => value.toString();
const { offset$: sharedOffset$, syncKey$, updateOffset } = (_a = getTooltipContext()) !== null && _a !== void 0 ? _a : {};
let localOffset = 0;
$: offset = getOffset({
    localOffset,
    sharedOffset: $sharedOffset$,
    tooltipSyncKey,
    storeSyncKey: $syncKey$,
});
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

<article
  style="width: {width}px; height: {height}px;"
  class="relative"
  on:mouseleave={onMouseLeave}
  on:mousemove={onMouseMove}
>
  {#each areas as { data, color }, i}
    <area-wrapper>
      <Area {data} {height} {width} style="--color: var(--{color}); opacity: 0.9" id="{id}-{i}" />
    </area-wrapper>
  {/each}

  {#if tooltipVisible && offset}
    <svg viewBox="0 0 {width} {height}" {height} role="figure">
      <line x1={offset} x2={offset} y1="0" y2={height} stroke="var(--waterloo)" stroke-width={2} />
    </svg>

    <SvgTooltip>
      <div slot="value" class="column">
        {#each areas as { title, data, formatter = defaultFormatter }}
          {@const currentValue = getValueAt(data, offset, width)}
          {@const valueFormatted = formatter(currentValue)}

          <div class="row gap-xs">
            <span>{valueFormatted}</span>
            <span class="c-waterloo">{title}</span>
          </div>
        {/each}
      </div>
    </SvgTooltip>
  {/if}
</article>

<style>
  area-wrapper {
    position: absolute;
  }
</style>
