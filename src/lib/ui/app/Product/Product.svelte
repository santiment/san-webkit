<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import sanLogo from '$lib/illus/san-logo.svg'

  const {
    class: className = '',
    title,
    isXmas = false,
  }: { title: string; class?: string; isXmas?: boolean } = $props()
</script>

<a
  href="/"
  class={cn('relative flex items-center text-base font-medium text-black', className)}
  onclick={window.__onLinkClick}
>
  {#if isXmas}
    <Svg illus id="christmas/xmas-hat" w={33} h={18} class="absolute -top-[7px] left-[9px]" />
  {/if}
  <img class="mr-2 size-8" src={sanLogo} alt="SAN" />
  {title}
</a>
