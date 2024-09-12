<script lang="ts">
  import { cn, flyAndScale } from '$ui/utils/index.js'
  import { useMelt } from '$ui/utils/melt-ui.js'
  import { createTooltip } from '@melt-ui/svelte'
  import { type Snippet } from 'svelte'
  import { ss } from 'svelte-runes'

  let {
    class: className,
    children,
    noStyles = false,
  }: {
    class?: string
    noStyles?: boolean
    children: Snippet<[{ ref: typeof triggerRef }]>
  } = $props()

  const {
    elements: { trigger, content },
    states: { open },
  } = createTooltip({
    positioning: {
      placement: 'bottom-end',
      fitViewport: true,
    },
    openDelay: 0,
    closeDelay: 0,
    closeOnPointerDown: false,
    forceVisible: true,
  })

  let triggerRef = ss<null | HTMLElement>(null)

  useMelt(triggerRef, trigger)
</script>

{@render children({ ref: triggerRef })}

{#if $open}
  <div
    {...$content}
    use:content
    transition:flyAndScale={{ y: -4 }}
    class={cn(!noStyles && 'z-10 flex rounded border bg-white p-2 shadow', className)}
  >
    Content
  </div>
{/if}
