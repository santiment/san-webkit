<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  const { class: className, src = undefined, placeholderWidth = 16 } = $props();
</script>

<div class="img row hv-center {className}">
  {#if src}
    <img alt="A" {src} loading="lazy" />
  {:else}
    <Svg id="user" w={placeholderWidth} className="svg-YcDCFm" />
  {/if}
  <slot />
</div>

<style lang="postcss">
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
    background: var(--img-bg, var(--porcelain));
    border-radius: 50%;
    overflow: var(--img-overflow, hidden);
    fill: var(--img-fill, var(--waterloo));
  }

  :global(.svg-YcDCFm) {
    max-width: 50%;
    min-width: 0 !important;
  }
</style>
