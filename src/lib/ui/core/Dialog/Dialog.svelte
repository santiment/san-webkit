<script lang="ts">
  import { type Snippet } from 'svelte'
  import { BROWSER } from 'esm-env'

  import { useDeviceCtx } from '$lib/ctx/device/index.js'

  import { getDialogControllerCtx } from './dialogs.js'
  import DesktopDialog from './Responsive/DesktopDialog.svelte'
  import MobileDialog from './Responsive/MobileDialog.svelte'
  import { useOpenState } from './state.svelte.js'

  let {
    children,
    class: className,
  }: {
    class?: string
    children: Snippet<[{ close: () => void }]>
  } = $props()

  const { Controller } = getDialogControllerCtx()
  const { device } = useDeviceCtx()
  const { onOpenChange, onClosed } = useOpenState()

  let isOpened = $state(true)

  const close = () => (isOpened = false)
  Controller.close = close
</script>

{#if BROWSER && isOpened}
  {#if device.$.isDesktop}
    <DesktopDialog class={className} {children} {onOpenChange}></DesktopDialog>
  {:else}
    <MobileDialog class={className} {children} {onClosed}></MobileDialog>
  {/if}
{/if}
