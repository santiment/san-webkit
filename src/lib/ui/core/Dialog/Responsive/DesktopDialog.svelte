<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { CreateDialogProps } from '@melt-ui/svelte'

  import { fade } from 'svelte/transition'

  import { cn, flyAndScale } from '$ui/utils/index.js'

  import { TRANSITION_MS, useCreateDialog } from '../state.svelte.js'

  let {
    children,
    class: className,
    onOpenChange,
  }: {
    class?: string
    children: Snippet<[{ close: typeof close }]>
    onOpenChange: CreateDialogProps['onOpenChange']
  } = $props()

  const {
    elements: { overlay, content, portalled },
    states: { open },
    close,
  } = useCreateDialog(onOpenChange)
</script>

{#if $open}
  <div class="relative z-[10000]" {...$portalled} use:portalled>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      {...$overlay}
      use:overlay
      class="fixed inset-0 z-10 bg-[#000000cf]"
      transition:fade={{ duration: TRANSITION_MS }}
      onclick={() => close()}
    ></div>
    <div
      class={cn(
        'fixed left-1/2 top-1/2 z-50 max-h-[92vh] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded bg-white shadow-lg',
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
