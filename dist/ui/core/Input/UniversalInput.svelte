<script lang="ts">
  import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements'
  import type { Snippet } from 'svelte'
  import type { SS } from 'svelte-runes'

  import Svg from '../Svg/index.js'
  import { cn } from '../../utils/index.js'

  type TCommonProps = {
    ref?: SS<undefined | null | HTMLElement>
    class?: string
    type?: 'text' | 'number' | 'email'
    placeholder?: string
    icon?: string
    iconSize?: number | string
    inputClass?: string
    left?: Snippet
    right?: Snippet
  }

  type TInputProps = {
    as: 'input'
  } & HTMLInputAttributes &
    TCommonProps

  type TTextAreaProps = {
    as: 'textarea'
  } & HTMLTextareaAttributes &
    TCommonProps

  type TProps = TInputProps | TTextAreaProps

  let {
    class: className,
    inputClass,
    type = 'text',
    ref = { $: null },
    as,
    placeholder = '',
    icon,
    iconSize = 12,
    disabled,
    left,
    right,
    ...rest
  }: TProps = $props()
</script>

<!-- FIXME: Fix structure after design is discussed. Currently works incorrectly with [left] and [right] added -->
<!-- Search for [input-left-fix] to fix hacks after update -->
<div
  class={cn(
    'relative flex items-center rounded-md border bg-white fill-waterloo  focus-within:border-green focus-within:fill-green hover:border-green',
    disabled && 'bg-athens text-mystic hover:border-porcelain',
    className,
  )}
>
  {#if icon}
    <Svg id={icon} w={iconSize} class="absolute left-3"></Svg>
  {/if}

  {@render left?.()}

  <svelte:element
    this={as}
    bind:this={ref.$}
    {...rest}
    {disabled}
    {type}
    {placeholder}
    class={cn(
      'w-full rounded-md bg-transparent py-[5px] pl-2.5 pr-3 outline-none placeholder:text-waterloo',
      icon && 'pl-8',
      inputClass,
    )}
  />

  {@render right?.()}
</div>
