<script lang="ts">
  import { type Snippet } from 'svelte'
  import { createTooltip, type CreateTooltipProps } from '@melt-ui/svelte'
  import { ss } from 'svelte-runes'

  import { cn, flyAndScale } from '$ui/utils/index.js'
  import { useMelt } from '$ui/utils/melt-ui.js'

  type FloatingConfig = NonNullable<CreateTooltipProps['positioning']>

  type TooltipType = 'plain' | 'arrow'
  type Props = {
    class?: string
    noStyles?: boolean
    isOpened?: boolean
    type?: TooltipType
    children: Snippet<[{ ref: typeof triggerRef }]>
    content: Snippet<[{ close: () => void }]>
    position?: FloatingConfig['placement']
    offset?: number
    positionConfig?: FloatingConfig
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
    class={cn(!noStyles && 'tooltip-drop-shadow z-10 flex rounded border bg-white p-2', className)}
  >
    {#if type === 'arrow'}
      <div {...$arrow} use:arrow></div>
    {/if}

    {@render contentSnippet({ close: () => open.set(false) })}
  </div>
{/if}

<style lang="postcss">
  .tooltip-drop-shadow {
    filter: drop-shadow(0 1px 3px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 2px rgb(0 0 0 / 0.1));
  }
</style>
