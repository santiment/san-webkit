<script lang="ts">
  import { type Snippet } from 'svelte'

  import { fade } from 'svelte/transition'
  import { createDialog } from '@melt-ui/svelte'
  import { BROWSER } from 'esm-env'
  import { cn, flyAndScale } from '$ui/utils/index.js'
  import { getDialogControllerCtx } from './dialogs.js'

  let {
    children,
    class: className,
    onOpenChange,
  }: { class?: string; children: Snippet<[{ close: typeof close }]> } = $props()

  const TRANSITION_MS = 150
  const { Controller } = getDialogControllerCtx()

  const {
    elements: { overlay, content, portalled },
    states: { open },
  } = createDialog({ forceVisible: true, onOpenChange })

  const close = () => open.set(false)

  $effect(() => {
    open.set(true)
    Controller.close = close
  })
</script>

<div class="z-[10000]" {...$portalled} use:portalled>
  <div
    {...$overlay}
    use:overlay
    class="fixed inset-0 bg-[#000000cf]"
    transition:fade={{ duration: TRANSITION_MS }}
  ></div>
  <div
    class={cn(
      'fixed left-1/2 top-1/2 z-50 max-h-[92vh] max-w-[92vw] -translate-x-1/2  -translate-y-1/2 rounded bg-white shadow-lg',
      className,
    )}
    transition:flyAndScale
    {...$content}
    use:content
  >
    {@render children({ close })}
  </div>
</div>
