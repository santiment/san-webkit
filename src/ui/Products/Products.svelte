<script lang="ts">
  import { business } from './business'
  import { chain } from './chain'
  import Product from './Product.svelte'

  let className = ''
  export { className as class }
  export let isCompact = false
  export let isColumn = false
  export let active: string | undefined = undefined
</script>

<div
  class="products row body-3 gap-xl {className}"
  class:compact={isCompact}
  class:column={isColumn}
>
  <section class="business column">
    <h3>SAN Business</h3>
    {#each business as product}
      <Product {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>

  <section class="chain column">
    <h3>SAN Chain</h3>
    {#each chain as product}
      <Product {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>

  {#if isColumn}
    <section class="more body-2 c-waterloo">
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      To learn more about Santiment's products, team, or available jobs, visit
      <a class="link-pointer" target="_blank" href="https://santiment.net/">santiment.net</a>
    </section>
  {/if}
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
    flex-direction: column;

    .business {
      padding: 0 0 24px;
      border-bottom: 1px solid var(--porcelain);
    }
  }

  .more {
    padding-top: 24px;
    border-top: 1px solid var(--porcelain);
    max-width: 260px;
  }
</style>
