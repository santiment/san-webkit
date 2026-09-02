<script lang="ts">
  import type { CreateDialogProps } from '@melt-ui/svelte'

  import { BROWSER } from 'esm-env'
  import { onMount, type Snippet } from 'svelte'

  import { useDeviceCtx } from '../../../../ctx/device/index.svelte.js'
  import { cn } from '../../../utils/index.js'
  import Button from '../../Button/Button.svelte'

  import orientationSvg from './orientation.svg'
  import { useCreateDialog } from '../state.svelte.js'

  type TProps = {
    class?: string
    children: Snippet<[{ close: () => void }]>
    onOpenChange: CreateDialogProps['onOpenChange']
  }

  const { class: className, children, onOpenChange }: TProps = $props()

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
        'fixed inset-0 z-50 overflow-hidden bg-white',
        // Keeping animation classes separate
        'animated origin-center data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-90',
        className,
      )}
      {...$content}
      use:content
    >
      {#if isLandscape}
        {@render children({ close })}
      {:else}
        <section
          class="flex h-screen flex-col items-center justify-center gap-8 bg-casper-night text-white-day"
        >
          <img src={orientationSvg} alt="phone orientation" />

          <p class="max-w-64 text-center text-lg">
            Please, move your phone into a horizontal position to see fullscreen chart
          </p>

          <Button
            icon="close"
            iconSize={16}
            onclick={close.bind(null, true)}
            class="absolute right-4 top-4 fill-white-day"
          />
        </section>
      {/if}
    </div>
  </div>
{/if}
