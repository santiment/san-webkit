<script lang="ts">
  import { type Snippet } from 'svelte'
  import { BROWSER } from 'esm-env'
  import { useDeviceCtx } from '$lib/ctx/device/index.js'
  import { getDialogControllerCtx } from './dialogs.js'
  import DesktopDialog from './Responsive/DesktopDialog.svelte'
  import MobileDialog from './Responsive/MobileDialog.svelte'
  import { TRANSITION_MS } from './state.js'

  let {
    children,
    class: className,
  }: {
    class?: string
    children: Snippet<[{ close: () => void }]>
  } = $props()

  const { Controller } = getDialogControllerCtx()
  const { device } = useDeviceCtx()

  let isOpened = $state(true)
  let isMounted = false

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
    {#if device.$.isDesktop}
      <DesktopDialog class={className} {children} {onOpenChange}></DesktopDialog>
    {:else}
      <MobileDialog {close} {children} {isOpened} onClose={() => onOpenChange({ next: false })}
      ></MobileDialog>
    {/if}
  {/if}
{/if}
