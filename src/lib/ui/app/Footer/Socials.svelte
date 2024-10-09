<script lang="ts">
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte'
  import { socialMediaLinks } from './links.js'

  const { device } = useDeviceCtx()
</script>

{#if device.$.isMobile}
  <h4 class="mb-3 text-base font-medium text-waterloo">Santiment on social media</h4>
{/if}

<div
  class="ml-auto flex max-w-[265px] items-center justify-between md:ml-0 md:max-w-[292px] sm:max-w-none hover:[&>a>svg]:fill-green sm:[&>a]:flex sm:[&>a]:h-10 sm:[&>a]:w-[46px] sm:[&>a]:items-center sm:[&>a]:justify-center sm:[&>a]:rounded sm:[&>a]:border"
>
  {#each socialMediaLinks as { href, id, width, height, label }}
    <a {href} target="_blank" rel="noreferrer" aria-label={`Santiment on ${label}`}>
      <Svg {id} w={width} h={height} />
    </a>
  {/each}
</div>
