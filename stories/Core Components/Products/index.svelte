<script>
  import Products from '@/ui/Products/Products.svelte'
</script>

<main class="column gap-xl">
  <div>
    <h2 class="h5">Regular</h2>
    <div class="border">
      <Products />
    </div>
  </div>

  <div>
    <h2 class="h5">Column</h2>
    <div class="border">
      <Products isColumn />
    </div>
  </div>

  <div>
    <h2 class="h5">Compact</h2>
    <div class="border">
      <Products isCompact />
    </div>
  </div>

  <div>
    <h2 class="h5">Column + Compact</h2>
    <div class="border">
      <Products isCompact isColumn />
    </div>
  </div>
</main>

<style>
  main {
    align-items: flex-start;
    padding: 40px 20px;
  }
</style>
