<svelte:options immutable />

<script>import { noop } from './../../utils';
import { onMount } from 'svelte';
let className = 'gap-s c-fiord';
export { className as class };
export let tabs;
export let selected = tabs[0];
export let onSelect = noop;
export let border = false;
let tabsNode;
function onTabClick(item, i) {
    if (selected !== item) {
        selected = item;
        slide(tabsNode.children[i]);
    }
    onSelect(selected);
}
function slide(activeNode) {
    const { clientWidth, offsetLeft } = activeNode;
    activeNode.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    tabsNode.style.setProperty('--_width', `${clientWidth}px`);
    tabsNode.style.setProperty('--_left', `${offsetLeft}px`);
}
onMount(() => {
    const activeNode = tabsNode.querySelector('.active');
    if (activeNode)
        slide(activeNode);
});
</script>

<tabs class="row no-scrollbar {className}">
  <tabs-visible bind:this={tabsNode} class="row relative nowrap" class:border-bottom={border}>
    {#each tabs as item, i}
      {@const { title, action = noop } = item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <tab
        class="btn"
        class:active={selected === item}
        on:click={() => onTabClick(item, i)}
        use:action
      >
        <slot {item}>
          {title}
        </slot>
      </tab>
    {/each}

    <slot name="after" />
  </tabs-visible>
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
tabs {
  overflow: auto;
  gap: 8px;
  scroll-behavior: smooth;
}

tabs-visible {
  gap: inherit;
}
tabs-visible::before, tabs-visible::after {
  display: block;
  position: absolute;
  height: var(--underline-height, 1px);
  bottom: var(--underline-bottom, 0);
}
tabs-visible::before {
  background: var(--porcelain);
  width: 100%;
  left: 0;
}
tabs-visible::after {
  content: "";
  background: var(--green);
  left: var(--_left);
  width: var(--_width);
  transition: all 120ms ease-in-out;
  border-radius: var(--underline-radius);
}

.border-bottom::before {
  content: "";
}

tab {
  padding: var(--tab-padding, 0 0 6px);
  transition: var(--tab-transition, color 120ms ease-in-out);
  display: flex;
  align-items: center;
}

.active {
  --color: var(--green);
  --fill: var(--green);
}</style>
