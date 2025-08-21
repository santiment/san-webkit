<script lang="ts">
  import { type Snippet } from 'svelte'
  import { createTooltip, type CreateTooltipProps } from '@melt-ui/svelte'
  import { ss } from 'svelte-runes'

  import { cn, flyAndScale } from '$ui/utils/index.js'
  import { useMelt } from '$ui/utils/melt-ui.js'

  type TooltipType = 'plain' | 'arrow'
  type Props = {
    class?: string
    noStyles?: boolean
    isOpened?: boolean
    type?: TooltipType
    children: Snippet<[{ ref: typeof triggerRef }]>
    content: Snippet<[{ close: () => void }]>
    position?: NonNullable<CreateTooltipProps['positioning']>['placement']
  } & Omit<CreateTooltipProps, 'positioning'>

  let {
    class: className,
    noStyles = false,
    children,
    content: contentSnippet,
    type = 'plain',
    isOpened = false,
    position = 'bottom-end',
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
    },
  })

  let triggerRef = ss<null | HTMLElement>(null)

  useMelt(triggerRef, trigger)

  $effect(() => {
    open.set(isOpened)
  })
</script>

{@render children({ ref: triggerRef })}

{#if $open}
  <div
    {...$content}
    use:content
    transition:flyAndScale={{ y: -4 }}
    class={cn(!noStyles && 'z-10 flex rounded border bg-white p-2 drop-shadow-dropdown', className)}
  >
    {#if type === 'arrow'}
      <div {...$arrow} use:arrow></div>
    {/if}

    {@render contentSnippet({ close: () => open.set(false) })}
  </div>
{/if}
