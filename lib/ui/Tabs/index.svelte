<svelte:options immutable />

<script>import { noop } from './../../utils';
import { onMount } from 'svelte';
let className = 'gap-s c-fiord';
export { className as class };
export let tabs;
export let selected = tabs[0];
export let onSelect = noop;
let tabsNode;
function onTabClick(item, i) {
    if (selected === item)
        return;
    onSelect((selected = item));
    slide(tabsNode.children[i]);
}
function slide(activeNode) {
    const { clientWidth, offsetLeft } = activeNode;
    tabsNode.style.setProperty('--_width', `${clientWidth}px`);
    tabsNode.style.setProperty('--_left', `${offsetLeft}px`);
}
onMount(() => {
    const activeNode = tabsNode.querySelector('.active');
    if (activeNode)
        slide(activeNode);
});
</script>

<tabs bind:this={tabsNode} class="row relative {className}">
  {#each tabs as item, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <tab class="btn" class:active={selected === item} on:click={() => onTabClick(item, i)}>
      <slot {item}>
        {item.title}
      </slot>
    </tab>
  {/each}
</tabs>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
tabs::after {
  display: block;
  content: "";
  height: 1px;
  background: var(--green);
  bottom: 0;
  position: absolute;
  left: var(--_left);
  width: var(--_width);
  transition: all 120ms ease-in-out;
}

tab {
  padding: var(--tab-padding, 0 0 6px);
  transition: color 120ms ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;
}

.active {
  --color: var(--green);
}</style>
