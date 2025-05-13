<script>import Svg from './../../ui/Svg/svelte';
let className = '';
export { className as class };
export let src = undefined;
export let placeholderSize = 16;
export let alt = 'S';
</script>

<div class="img row hv-center {className}">
  {#if src}
    <img alt={alt.slice(1)} {src} loading="lazy" class="hv-center txt-b" />
  {:else}
    <Svg id="user" w={placeholderSize} class="svg-LLh36R" />
  {/if}
  <slot />
</div>

<style>
  .img,
  img {
    --size: var(--img-size, 32px);
    width: var(--size);
    height: var(--size);
    max-width: var(--size);
    max-height: var(--size);
    min-width: var(--size);
  }

  .img {
    background: var(--img-bg, var(--athens));
    border-radius: 50%;
    overflow: var(--img-overflow, hidden);
    fill: var(--img-fill, var(--waterloo));
  }

  :global(.svg-LLh36R) {
    max-width: 50%;
    min-width: 0 !important;
  }

  img {
    display: inline-flex;
  }
</style>
