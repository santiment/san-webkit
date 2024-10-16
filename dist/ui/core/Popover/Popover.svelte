<script lang="ts">import { Popover } from "bits-ui";
import { cn, flyAndScale } from "../../utils/index.js";
import Trigger from "./Trigger.svelte";
let {
  class: className,
  content,
  children,
  noStyles = false,
  align,
  side,
  rootProps,
  triggerProps,
  contentProps
} = $props();
let isOpened = $state(false);
</script>

<Popover.Root {...rootProps} bind:open={isOpened}>
  <Popover.Trigger {...triggerProps} class="hidden" asChild let:builder>
    <Trigger {builder} {children}></Trigger>
  </Popover.Trigger>

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
