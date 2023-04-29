<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Product from '@/ui/Product.svelte'
  import { noop } from '@/utils'

  export let title = ''
  export let onSearchClick = noop
</script>

<header class="row v-center justify fluid">
  <section class="left row v-center">
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
      <button class="search row hv-center" on:click={onSearchClick} aria-label="Search">
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

  .left {
    min-width: 0;
  }

  .search {
    width: 40px;
    height: 40px;
  }
</style>
