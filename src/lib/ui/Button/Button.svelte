<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLButtonAttributes } from 'svelte/elements'
  import type { Action } from 'svelte/action'

  import { tv } from 'tailwind-variants'
  import { cn } from '../utils'
  import Svg from '../Svg'

  let {
    icon,
    variant,
    children,
    class: className,
    iconSize = 16,
    iconHeight,
    iconOnRight = false,
    explanation,

    action = () => {},
    actionArgs,

    ...rest
  }: HTMLButtonAttributes & {
    href?: string
    icon?: string
    class?: string
    variant?: 'fill' | 'border' | 'ghost'
    iconSize?: number | string
    iconHeight?: number | string
    iconOnRight?: boolean
    explanation?: string

    action?: Action
    actionArgs?: any

    children?: Snippet
  } = $props()

  const button = tv({
    base: 'flex cursor-pointer items-center gap-2',
    variants: {
      children: { false: '' },
      variant: {
        fill: 'bg-green fill-white-day text-white-day hover:bg-green-hover',
        border: 'border bg-white px-[19px] py-[5px]',
        ghost: 'px-3 hover:bg-athens hover:text-green',
      },
      iconOnRight: { true: 'flex-row-reverse' },
      explanation: { true: 'expl-tooltip' },
      disabled: { true: 'cursor-not-allowed !fill-mystic !text-mystic ' },
    },
    compoundVariants: [
      { variant: undefined, class: 'hover:text-green hover:fill-green' },
      {
        variant: 'border',
        disabled: false,
        class: 'hover:border-green hover:fill-green',
      },
    ],
  })
</script>

<svelte:element
  this={rest.href ? 'a' : 'button'}
  aria-label={explanation}
  {...rest}
  use:action={actionArgs}
  class={cn(
    variant && 'rounded-md px-5 py-1.5',

    button({
      variant,
      iconOnRight,
      explanation: !!explanation,
      disabled: !!rest.disabled,
      children: !!children,
    }),

    variant && icon && 'px-3',
    variant && rest.disabled && '!bg-athens',

    !children && icon && 'center size-8 p-0',

    className,
  )}
>
  {#if icon}
    <Svg id={icon} w={iconSize} h={iconHeight}></Svg>
  {/if}

  {#if children}
    {@render children()}
  {/if}
</svelte:element>
