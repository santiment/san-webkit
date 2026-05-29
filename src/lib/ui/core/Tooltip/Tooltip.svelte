<script lang="ts">
  import { type Snippet } from 'svelte'
  import { createTooltip, type CreateTooltipProps } from '@melt-ui/svelte'
  import { ss } from 'svelte-runes'
  import { on } from 'svelte/events'

  import { cn } from '$ui/utils/index.js'
  import { useMelt } from '$ui/utils/melt-ui.js'
  import { flyAndScaleOutTransition } from '$ui/utils/transitions.js'

  type FloatingConfig = NonNullable<CreateTooltipProps['positioning']>

  type TooltipType = 'plain' | 'arrow'
  type Props = {
    class?: string
    noStyles?: boolean
    isOpened?: boolean
    type?: TooltipType
    children: Snippet<[{ ref: typeof triggerRef; isOpened: boolean }]>
    content: Snippet<[{ close: () => void }]>
    position?: FloatingConfig['placement']
    offset?: number
    positionConfig?: FloatingConfig
    closeOnOutsideClick?: boolean
  } & Omit<CreateTooltipProps, 'positioning'>

  let {
    class: className,
    noStyles = false,
    children,
    content: contentSnippet,
    type = 'plain',
    isOpened = false,
    position = 'bottom-end',
    positionConfig,
    offset,
    closeOnOutsideClick = true,
    ...options
  }: Props = $props()

  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    openDelay: 0,
    closeDelay: 0,
    closeOnPointerDown: false,
    forceVisible: true,
    arrowSize: type === 'arrow' ? 11 : undefined,
    ...options,
    positioning: {
      placement: position,
      fitViewport: true,
      // NOTE: [gutter] must be set to 0 in order to offset to work
      gutter: offset ? 0 : 5,
      // NOTE: [mainAxis] is here to compensate zero gutter. 5 is the default [gutter] value
      offset: offset ? { mainAxis: 5, crossAxis: offset } : undefined,
      ...positionConfig,
    },
  })

  let triggerRef = ss<null | HTMLElement>(null)

  useMelt(triggerRef, trigger)

  let contentEl = $state<HTMLElement>()

  $effect(() => {
    if (!closeOnOutsideClick || !$open) return

    const removeListener = on(window, 'pointerdown', (e) => {
      if (contentEl && e.composedPath().includes(contentEl)) return

      open.set(false)
    })

    return () => removeListener()
  })

  $effect(() => {
    open.set(isOpened)
  })
</script>

{@render children({ ref: triggerRef, isOpened: $open })}

{#if $open}
  <div
    {...$content}
    bind:this={contentEl}
    use:content
    out:flyAndScaleOutTransition
    class={cn(
      'fly-and-scale-animation animated',
      !noStyles &&
        'z-10 flex rounded border bg-white p-2 drop-shadow-dropdown dark:bg-athens dark:drop-shadow-none',
      className,
    )}
  >
    {#if type === 'arrow'}
      <div class="border-l border-t" {...$arrow} use:arrow></div>
    {/if}

    {@render contentSnippet({ close: () => open.set(false) })}
  </div>
{/if}

<style>
  :global(.night-mode) div {
    --active-ghost-button-bg: var(--porcelain);
  }
</style>
