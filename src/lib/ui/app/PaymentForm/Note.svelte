<script lang="ts">
  import type { Snippet } from 'svelte'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  let {
    class: className,
    children,
    dark = false,
  }: { class?: string; children: Snippet; dark?: boolean } = $props()
</script>

<div
  class={cn(
    'flex items-center gap-3 rounded-lg px-5 py-3 text-rhino',
    dark
      ? 'gap-2 bg-fiord fill-white px-3 text-white'
      : 'gap-3 border border-orange fill-orange-hover',
    className,
  )}
>
  <Svg id="info" class={cn(dark && 'mt-1 self-start')} w={dark ? 12 : 16}></Svg>

  <div>
    {@render children()}
  </div>
</div>
