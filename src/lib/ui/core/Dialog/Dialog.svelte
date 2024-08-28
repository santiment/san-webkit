<script lang="ts">
  import { type Snippet } from 'svelte'
  import { BROWSER } from 'esm-env'
  import { Drawer } from 'vaul-svelte'
  import { getDialogControllerCtx } from './dialogs.js'
  import DesktopDialog from './DesktopDialog.svelte'
  import MobileDialog from './MobileDialog.svelte'

  let {
    children,
    class: className,
  }: {
    class?: string
    children: Snippet<[{ close: () => void }]>
  } = $props()

  const TRANSITION_MS = 180
  const { Controller } = getDialogControllerCtx()

  let isOpened = $state(true)
  let isMounted = false
  let isNested = BROWSER && !!document.querySelector('[data-vaul-drawer-visible]')

  let DrawerRoot = isNested ? Drawer.NestedRoot : Drawer.Root
  console.log({ isNested })

  const close = () => (isOpened = false)
  Controller.close = close

  $effect(() => {
    setTimeout(() => (isMounted = true), TRANSITION_MS + 50)
  })

  function onOpenChange({ next }: { next: boolean }) {
    if (next === false) {
      if (isMounted === false) return true

      // Forcing memory clean
      // @ts-expect-error
      setTimeout(Controller._unmount, TRANSITION_MS + 50)
    }

    return next
  }
</script>

{#if BROWSER}
  {#if isOpened}
    <DrawerRoot shouldScaleBackground open={isOpened} onClose={() => onOpenChange({ next: false })}>
      <MobileDialog {close} {children} {isNested}></MobileDialog>
    </DrawerRoot>

    {#if false}
      <DesktopDialog class={className} {children} {onOpenChange}></DesktopDialog>
    {/if}
  {/if}
{/if}
