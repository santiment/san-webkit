<script lang="ts">
  import type { Snippet } from 'svelte'
  import { useDeviceCtx } from '$lib/ctx/device/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { useUiCtx } from '$lib/ctx/ui/index.js'
  import Notifications from '$ui/core/Notifications'

  let { children }: { children: Snippet } = $props()

  useDeviceCtx()
  useCustomerCtx()
  useUiCtx()
</script>

{@render children()}

<Notifications></Notifications>
