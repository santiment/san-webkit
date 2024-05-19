<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  let {
    class: className,
    type = 'text',
    placeholder = '',
    icon,
    iconSize = 12,
    ...rest
  }: HTMLInputAttributes & {
    class?: string
    type?: 'text' | 'number'
    placeholder?: string
    icon?: string
    iconSize?: number | string
  } = $props()
</script>

<div
  class={cn(
    'relative flex items-center rounded border bg-white fill-casper focus-within:border-green focus-within:fill-green hover:border-green',
    className,
  )}
>
  {#if icon}
    <Svg id={icon} w={iconSize} class="absolute left-2.5"></Svg>
  {/if}

  <input
    {...rest}
    {type}
    {placeholder}
    class={cn('w-full rounded bg-transparent py-[5px] pl-2.5 pr-3 outline-none', icon && 'pl-8')}
  />
</div>
