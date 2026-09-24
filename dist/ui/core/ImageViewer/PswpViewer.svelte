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
    pswp: typeof import('photoswipe')
    ondestroy: () => void
  }

  const { src, alt, width, height, el, pswp, ondestroy }: TProps = $props()

  let viewer: PhotoSwipe | undefined
  let scale = $state(1)
  let maxScale = $state(Infinity)
  let ready = $state(false)

  onMount(() => {
    const { default: Pswp } = pswp

    viewer = new Pswp({
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

    viewer.on('zoomPanUpdate', ({ slide }) => {
      scale = slide.currZoomLevel / slide.zoomLevels.initial
    })

    viewer.on('openingAnimationEnd', () => {
      maxScale = viewer!.currSlide!.zoomLevels.max / viewer!.currSlide!.zoomLevels.initial
      ready = true
    })

    viewer.on('close', () => {
      ready = false
    })

    viewer.on('destroy', ondestroy)

    viewer.init()

    return () => viewer?.destroy()
  })
</script>

{#if ready}
  <Controls
    {src}
    {alt}
    {scale}
    {maxScale}
    onzoomin={() => viewer?.currSlide?.zoomTo(viewer.currSlide.currZoomLevel * 1.5, undefined, 200)}
    onzoomout={() =>
      viewer?.currSlide?.zoomTo(viewer.currSlide.currZoomLevel / 1.5, undefined, 200)}
    onclose={() => viewer?.close()}
  />
{/if}

<style>
  :global(.pswp) {
    --pswp-bg: rgb(var(--c-shark) / 1);
  }
</style>
