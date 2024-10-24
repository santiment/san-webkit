<script lang="ts">
  import type { Snippet } from 'svelte'
  import Button from '$ui/core/Button/index.js'
  import Product from '$ui/app/Product/Product.svelte'
  import { noop } from '$lib/utils/index.js'

  const {
    title = '',
    left,
    right,
    share,
    onSearchClick = noop,
  }: {
    title?: string
    left?: Snippet
    right?: Snippet
    share?: Snippet
    onSearchClick?: () => void
  } = $props()
</script>

<header
  class="sticky left-0 top-0 z-[98] flex w-full items-center justify-between border-b border-b-athens bg-white px-4 py-5"
  id="mobile-header"
>
  <section class="min-w-0 items-center row">
    {#if left}
      {@render left()}
    {:else if title}
      <h4 class="text-2xl font-medium">{title}</h4>
    {:else}
      <Product title="Sanbase" class="text-2xl"></Product>
    {/if}
  </section>

  <section class="flex items-center">
    {#if right}
      {@render right()}
    {:else}
      {#if share}
        {@render share()}
      {/if}

      <Button
        icon="search"
        class="size-10 fill-black"
        iconSize={18}
        onclick={onSearchClick}
        aria-label="Search"
      ></Button>
    {/if}
  </section>
</header>
