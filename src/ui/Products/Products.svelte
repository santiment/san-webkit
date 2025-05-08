<script lang="ts">
  import { business } from './business'
  import { chain } from './chain'
  import { initiatives } from './initiatives'
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
  <div class="column gap-xl">
    <section class="business">
      <h3>SAN Business</h3>
      {#each business as product}
        <Product {...product} active={active === product.id} {isCompact} />
      {/each}
    </section>

    <section class="initiatives">
      <h3>Initiatives</h3>
      {#each initiatives as product}
        <Product {...product} active={active === product.id} {isCompact} />
      {/each}
    </section>
  </div>

  <section class="chain">
    <h3>SAN Chain</h3>
    {#each chain as product}
      <Product {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>

  {#if isColumn}
    <section class="more body-2 c-waterloo">
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

    .initiatives,
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
