<script lang="ts">
  import type { TSource } from '../../types.js'

  import Button from '$ui/core/Button/Button.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'

  const source: TSource = $props()
</script>

<Button
  target="_blank"
  href={source.url}
  class="group inline-flex h-auto w-full max-w-[364px] items-start justify-between bg-green-light-1 py-3 pl-5 pr-2"
  {onclick}
>
  <div
    class="max-w-[287px] [&>div]:overflow-hidden [&>div]:overflow-ellipsis [&>div]:whitespace-nowrap"
  >
    <div>[{source.number}] {source.title}</div>
    <div class="text-green group-hover:text-green-hover">{source.url}</div>
  </div>
  <div class="flex size-8 center">
    <Svg id="link" />
  </div>
</Button>
