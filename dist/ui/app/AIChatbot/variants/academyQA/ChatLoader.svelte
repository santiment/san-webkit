<script lang="ts">
  import type { AnimationItem } from 'lottie-web'

  import { onMount } from 'svelte'

  let element = $state<HTMLDivElement>()
  let animation = $state<AnimationItem | null>(null)
  let isInitialized = $state(false)

  onMount(() => {
    let observer: IntersectionObserver

    if (!element) return

    const loadAnimation = async () => {
      if (isInitialized) return
      isInitialized = true

      const lottie = (await import('lottie-web')).default
      const animationData = (await import('./loading-animation.json')).default

      if (!element) return

      // @ts-ignore
      animation = lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      })
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadAnimation()

          if (!element) return

          observer.unobserve(element)
        }
      })
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
      animation?.destroy()
    }
  })
</script>

<div bind:this={element} class="size-8"></div>
