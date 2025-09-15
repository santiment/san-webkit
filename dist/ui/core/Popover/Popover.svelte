<script lang="ts">
  import type { Snippet } from 'svelte'

  import {
    Popover,
    type PopoverContentProps,
    type PopoverRootProps,
    type PopoverTriggerProps,
  } from 'bits-ui'

  import { cn } from '../../utils/index.js'
  import { flyAndScaleOutTransition } from '../../utils/transitions.js'

  type TProps = {
    class?: string
    children?: PopoverTriggerProps['child']
    content: Snippet<[{ close: () => void }]>
    noStyles?: boolean
    isOpened?: boolean
    matchTriggerWidth?: boolean

    align?: PopoverContentProps['align']
    side?: PopoverContentProps['side']

    rootProps?: PopoverRootProps
    contentProps?: PopoverContentProps
  }

  let {
    class: className,
    content,
    children,
    noStyles = false,
    matchTriggerWidth = false,
    isOpened = $bindable(false),

    align,
    side,

    rootProps,
    contentProps,
  }: TProps = $props()

  const preventFocus = (e: Event) => e.preventDefault()
</script>

<Popover.Root {...rootProps} bind:open={isOpened}>
  <Popover.Trigger child={children}></Popover.Trigger>

  <Popover.Content
    sideOffset={8}
    onCloseAutoFocus={preventFocus}
    onOpenAutoFocus={preventFocus}
    {...contentProps}
    {align}
    {side}
    forceMount
    class={cn(
      !noStyles && 'z-10 flex rounded border bg-white p-2 shadow-dropdown',
      matchTriggerWidth && 'w-[--bits-floating-anchor-width]',
      className,
    )}
  >
    {#snippet child({ wrapperProps, props, open })}
      {#if open}
        <div {...wrapperProps}>
          <div
            {...props}
            class={cn('fly-and-scale-animation animated', props.class as string)}
            out:flyAndScaleOutTransition
          >
            {@render content({ close: () => (isOpened = false) })}
          </div>
        </div>
      {/if}
    {/snippet}
  </Popover.Content>
</Popover.Root>
