<script lang="ts">
  import type { Snippet } from 'svelte'

  import {
    Popover,
    type PopoverContentProps,
    type PopoverRootProps,
    type PopoverTriggerProps,
  } from 'bits-ui'

  import { cn, flyAndScale } from '../../utils/index.js'

  type TProps = {
    class?: string
    children?: PopoverTriggerProps['child']
    content: Snippet<[{ close: () => void }]>
    noStyles?: boolean
    isOpened?: boolean

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
    isOpened = $bindable(false),

    align,
    side,

    rootProps,
    contentProps,
  }: TProps = $props()

  // TODO: Migrate js transition:flyAndScale to css from bits-ui example
</script>

<Popover.Root {...rootProps} bind:open={isOpened}>
  <Popover.Trigger child={children}></Popover.Trigger>

  <Popover.Content
    sideOffset={8}
    {...contentProps}
    {align}
    {side}
    forceMount
    class={cn(!noStyles && 'z-10 flex rounded border bg-white p-2 shadow', className)}
  >
    {#snippet child({ wrapperProps, props, open })}
      {#if open}
        <div {...wrapperProps}>
          <div {...props} transition:flyAndScale>
            {@render content({ close: () => (isOpened = false) })}
          </div>
        </div>
      {/if}
    {/snippet}
  </Popover.Content>
</Popover.Root>
