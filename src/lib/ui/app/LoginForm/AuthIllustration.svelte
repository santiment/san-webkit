<script lang="ts">
  import type { AnimationItem, LottiePlayer } from 'lottie-web'

  import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'

  const { ui } = useUiCtx()

  let illusElement = $state<HTMLDivElement>()

  $effect(() => {
    const container = illusElement
    if (!container) return

    let cancelled = false
    let animation: AnimationItem | null = null

    Promise.all([
      import('lottie-web'),
      ui.$$.isNightMode ? import('./auth-night.json') : import('./auth-day.json'),
    ]).then(([{ default: lottie }, { default: animationData }]) => {
      if (cancelled) return

      const player = lottie as unknown as LottiePlayer

      animation = player.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      })
    })

    return () => {
      cancelled = true
      animation?.destroy()
    }
  })
</script>

<div class="w-[clamp(550px,45vw,1092px)] flex-shrink-0 self-center md:hidden" aria-hidden="true">
  <div bind:this={illusElement} class="aspect-[696/580] w-full"></div>
</div>
