<script lang="ts">
  import type { Snippet } from 'svelte'
  import Svg from '../../core/Svg/index.js'
  import { cn } from '../../utils/index.js'

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
      ? 'gap-2 bg-fiord-day fill-white-day px-3 text-white-day'
      : 'gap-3 border border-orange fill-orange-hover',
    className,
  )}
>
  <Svg id="info" class={cn(dark && 'mt-1 self-start')} w={dark ? 12 : 16}></Svg>

  <div>
    {@render children()}
  </div>
</div>
