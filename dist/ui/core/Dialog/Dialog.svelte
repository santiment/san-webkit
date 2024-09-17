<script lang="ts">import {} from "svelte";
import { BROWSER } from "esm-env";
import { useDeviceCtx } from "../../../ctx/device/index.js";
import { getDialogControllerCtx } from "./dialogs.js";
import DesktopDialog from "./Responsive/DesktopDialog.svelte";
import MobileDialog from "./Responsive/MobileDialog.svelte";
import { TRANSITION_MS } from "./state.js";
let {
  children,
  class: className
} = $props();
const { Controller } = getDialogControllerCtx();
const { device } = useDeviceCtx();
let isOpened = $state(true);
let isMounted = false;
const close = () => isOpened = false;
Controller.close = close;
$effect(() => {
  setTimeout(() => isMounted = true, TRANSITION_MS + 50);
});
function onOpenChange({ next }) {
  if (next === false) {
    if (isMounted === false) return true;
    setTimeout(Controller._unmount, TRANSITION_MS + 50);
  }
  return next;
}
</script>

{#if BROWSER && isOpened}
  {#if device.$.isDesktop}
    <DesktopDialog class={className} {children} {onOpenChange}></DesktopDialog>
  {:else}
    <MobileDialog class={className} {close} {children} onClose={() => onOpenChange({ next: false })}
    ></MobileDialog>
  {/if}
{/if}
