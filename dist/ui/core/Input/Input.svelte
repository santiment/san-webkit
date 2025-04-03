<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import type { Snippet } from 'svelte'

  import Svg from '../Svg/index.js'
  import { cn } from '../../utils/index.js'

  let {
    class: className,
    inputClass,
    type = 'text',
    placeholder = '',
    icon,
    iconSize = 12,
    left,
    right,
    ...rest
  }: HTMLInputAttributes & {
    class?: string
    type?: 'text' | 'number' | 'email'
    placeholder?: string
    icon?: string
    iconSize?: number | string
    inputClass?: string
    left?: Snippet
    right?: Snippet
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

  {@render left?.()}

  <input
    {...rest}
    {type}
    {placeholder}
    class={cn(
      'w-full rounded bg-transparent py-[5px] pl-2.5 pr-3 outline-none',
      icon && 'pl-8',
      inputClass,
    )}
  />

  {@render right?.()}
</div>
