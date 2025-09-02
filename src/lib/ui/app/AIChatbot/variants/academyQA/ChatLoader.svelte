<script lang="ts">
  import lottie, { type AnimationItem } from 'lottie-web'
  import { onMount } from 'svelte'

  let element: HTMLDivElement
  let animation: AnimationItem | null = null

  onMount(() => {
    let cancelled = false

    ;(async () => {
      const mod = await import('./loading-animation.json')

      if (cancelled) return

      const animationData = mod.default

      if (element) {
        // @ts-ignore
        animation = lottie.loadAnimation({
          container: element,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
        })
      }
    })()

    return () => {
      cancelled = true
      animation?.destroy()
    }
  })
</script>

<div bind:this={element} class="size-8"></div>
