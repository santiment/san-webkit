<script lang="ts">
  import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements'
  import type { Snippet } from 'svelte'

  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  type TCommonProps = {
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

<label
  class={cn(
    'relative flex items-center rounded border bg-white fill-casper pl-2.5 pr-3 focus-within:border-green focus-within:fill-green hover:border-green',
    icon && 'pl-8',
    disabled && 'bg-athens text-mystic hover:border-porcelain',
    className,
  )}
>
  {#if icon}
    <Svg id={icon} w={iconSize} class="absolute left-2.5"></Svg>
  {/if}

  {@render left?.()}

  <svelte:element
    this={as ?? 'input'}
    {...rest}
    {disabled}
    {type}
    {placeholder}
    class={cn('w-full rounded bg-transparent py-[5px] outline-none', inputClass)}
  />

  {@render right?.()}
</label>
