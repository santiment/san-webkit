<script lang="ts">
  import { ssd } from 'svelte-runes'

  import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    slug?: string
    size?: number
    placeholderSize?: number
    logoUrl?: string | null
  }

  const {
    class: className,
    slug = '',
    size = 20,
    placeholderSize = size / 2.5,
    logoUrl,
  }: TProps = $props()

  const { ui } = useUiCtx()

  let loading = $state(true)

  const error = ssd(() => !slug)
  const isNightMode = $derived(ui.$$.isNightMode)

  function image(node: HTMLImageElement) {
    node.addEventListener('error', () => (error.$ = true))
    node.addEventListener('load', () => {
      loading = false
      error.$ = false
    })

    if (node.complete) loading = false
  }
</script>

<article
  class={cn(
    'flex items-center justify-center rounded-full',
    'h-[var(--size)] w-[var(--size)] min-w-[var(--size)]',
    (loading || error.$) && 'bg-porcelain fill-waterloo',
    isNightMode && 'bg-mystic',
    className,
  )}
  style:--size="{size}px"
>
  {#if loading}
    <Svg id="asset-small" w={placeholderSize} />
  {/if}

  {#if !error.$}
    <img
      src={logoUrl ||
        `https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_${slug}.png`}
      alt="Project"
      loading="lazy"
      class={cn(
        'h-[var(--size)] w-[var(--size)] min-w-[var(--size)]',
        loading && 'invisible absolute',
      )}
      use:image
    />
  {/if}
</article>
