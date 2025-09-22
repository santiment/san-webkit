<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { CreateDialogProps } from '@melt-ui/svelte'

  import { cn } from '../../../utils/index.js'

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

  function transition(el: HTMLElement) {
    applyCloseState(el)
    applyCloseState(el.nextElementSibling as HTMLElement)

    return { duration: TRANSITION_MS + 20 }
  }

  function applyCloseState(el: HTMLElement) {
    el.dataset.state = 'closed'
  }
</script>

{#if $open}
  <div class="relative z-[10000]" {...$portalled} use:portalled>
    <div
      {...$overlay}
      use:overlay
      class="animated fixed inset-0 z-10 bg-[#000000cf] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      out:transition
      onclick={(e) => {
        const dialogElement = e.currentTarget.nextElementSibling as null | HTMLElement
        dialogElement?.focus()
        close()
      }}
    ></div>
    <div
      class={cn(
        'animated dialog-animation fixed left-1/2 top-1/2 z-50 max-h-[92vh] max-w-[92vw] origin-center -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded bg-white shadow-lg',
        className,
      )}
      {...$content}
      use:content
    >
      {@render children({ close })}
    </div>
  </div>
{/if}
