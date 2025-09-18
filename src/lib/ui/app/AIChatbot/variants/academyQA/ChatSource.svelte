<script lang="ts">
  import type { TSource } from '../../types.js'

  import Button from '$ui/core/Button/Button.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'

  const source: TSource = $props()
</script>

<Button
  target="_blank"
  href={source.url}
  class="group grid h-auto w-full max-w-[364px] grid-cols-[1fr_auto] items-start gap-x-2 bg-green-light-1 py-3 pl-5 pr-2"
  {onclick}
>
  <div class="min-w-0">
    <div class="truncate">
      [{source.number}] {source.title}
    </div>
    <div class="truncate text-green group-hover:text-green-hover group-hover:underline">
      {source.url}
    </div>
  </div>

  <div class="flex size-8 items-center justify-center">
    <Svg id="link" />
  </div>
</Button>
