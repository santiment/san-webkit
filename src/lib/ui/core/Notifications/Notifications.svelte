<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { Toaster } from 'svelte-sonner'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  const { device } = useDeviceCtx()
</script>

{#if BROWSER}
  <Toaster
    position={device.$.isMobile ? 'top-center' : 'bottom-left'}
    toastOptions={{ unstyled: true }}
  ></Toaster>
{/if}
