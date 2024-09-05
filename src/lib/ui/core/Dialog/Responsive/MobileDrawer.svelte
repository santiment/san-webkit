<script lang="ts">
  import { Drawer } from 'vaul-svelte'
  import { getDialogControllerCtx } from '../dialogs.js'
  import { getVaulCtx } from '../vaul.js'
  import type { Snippet } from 'svelte'
  import { cn } from '$ui/utils/index.js'

  let {
    close,
    children,
    isNested = false,
  }: {
    close: () => void
    children: Snippet<[{ close: typeof close }]>
    isNested?: boolean
  } = $props()

  const [vaulCtxKey, vaulCtx] = getVaulCtx()
  const { Controller } = getDialogControllerCtx()

  // @ts-expect-error
  if (vaulCtx) Controller._context.set(vaulCtxKey, vaulCtx)

  $effect(() => {
    if (vaulCtx) {
      Controller.close = () => vaulCtx.methods.closeDrawer()
    }
  })
</script>

<Drawer.Portal>
  <Drawer.Overlay class="fixed inset-0 bg-[#000000cf]" />
  <Drawer.Content
    class={cn(
      'fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[10px] bg-white',
      isNested && 'max-h-[94%]',
    )}
  >
    {@render children({ close })}
  </Drawer.Content>
</Drawer.Portal>
