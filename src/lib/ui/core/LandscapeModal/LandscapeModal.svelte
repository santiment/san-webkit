<script lang="ts" module>
  import Component from './LandscapeModal.svelte'

  export const showLandscapeModal$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { onMount, type Snippet } from 'svelte'

  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import { cn, flyAndScale } from '$ui/utils/index.js'

  import { useCreateDialog, useOpenState } from '../Dialog/state.svelte.js'
  import { dialogs$ } from '../Dialog/dialogs.js'

  type TProps = {
    class?: string
    children: Snippet<[{ close: () => void }]>
  }

  const { class: className, children }: TProps = $props()

  const { onOpenChange } = useOpenState()

  const {
    elements: { portalled, content },
    states: { open },
    close,
  } = useCreateDialog(onOpenChange)

  const { device } = useDeviceCtx()

  const { orientation } = BROWSER ? window.screen : {}

  let isLandscape = $state(orientation?.type.includes('landscape'))

  const isDesktop = $derived(device.$.isDesktop)

  function onOrientationChange(e: Event) {
    const target = e.target as ScreenOrientation
    isLandscape = target.type.includes('landscape')
  }

  onMount(() => {
    if (isDesktop) return

    orientation?.addEventListener('change', onOrientationChange)
    return () => orientation?.removeEventListener('change', onOrientationChange)
  })
</script>

{#if $open}
  <div class="relative z-[10000]" {...$portalled} use:portalled>
    <div
      class={cn(
        'fixed inset-0 z-50 overflow-hidden',
        !isLandscape && 'top-full h-[100vw] w-[100vh] origin-top-left -rotate-90',
        className,
      )}
      transition:flyAndScale
      {...$content}
      use:content
    >
      {@render children({ close })}
    </div>
  </div>
{/if}
