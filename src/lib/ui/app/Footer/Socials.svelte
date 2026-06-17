<script lang="ts">
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte'

  import { socialMediaLinks } from './links.js'

  const { device } = useDeviceCtx()
</script>

<div class="flex flex-col gap-y-4">
  {#if device.$.isPhone}
    <h4 class="text-base text-fiord">Santiment on social media</h4>
  {/if}

  <div
    class="flex max-w-[265px] flex-1 items-center gap-x-4 md:ml-0 md:max-w-[292px] sm:max-w-none"
  >
    {#each socialMediaLinks as { href, id, width, height, label }}
      <a
        {href}
        target="_blank"
        class="group flex size-10 center sm:w-[46px] sm:rounded-md sm:border"
        rel="noreferrer"
        aria-label={`Santiment on ${label}`}
      >
        <Svg {id} w={width} h={height} class="fill-rhino group-hover:fill-waterloo" />
      </a>
    {/each}
  </div>
</div>
