<script lang="ts">
  import Products from '$ui/app/Products/Products.svelte'
  import ProductsButton from '$ui/app/Products/index.svelte'
  import Button from '$ui/core/Button/Button.svelte'
</script>

<main class="items-start gap-6 px-5 py-10 column">
  <div>
    <h2 class="text-xl">Button</h2>

    <ProductsButton variant="blue" />
  </div>

  <div>
    <h2 class="text-xl">Button (compact)</h2>

    <ProductsButton variant="green" align="start" isCompact />
  </div>

  <div>
    <h2 class="text-xl">Custom element</h2>
    <ProductsButton>
      {#snippet children({ props })}
        <Button {...props} class="data-[state=open]:bg-red">custom element</Button>
      {/snippet}
    </ProductsButton>
  </div>

  <div class="self-stretch">
    <h2 class="text-xl">Align end (default, header placement)</h2>
    <div class="flex justify-end rounded-md border py-3 pr-6">
      <ProductsButton variant="green" />
    </div>
  </div>

  <div class="self-stretch">
    <h2 class="text-xl">Align start</h2>
    <div class="flex rounded-md border py-3 pl-6">
      <ProductsButton variant="green" align="start" />
    </div>
  </div>

  <div class="self-stretch">
    <h2 class="text-xl">Align center</h2>
    <div class="flex justify-center rounded-md border py-3">
      <ProductsButton variant="green" align="center" />
    </div>
  </div>

  <div>
    <h2 class="text-xl">Regular</h2>
    <div class="rounded-md border">
      <Products active="sanapi" variant="blue" />
    </div>
  </div>

  <div>
    <h2 class="text-xl">Compact</h2>
    <div class="rounded-md border">
      <Products isCompact />
    </div>
  </div>
</main>
