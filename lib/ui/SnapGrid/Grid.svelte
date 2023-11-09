<script>import { tick } from 'svelte';
import { noop } from './../../utils';
import { setSnapGridCtx } from './context';
import { SnapGrid } from './index';
import { calcHeight, getResponsiveTranslate, getWidth } from './style';
import Item from './Item.svelte';
let className = '';
export { className as class };
export let tag = 'snap-grid';
export let isDragging = false;
export let readonly = false;
export let cols = 12;
export let rowSize = 30;
export let layout;
export let maxCols = cols;
export let minCols = 1;
export let maxRows = 100;
export let minRows = 1;
export let onLayoutChange = noop;
let node;
const settings = { cols, rowSize, maxCols, minCols, maxRows, minRows };
const snapGrid = setSnapGridCtx(SnapGrid(layout, settings, { onStart, onEnd }));
const { onDragStart } = snapGrid;
$: snapGrid.setReadonly(readonly);
$: if (node)
    snapGrid.updateLayout(layout);
$: if (node && layout)
    tick().then(() => snapGrid.mount(node));
function getStyle(item) {
    const [, , , height] = item;
    return `width:${getWidth(item, snapGrid)};
      height:${calcHeight(height, snapGrid)}px;
      transform:${getResponsiveTranslate(item, snapGrid)}`;
}
function onStart() {
    if (readonly)
        return;
    isDragging = true;
}
function onEnd() {
    if (readonly)
        return;
    setTimeout(() => {
        isDragging = false;
        onLayoutChange();
    }, 150);
}
</script>

<svelte:element this={tag} bind:this={node} class="snap-grid {className}">
  {#each layout as item, i (item)}
    <Item style={getStyle(item)} {onDragStart} let:gridItem>
      <slot {i} {gridItem} />
    </Item>
  {/each}
</svelte:element>

<style>
  .snap-grid {
    display: block;
    transition: height 0.2s;
  }
</style>
