<script lang="ts">
  import type { Snippet } from 'svelte'

  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  const {
    class: className = '',
    title,
    bottomLabel,
    bottomAction,
    bottomHref,
    children,
  }: {
    title: string
    class?: string
    bottomLabel?: string
    bottomHref?: string
    bottomAction?: string
    children: Snippet
  } = $props()

  const { device } = useDeviceCtx()
</script>

<section
  class={cn(
    'relative flex min-w-[480px] flex-col justify-center rounded border px-24 py-10 text-center md:h-[85vh] md:min-w-0 md:flex-1 md:p-6',
    className,
  )}
>
  <h2 class="mb-4 text-2xl">{title}</h2>

  {#if device.$.isMobile}
    <a
      href="/"
      class="absolute right-5 top-5 cursor-pointer select-none fill-waterloo hover:fill-green"
    >
      <Svg id="close" />
    </a>
  {/if}

  {@render children()}

  {#if bottomLabel}
    <div class="mt-3 text-waterloo">
      {bottomLabel}
      <a href={bottomHref} class="link-pointer">{bottomAction}</a>
    </div>
  {/if}
</section>
