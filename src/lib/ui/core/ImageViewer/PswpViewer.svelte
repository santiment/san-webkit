<script lang="ts">
  import type { default as PhotoSwipe } from 'photoswipe'

  import { onMount } from 'svelte'

  import Controls from './Controls.svelte'

  type TProps = {
    src: string
    alt?: string
    width: number
    height: number
    el?: HTMLElement
    photoswipe$: Promise<typeof import('photoswipe')>
    ondestroy: () => void
  }

  const { src, alt, width, height, el, photoswipe$, ondestroy }: TProps = $props()

  let pswp: PhotoSwipe | undefined
  let scale = $state(1)
  let maxScale = $state(Infinity)
  let ready = $state(false)

  onMount(() => {
    photoswipe$.then(({ default: Pswp }) => {
      pswp = new Pswp({
        dataSource: [{ src, msrc: src, alt, width, height, element: el }],
        index: 0,
        bgOpacity: 0.6,
        showHideAnimationType: el ? 'zoom' : 'fade',
        easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
        showAnimationDuration: 200,
        hideAnimationDuration: 200,
        padding: { top: 20, bottom: 80, left: 20, right: 20 },
        arrowPrev: false,
        arrowNext: false,
        zoom: false,
        close: false,
        counter: false,
        loop: false,
      })

      pswp.on('zoomPanUpdate', ({ slide }) => {
        scale = slide.currZoomLevel / slide.zoomLevels.initial
      })

      pswp.on('openingAnimationEnd', () => {
        maxScale = pswp!.currSlide!.zoomLevels.max / pswp!.currSlide!.zoomLevels.initial
        ready = true
      })

      pswp.on('close', () => {
        ready = false
      })

      pswp.on('destroy', ondestroy)

      pswp.init()
    })

    return () => pswp?.destroy()
  })
</script>

{#if ready}
  <Controls
    {src}
    {alt}
    {scale}
    {maxScale}
    onzoomin={() => pswp?.currSlide?.zoomTo(pswp.currSlide.currZoomLevel * 1.5, undefined, 200)}
    onzoomout={() => pswp?.currSlide?.zoomTo(pswp.currSlide.currZoomLevel / 1.5, undefined, 200)}
    onclose={() => pswp?.close()}
  />
{/if}

<style>
  :global(.pswp) {
    --pswp-bg: theme('colors.shark.DEFAULT');
  }
</style>
