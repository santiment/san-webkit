<script lang="ts">
  import Svg from '../Svg.svelte'

  export let id
  export let title
  export let href
  export let desc
  export let note
  export let dimensions
  export let active

  const [w, h] = dimensions
</script>

<a {href} class="product" on:click>
  <div class="icon row hv-center" class:active>
    <Svg illus id="products/{id}" {w} {h} />
  </div>
  <h2 class="body-2 txt-m">{title}</h2>
  <p>{desc}</p>
  {#if note}
    <span class="note">{note}</span>
  {/if}
</a>

<style>
  h2 {
    color: var(--black);
  }

  p {
    color: var(--waterloo);
  }

  .icon {
    width: 40px;
    height: 40px;
    background: var(--athens);
    position: absolute;
    left: 16px;
    top: 12px;
    border-radius: 4px;
  }

  .product {
    width: 292px;
    padding: 12px 16px 12px 68px;
    position: relative;
    cursor: pointer;
    border-radius: 4px;
  }
  .product:hover {
    background: var(--athens);
  }
  .product:hover .icon {
    background-color: var(--white);
  }

  .note {
    color: var(--orange);
    margin-top: 4px;
    padding: 1px 8px;
    background: var(--orange-light-1);
    border-radius: 4px;
    display: inline-block;
  }

  .active {
    background: var(--product-active-bg, var(--green-light-1)) !important;
    --product-color-1: var(--product-active-1, var(--green));
    --product-color-2: var(--product-active-2, #89e1c9);
  }
</style>
