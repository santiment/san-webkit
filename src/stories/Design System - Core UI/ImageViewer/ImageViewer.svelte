<script lang="ts">
  import { ImageViewer } from '$ui/core/ImageViewer/index.js'

  const IMAGES = [
    { src: 'https://picsum.photos/seed/alpha/1200/800', alt: 'Landscape' },
    { src: 'https://picsum.photos/seed/beta/400/600', alt: 'Portrait' },
    { src: 'https://picsum.photos/seed/gamma/800/800', alt: 'Square' },
    { src: 'https://picsum.photos/seed/delta/1600/900', alt: 'Wide' },
    { src: 'https://picsum.photos/seed/epsilon/600/400', alt: 'Small landscape' },
    { src: 'https://picsum.photos/seed/zeta/500/900', alt: 'Tall portrait' },
  ]
</script>

<div class="p-8">
  <ImageViewer>
    {#snippet children({ mountAction })}
      <div use:mountAction class="columns-3 gap-4 space-y-4">
        {#each IMAGES as image}
          <img src={image.src} alt={image.alt} class="w-full cursor-zoom-in rounded" />
        {/each}
      </div>
    {/snippet}
  </ImageViewer>
</div>
