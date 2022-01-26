<script lang="ts">
  import { business } from './business'
  import { chain } from './chain'
  import Product from './Product.svelte'
  import Svg from '../Svg/svelte'
  import Tooltip from '../Tooltip/svelte'

  let className = ''
  export { className as class }
  export let dropdownClassName = ''
  export let isOpened = undefined
  export let active = undefined
  export let closeTimeout = undefined
</script>

<Tooltip activeClass="$style.opened" bind:isOpened {closeTimeout}>
  <div slot="trigger" class="mrg-s mrg--r toggle btn-3 {className}">
    <Svg illus id="products/toggle" w="16" />
  </div>

  <div slot="tooltip" class="dropdown row {dropdownClassName}">
    <div class="column mrg-xl mrg--r">
      <h3>SAN Business</h3>
      {#each business as product}
        <Product {...product} active={active === product.id} />
      {/each}
    </div>

    <div class="column chain">
      <h3>SAN Chain</h3>
      {#each chain as product}
        <Product {...product} active={active === product.id} />
      {/each}
    </div>
  </div>
</Tooltip>

<style>
  .toggle {
    transition: transform 0.2s ease-in-out;
    margin-right: 40px;
  }
  .opened {
    --bg: var(--athens);
    transform: rotate(90deg);
  }

  .dropdown {
    padding: 32px 32px 24px;
  }

  h3 {
    margin: 0 0 20px;
    color: var(--waterloo);
  }
</style>
