<script lang="ts">
  import { Drawer } from 'vaul-svelte'
  import { getDialogControllerCtx } from '../dialogs.js'
  import { getVaulCtx } from '../vaul.js'
  import type { Snippet } from 'svelte'
  import { cn } from '$ui/utils/index.js'

  let {
    class: className,
    close,
    children,
    isNested = false,
  }: {
    class?: string
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
  <Drawer.Overlay class="fixed inset-0 z-[10000] bg-[#000000cf] dark:bg-[#00000067]" />
  <Drawer.Content
    class={cn(
      'fixed bottom-0 left-0 right-0 z-[10001] mt-24 flex h-full max-h-[96%] flex-col overflow-hidden rounded-t-[10px] bg-white',
      isNested && 'max-h-[94%]',
      className,
    )}
  >
    <span
      class="5 fixed left-1/2 top-[6px] z-[100] mx-auto h-1.5 w-12 flex-shrink-0 -translate-x-1/2 rounded-full bg-mystic"
    ></span>

    {@render children({ close })}
  </Drawer.Content>
</Drawer.Portal>
