<script>import Svg from './../../ui/Svg/svelte';
import Tooltip from './../../ui/Tooltip';
import Products from './Products.svelte';
let className = '';
export { className as class };
export let activeClass = 'opened-aOeuBG';
export let dropdownClassName = '';
export let tooltipClass = '';
export let isCompact = false;
export let isColumn = false;
export let isOpened = undefined;
export let active = undefined;
export let closeTimeout = undefined;
</script>

<Tooltip
  position="bottom-end"
  overflowFlip={false}
  {activeClass}
  bind:isOpened
  closeDelay={closeTimeout}
  class={tooltipClass}
  let:trigger
>
  <slot {trigger}>
    <div use:trigger class="toggle mrg-s mrg--r btn {className}">
      <Svg id="products-toggle" w="16" />
    </div>
  </slot>

  <svelte:fragment slot="tooltip">
    <Products {active} {isColumn} {isCompact} class={dropdownClassName} />
  </svelte:fragment>
</Tooltip>

<style>
  .toggle {
    margin-right: 40px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }
  :global(.opened-aOeuBG) {
    fill: var(--green);
  }
</style>
