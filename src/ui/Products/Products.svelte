<script lang="ts">
  import { business } from './business'
  import { chain } from './chain'
  import Product from './Product.svelte'

  let className = ''
  export { className as class }
  export let isCompact = false
  export let isColumn = false
  export let active = undefined
</script>

<div class="products row body-3 {className}" class:compact={isCompact} class:column={isColumn}>
  {#if isColumn}
    <div class="santimentlink body-2 c-waterloo mrg-xl mrg--t">
      To learn more about Santiment's products, team, or available jobs, visit <a
        class="c-green"
        href="https://santiment.net/">santiment.net</a
      >
    </div>
  {/if}

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

<style lang="scss">
  .products {
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

  .products.column {
    flex-direction: column-reverse;

    .business {
      margin: 0 0 24px;
      padding: 0 0 24px;
      border-bottom: 1px solid var(--porcelain);
    }
  }

  .santimentlink {
    padding-top: 24px;
    border-top: 1px solid var(--porcelain);
  }
</style>
