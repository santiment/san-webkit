<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let src: string | null
</script>

<div class="img row hv-center {className}">
  {#if src}
    <img alt="A" {src} loading="lazy" />
  {:else}
    <Svg id="user" w="16" class="$style.svg" />
  {/if}
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
    background: var(--img-bg, var(--porcelain));
    border-radius: 50%;
    overflow: hidden;
    fill: var(--img-fill, var(--waterloo));
  }

  .svg {
    max-width: 50%;
    min-width: 0 !important;
  }
</style>
