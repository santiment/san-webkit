<script lang="ts">import { BROWSER } from "esm-env";
import { Drawer } from "vaul-svelte";
import MobileDrawer from "./MobileDrawer.svelte";
import { TRANSITION_MS } from "../state.js";
let {
  close,
  onClose,
  children
} = $props();
let isOpened = $state(false);
let isNested = BROWSER && !!document.querySelector("[data-vaul-drawer-visible]");
let DrawerRoot = isNested ? Drawer.NestedRoot : Drawer.Root;
$effect(() => {
  isOpened = true;
});
$effect(() => () => {
  if (isNested) return;
  const drawerWrapperNode = document.querySelector(
    "[data-vaul-drawer-wrapper]"
  );
  if (!drawerWrapperNode) return;
  setTimeout(() => {
    drawerWrapperNode.style.transform = "";
    drawerWrapperNode.style.borderRadius = "";
    drawerWrapperNode.style.overflow = "";
  }, TRANSITION_MS);
});
</script>

<DrawerRoot shouldScaleBackground open={isOpened} {onClose}>
  <MobileDrawer {close} {children} {isNested}></MobileDrawer>
</DrawerRoot>
