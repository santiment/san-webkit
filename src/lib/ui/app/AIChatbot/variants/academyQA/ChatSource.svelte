<script lang="ts">
  import type { TSource } from '../../types.js'

  import Button from '$ui/core/Button/Button.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'

  const source: TSource = $props()
</script>

<Button
  target="_blank"
  href={source.url}
  class="group grid h-auto w-full max-w-[calc(50%-14px)] grid-cols-[1fr_auto] items-start gap-x-3 bg-green-light-1 py-3 pr-2 pl-5 sm:max-w-[364px]!"
  {onclick}
>
  <div class="min-w-0 pt-1">
    <div class="group-hover:text-black truncate">
      [{source.number}] {source.title}
    </div>
    <div class="group-hover:text-green-hover group-hover:underline truncate text-green">
      {source.url}
    </div>
  </div>

  <div class="flex size-8 items-center justify-center">
    <Svg id="external-link" w={14} class="group-hover:fill-rhino" />
  </div>
</Button>
