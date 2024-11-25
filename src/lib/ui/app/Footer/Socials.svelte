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
  class="ml-auto flex max-w-[265px] items-center justify-between md:ml-0 md:max-w-[292px] sm:max-w-none"
>
  {#each socialMediaLinks as { href, id, width, height, label }}
    <a
      {href}
      target="_blank"
      class="group sm:flex sm:h-10 sm:w-[46px] sm:items-center sm:justify-center sm:rounded sm:border"
      rel="noreferrer"
      aria-label={`Santiment on ${label}`}
    >
      <Svg {id} w={width} h={height} class="group-hover:fill-green" />
    </a>
  {/each}
</div>
