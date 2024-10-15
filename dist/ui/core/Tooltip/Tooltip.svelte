<script lang="ts">import {} from "svelte";
import { cn, flyAndScale } from "../../utils/index.js";
import { useMelt } from "../../utils/melt-ui.js";
import { createTooltip } from "@melt-ui/svelte";
import { ss } from "svelte-runes";
let {
  class: className,
  noStyles = false,
  children,
  content: contentSnippet,
  isOpened = false,
  position = "bottom-end",
  ...options
} = $props();
const {
  elements: { trigger, content },
  states: { open }
} = createTooltip({
  openDelay: 0,
  closeDelay: 0,
  closeOnPointerDown: false,
  forceVisible: true,
  ...options,
  positioning: {
    placement: position,
    fitViewport: true
  }
});
let triggerRef = ss(null);
useMelt(triggerRef, trigger);
$effect(() => {
  open.set(isOpened);
});
</script>

{@render children({ ref: triggerRef })}

{#if $open}
  <div
    {...$content}
    use:content
    transition:flyAndScale={{ y: -4 }}
    class={cn(!noStyles && 'z-10 flex rounded border bg-white p-2 shadow', className)}
  >
    {@render contentSnippet({ close: () => open.set(false) })}
  </div>
{/if}
