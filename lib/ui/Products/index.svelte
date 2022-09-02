<script>
  import Svg from './../../ui/Svg/svelte'
  import Tooltip from './../../ui/Tooltip/svelte'
  import Products from './Products.svelte'
  let className = ''
  export { className as class }
  export let activeClass = 'opened-3xr7iv'
  export let dropdownClassName = ''
  export let tooltipClass = ''
  export let isCompact = false
  export let isColumn = false
  export let isOpened = undefined
  export let active = undefined
  export let closeTimeout = undefined
</script>

<Tooltip {activeClass} bind:isOpened {closeTimeout} class={tooltipClass}>
  <svelte:fragment slot="trigger">
    <slot>
      <div class="toggle mrg-s mrg--r btn {className}">
        <Svg id="products-toggle" w="16" />
      </div>
    </slot>
  </svelte:fragment>

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
  :global(.opened-3xr7iv) {
    fill: var(--green);
  }
</style>
