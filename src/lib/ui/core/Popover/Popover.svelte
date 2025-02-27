<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { SS } from 'svelte-runes'

  import { Popover } from 'bits-ui'

  import { cn, flyAndScale } from '$ui/utils/index.js'

  import Trigger from './Trigger.svelte'

  let {
    class: className,
    content,
    children,
    noStyles = false,
    isOpened = $bindable(false),

    align,
    side,

    rootProps,
    triggerProps,
    contentProps,
  }: {
    class?: string
    children: Snippet<[{ ref?: SS<HTMLElement | null> }]>
    content: Snippet<[{ close: () => void }]>
    noStyles?: boolean
    isOpened?: boolean

    align?: Popover.ContentProps['align']
    side?: Popover.ContentProps['side']

    rootProps?: Popover.Props & { outerControl?: boolean }
    triggerProps?: Popover.TriggerProps
    contentProps?: Popover.ContentProps
  } = $props()
</script>

{#if rootProps?.outerControl}
  {@render children({})}
{/if}
<Popover.Root {...rootProps} bind:open={isOpened}>
  {#if rootProps?.outerControl}
    <Popover.Trigger class="absolute" />
  {:else}
    <Popover.Trigger {...triggerProps} class="hidden" asChild let:builder>
      <Trigger {builder} {children}></Trigger>
    </Popover.Trigger>
  {/if}

  <Popover.Content
    transition={flyAndScale}
    sideOffset={8}
    {...contentProps}
    {align}
    {side}
    class={cn(!noStyles && 'z-10 flex rounded border bg-white p-2 shadow', className)}
  >
    {@render content({ close: () => (isOpened = false) })}
  </Popover.Content>
</Popover.Root>
