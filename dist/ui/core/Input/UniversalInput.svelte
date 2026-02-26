<script lang="ts">
  import type {
    HTMLButtonAttributes,
    HTMLInputAttributes,
    HTMLTextareaAttributes,
  } from 'svelte/elements'
  import type { Snippet } from 'svelte'
  import type { SS } from 'svelte-runes'

  import Svg from '../Svg/index.js'
  import { cn } from '../../utils/index.js'

  import Button from '../Button/Button.svelte'

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
    ref?: SS<undefined | null | HTMLInputElement>
  } & HTMLInputAttributes &
    TCommonProps

  type TTextAreaProps = {
    as: 'textarea'
    ref?: SS<undefined | null | HTMLTextAreaElement>
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

  const isNumber = $derived(type === 'number')
</script>

<!-- FIXME: Fix structure after design is discussed. Currently works incorrectly with [left] and [right] added -->
<!-- Search for [input-left-fix] to fix hacks after update -->
<div
  class={cn(
    'group relative flex items-center rounded-md border bg-white fill-waterloo',
    'focus-within:border-green focus-within:fill-green hover:border-green',
    disabled && 'bg-athens text-mystic hover:border-porcelain',
    className,
  )}
>
  {#if icon}
    <Svg id={icon} w={iconSize} class="pointer-events-none absolute left-3"></Svg>
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
      '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
      icon && 'pl-8',
      inputClass,
    )}
  />

  {#if isNumber && as === 'input'}
    {@const inputRef = ref as Extract<TProps, { as: 'input' }>['ref']}

    <section
      class={cn(
        'absolute right-[9px] flex h-full flex-col justify-center gap-[3px] bg-[inherit]',
        'opacity-0 transition-opacity hover:fill-waterloo group-hover:opacity-100',
      )}
    >
      {@render spinButton({ onclick: () => inputRef?.$?.stepUp() })}
      {@render spinButton({ onclick: () => inputRef?.$?.stepDown(), class: '[&>svg]:rotate-180' })}
    </section>
  {/if}

  {@render right?.()}
</div>

{#snippet spinButton({
  onclick,
  class: className,
}: {
  onclick: HTMLButtonAttributes['onclick']
  class?: string
})}
  <Button
    variant="plain"
    size="auto"
    icon="triangle"
    iconSize="6"
    iconHeight="4"
    {onclick}
    class={cn(
      'w-2.5 justify-center transition-[transform,fill]',
      'hover:scale-150 hover:fill-black',
      'group-focus-within:fill-waterloo group-focus-within:hover:fill-black',
      className,
    )}
  />
{/snippet}
