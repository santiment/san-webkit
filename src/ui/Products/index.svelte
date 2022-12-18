<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import Products from './Products.svelte'

  let className = ''
  export { className as class }
  export let activeClass = '$style.opened'
  export let dropdownClassName = ''
  export let tooltipClass = ''
  export let isCompact = false
  export let isColumn = false
  export let isOpened = undefined
  export let active: string | undefined = undefined
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
  .opened {
    fill: var(--green);
  }
</style>
