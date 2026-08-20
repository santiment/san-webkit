<script lang="ts">
  import type { Snippet } from 'svelte'

  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  import { cn } from '../index.js'

  type TProps = {
    css?: boolean
    desktop?: boolean
    tablet?: boolean
    phone?: boolean
    children: Snippet
  }

  const { css = false, desktop = false, tablet = false, phone = false, children }: TProps = $props()

  const targets = { desktop, tablet, phone, 'phone-xs': phone }

  const { device } = useDeviceCtx()
</script>

{#if css}
  <div
    class={cn(
      desktop ? 'contents' : 'hidden',
      tablet ? 'md:contents' : 'md:hidden',
      phone ? 'sm:contents' : 'sm:hidden',
    )}
  >
    {@render children()}
  </div>
{:else if targets[device.$.type]}
  {@render children()}
{/if}
