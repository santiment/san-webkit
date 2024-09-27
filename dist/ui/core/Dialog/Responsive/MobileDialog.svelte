<script lang="ts">import { useDrawer } from "drawer-svelte";
import { cn } from "../../../utils/index.js";
import { getDialogControllerCtx } from "../dialogs.js";
let {
  children,
  onClosed,
  class: className
} = $props();
const { Controller } = getDialogControllerCtx();
const {
  portalled,
  overlay,
  content,
  meltDialog,
  onDragHandlePointerDown,
  inTransition,
  outTransition,
  openDrawer,
  closeDrawer: close
} = useDrawer({ onClosed });
const {
  states: { open }
} = meltDialog;
$effect(() => {
  openDrawer();
  Controller.close = close;
});
</script>

{#if $open}
  <div class="relative z-[10000]" {...$portalled} use:portalled in:inTransition out:outTransition>
    <div
      {...$overlay}
      use:overlay
      class="fixed inset-0 z-[10000] bg-[#000000cf] dark:bg-[#00000067]"
    ></div>

    <div
      {...$content}
      use:content
      class={cn(
        'fixed bottom-0 left-0 right-0 z-[10001] mt-24 h-full max-h-[96%] rounded-t-[10px] bg-white column',

        className,
      )}
    >
      <span
        onpointerdown={onDragHandlePointerDown}
        class="handle fixed left-1/2 top-[6px] z-[100] mx-auto flex h-1.5 w-12 flex-shrink-0 -translate-x-1/2 rounded-full bg-mystic center"
      ></span>

      <div class="relative w-full overflow-hidden rounded-t-[10px] column">
        {@render children({ close })}
      </div>
    </div>
  </div>
{/if}

<style>
  .handle::before {
    content: '';
    display: flex;
    position: absolute;
    width: 50vw;
    height: 50px;
  }
</style>
