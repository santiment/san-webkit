<script lang="ts">
  import type { CreateDialogProps } from '@melt-ui/svelte'
  import type { Snippet } from 'svelte'

  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { useIsLandscape } from '$lib/utils/platform/index.js'

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

  const landscape = useIsLandscape()
</script>

{#if $open}
  <div class="relative z-10000" {...$portalled} use:portalled>
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
      {#if landscape.current}
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
            class="absolute top-4 right-4 fill-white-day"
          />
        </section>
      {/if}
    </div>
  </div>
{/if}
