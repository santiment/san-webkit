<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let slug: string
  export let size = 20
  export let placeholderSize = size / 2.5

  // @ts-ignore
  $: error = (slug, false)
</script>

<div class="img row hv-center {className}" class:error style="--size:{size}px">
  {#if error}
    <Svg id="asset-small" w={placeholderSize} class="$style.placeholder" />
  {:else}
    <img
      src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{slug}.png"
      alt="Project"
      loading="lazy"
      on:error={() => (error = true)}
    />
  {/if}
</div>

<style>
  .img {
    border-radius: 50%;
  }
  .error {
    background: var(--porcelain);
  }
  :global(.night-mode) .error {
    background: var(--mystic);
  }

  .img,
  img {
    width: var(--size);
    height: var(--size);
    min-width: var(--size);
  }
</style>
