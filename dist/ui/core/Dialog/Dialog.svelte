<script lang="ts">
  import { type Snippet } from 'svelte'
  import { BROWSER } from 'esm-env'

  import { useDeviceCtx } from '../../../ctx/device/index.js'

  import { getDialogControllerCtx } from './dialogs.js'
  import DesktopDialog from './Responsive/DesktopDialog.svelte'
  import MobileDialog from './Responsive/MobileDialog.svelte'
  import MobileLandscapeModal from './Responsive/MobileLandscapeModal.svelte'
  import { TRANSITION_MS } from './state.svelte.js'

  let {
    children,
    forceMobileLandscape = false,
    class: className,
  }: {
    class?: string
    forceMobileLandscape?: boolean
    children: Snippet<[{ close: () => void }]>
  } = $props()

  const { Controller } = getDialogControllerCtx()
  const { device } = useDeviceCtx()

  let isMounted = $state(false)
  let isOpened = $state(true)

  // @ts-expect-error
  const onClosed = () => Controller._unmount()

  function onOpenChange({ next }: { next: boolean }) {
    if (next === false) {
      if (isMounted === false) return true

      // Forcing memory clean
      setTimeout(onClosed, TRANSITION_MS + 50)
    }

    return next
  }

  const close = () => (isOpened = false)
  Controller.close = close

  $effect(() => {
    setTimeout(() => (isMounted = true), TRANSITION_MS + 50)
  })
</script>

{#if BROWSER && isOpened}
  {#if device.$.isDesktop}
    <DesktopDialog class={className} {children} {onOpenChange}></DesktopDialog>
  {:else if forceMobileLandscape}
    <MobileLandscapeModal class={className} {children} {onOpenChange} />
  {:else}
    <MobileDialog class={className} {children} {onClosed}></MobileDialog>
  {/if}
{/if}
