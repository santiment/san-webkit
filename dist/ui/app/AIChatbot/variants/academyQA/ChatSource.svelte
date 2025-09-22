<script lang="ts">
  import type { TSource } from '../../types.js'

  import Button from '../../../../core/Button/Button.svelte'
  import Svg from '../../../../core/Svg/Svg.svelte'

  const source: TSource = $props()
</script>

<Button
  target="_blank"
  href={source.url}
  class="group grid h-auto w-full max-w-[calc(50%-14px)] grid-cols-[1fr_auto] items-start gap-x-3 bg-green-light-1 py-3 pl-5 pr-2 md:max-w-[364px]"
  {onclick}
>
  <div class="min-w-0 pt-1">
    <div class="truncate">
      [{source.number}] {source.title}
    </div>
    <div class="truncate text-green group-hover:text-green-hover group-hover:underline">
      {source.url}
    </div>
  </div>

  <div class="flex size-8 items-center justify-center">
    <Svg id="external-link" w={14} class="group-hover:fill-rhino" />
  </div>
</Button>
