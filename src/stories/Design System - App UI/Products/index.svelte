<script lang="ts">
  import Products from '$ui/app/Products/Products.svelte'
  import ProductsButton from '$ui/app/Products/index.svelte'
  import Button from '$ui/core/Button/Button.svelte'
</script>

<main class="items-start gap-6 px-5 py-10 column">
  <div>
    <h2 class="text-xl">Button</h2>
    <ProductsButton />
  </div>

  <div>
    <h2 class="text-xl">Custom element</h2>
    <ProductsButton activeClass="text-red">
      {#snippet children({ ref })}
        <Button {ref}>custom element</Button>
      {/snippet}
    </ProductsButton>
  </div>

  <div>
    <h2 class="text-xl">Regular</h2>
    <div class="rounded border">
      <Products />
    </div>
  </div>

  <div>
    <h2 class="text-xl">Column</h2>
    <div class="rounded border">
      <Products isColumn />
    </div>
  </div>

  <div>
    <h2 class="text-xl">Compact</h2>
    <div class="rounded border">
      <Products isCompact />
    </div>
  </div>

  <div>
    <h2 class="text-xl">Column + Compact</h2>
    <div class="rounded border">
      <Products isCompact isColumn />
    </div>
  </div>
</main>
