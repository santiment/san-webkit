<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let slug = ''
  export let size = 20
  export let placeholderSize = size / 2.5
  export let logoUrl = ''

  let loading = true

  $: error = !slug

  function image(node: HTMLImageElement) {
    node.addEventListener('error', () => (error = true))
    node.addEventListener('load', () => {
      loading = false
      error = false
    })

    if (node.complete) loading = false
  }
</script>

<project-icon
  class="img row hv-center {className}"
  class:bg={loading || error}
  style="--size:{size}px"
>
  {#if loading}
    <Svg id="asset-small" w={placeholderSize} />
  {/if}

  {#if !error}
    <img
      src={logoUrl ||
        `https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_${slug}.png`}
      alt="Project"
      loading="lazy"
      class:loader={loading}
      use:image
    />
  {/if}
</project-icon>

<style>
  .img {
    border-radius: 50%;
  }
  .bg {
    background: var(--porcelain);
    fill: var(--waterloo);
  }
  :global(.night-mode) .bg {
    background: var(--mystic);
  }

  .img,
  img {
    width: var(--size);
    height: var(--size);
    min-width: var(--size);
  }

  .loader {
    position: absolute;
    visibility: hidden;
  }
</style>
