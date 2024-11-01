<script lang="ts">
  import { onMount, type Snippet } from 'svelte'
  import { useDeviceCtx } from '$lib/ctx/device/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { useUiCtx } from '$lib/ctx/ui/index.js'
  import Notifications from '$ui/core/Notifications'

  let { children }: { children: Snippet } = $props()

  useDeviceCtx()
  useCustomerCtx()
  const { ui } = useUiCtx()

  onMount(() => {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type !== 'attributes') return

        const target = mutation.target as HTMLElement
        ui.$$.isNightMode = target.classList.contains('night-mode')
      }
    })

    observer.observe(document.body.parentElement!, { attributes: true })
    return () => observer.disconnect()
  })
</script>

{@render children()}

<Notifications></Notifications>
