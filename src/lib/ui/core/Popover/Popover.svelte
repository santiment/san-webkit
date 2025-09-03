<script lang="ts">
  import type { Snippet } from 'svelte'

  import {
    Popover,
    type PopoverContentProps,
    type PopoverRootProps,
    type PopoverTriggerProps,
  } from 'bits-ui'

  import { cn } from '$ui/utils/index.js'

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

  // TODO: Migrate js transition:flyAndScale to css from bits-ui example
  function transition(el: HTMLElement) {
    el.dataset.state = 'closed'
    return { duration: 200 }
  }
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
      'bg-red',
      !noStyles && 'z-10 flex rounded border bg-white p-2 shadow-dropdown',
      matchTriggerWidth && 'w-[--bits-floating-anchor-width]',
      className,
    )}
  >
    {#snippet child({ wrapperProps, props, open })}
      {#if open}
        <div {...wrapperProps}>
          <!--<div {...props} transition:flyAndScale>-->
          <div
            {...props}
            class={cn('fly-and-scale-animation', props.class as string)}
            out:transition
          >
            {@render content({ close: () => (isOpened = false) })}
          </div>
        </div>
      {/if}
    {/snippet}
  </Popover.Content>
</Popover.Root>
