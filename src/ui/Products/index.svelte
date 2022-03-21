<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import { business } from './business'
  import { chain } from './chain'
  import Product from './Product.svelte'

  let className = ''
  export { className as class }
  export let dropdownClassName = ''
  export let isCompact = false
  export let isColumn = false
  export let isOpened = undefined
  export let active = undefined
  export let closeTimeout = undefined
</script>

<Tooltip activeClass="$style.opened" bind:isOpened {closeTimeout}>
  <div slot="trigger" class="toggle mrg-s mrg--r btn {className}">
    <Svg id="products-toggle" w="16" />
  </div>

  <div
    slot="tooltip"
    class="dropdown row {dropdownClassName}"
    class:compact={isCompact}
    class:column={isColumn}>
    <div class="chain column">
      <h3>SAN Chain</h3>
      {#each chain as product}
        <Product {...product} active={active === product.id} {isCompact} />
      {/each}
    </div>

    <div class="business column mrg-xl mrg--l">
      <h3>SAN Business</h3>
      {#each business as product}
        <Product {...product} active={active === product.id} {isCompact} />
      {/each}
    </div>
  </div>
</Tooltip>

<style lang="scss">
  .toggle {
    transition: transform 0.2s ease-in-out;
    margin-right: 40px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }
  .opened {
    fill: var(--green);
  }

  .dropdown {
    padding: 32px 32px 24px;

    &.compact {
      padding: 24px 32px;
    }
  }

  h3 {
    margin: 0 0 20px 16px;
    color: var(--waterloo);
  }
  .compact h3 {
    margin: 0 0 16px;
  }

  .dropdown.column {
    flex-direction: column-reverse;

    .business {
      margin: 0 0 24px;
      padding: 0 0 24px;
      border-bottom: 1px solid var(--porcelain);
    }
  }
</style>
