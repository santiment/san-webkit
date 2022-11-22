<script>import Svg from './../../ui/Svg/svelte';
import Product from './../../ui/Product.svelte';
export let title = '';</script>

<header class="row v-center justify fluid">
  <section class="row v-center">
    {#if $$slots.left}
      <slot name="left" />
    {:else if title}
      <h4 class="h4 txt-m">{title}</h4>
    {:else}
      <Product title="Sanbase" />
    {/if}
  </section>
  <section class="row v-center">
    {#if $$slots.right}
      <slot name="right" />
    {:else}
      <slot name="share" />
      <button class="search row hv-center">
        <Svg id="search" w="18" />
      </button>
    {/if}
  </section>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 98;
    background: var(--white);
    padding: 16px 20px;
    border-bottom: 1px solid var(--athens);
  }

  .search {
    width: 40px;
    height: 40px;
  }
</style>
