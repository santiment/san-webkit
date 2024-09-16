<script lang="ts">import { Drawer } from "vaul-svelte";
import { getDialogControllerCtx } from "../dialogs.js";
import { getVaulCtx } from "../vaul.js";
import { cn } from "../../../utils/index.js";
let {
  close,
  children,
  isNested = false
} = $props();
const [vaulCtxKey, vaulCtx] = getVaulCtx();
const { Controller } = getDialogControllerCtx();
if (vaulCtx) Controller._context.set(vaulCtxKey, vaulCtx);
$effect(() => {
  if (vaulCtx) {
    Controller.close = () => vaulCtx.methods.closeDrawer();
  }
});
</script>

<Drawer.Portal>
  <Drawer.Overlay class="fixed inset-0 z-[10000] bg-[#000000cf] dark:bg-[#00000067]" />
  <Drawer.Content
    class={cn(
      'fixed bottom-0 left-0 right-0 z-[10001] mt-24 flex h-full max-h-[96%] flex-col overflow-hidden rounded-t-[10px] bg-white',
      isNested && 'max-h-[94%]',
    )}
  >
    {@render children({ close })}
  </Drawer.Content>
</Drawer.Portal>
