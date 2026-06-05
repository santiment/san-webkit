<script lang="ts">
  import type { Snippet } from 'svelte'

  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  let {
    desktop = false,
    tablet = false,
    phone = false,
    children,
  }: { desktop?: boolean; tablet?: boolean; phone?: boolean; children: Snippet } = $props()

  const targets = { desktop, tablet, phone, 'phone-xs': phone }

  const { device } = useDeviceCtx()
</script>

{#if targets[device.$.type]}
  {@render children()}
{/if}
