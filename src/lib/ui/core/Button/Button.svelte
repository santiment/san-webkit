<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
  import type { Action } from 'svelte/action'
  import type { SS } from 'svelte-runes'

  import { tv } from 'tailwind-variants'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/index.js'

  type Props = HTMLButtonAttributes & {
    as?: 'button' | 'label' | 'div'
    ref?: SS<undefined | null | HTMLElement>
    href?: string
    icon?: string
    class?: string
    variant?: 'fill' | 'border' | 'ghost' | 'title' | 'link'
    withPointer?: boolean
    rounded?: boolean
    iconSize?: number | string
    iconHeight?: number | string
    iconOnRight?: boolean
    explanation?: string
    size?: 'lg' | 'md' | 'sm' | 'xs'
    loading?: boolean
    target?: HTMLAnchorAttributes['target']

    action?: Action
    actionArgs?: any

    children?: Snippet
  }

  let {
    ref = { $: null },
    class: className,

    as = 'button',
    variant = 'fill',
    size = 'md',
    iconOnRight = false,
    rounded = false,
    loading = false,
    withPointer = false,

    icon,
    iconHeight,
    iconSize = size === 'md' || size === 'lg' ? 16 : 12,

    explanation,
    children,

    action = () => {},
    actionArgs,

    ...rest
  }: Props = $props()

  const button = tv({
    base: 'flex justify-center items-center cursor-pointer gap-2 rounded-md',
    variants: {
      children: { false: '' },
      icon: { false: '' },
      variant: {
        fill: 'bg-[var(--accent,var(--green))] px-5 fill-white-day text-white-day hover:bg-[var(--accent-hover,var(--green-hover))]',
        border: 'border bg-white px-2.5 fill-waterloo hover:bg-athens',
        ghost: 'px-2.5 fill-waterloo hover:bg-athens',
        title: 'hover:underline',
        link: 'text-green fill-green hover:underline',
      },
      iconOnRight: { true: 'flex-row-reverse justify-end' },
      explanation: { true: 'expl-tooltip' },
      disabled: { true: 'cursor-not-allowed' },
      rounded: { true: 'rounded-full' },
      size: {
        md: 'h-8 py-[5px]',
        lg: 'h-10 py-1.5 text-base',
        sm: 'p-0',
        xs: 'p-0',
      },
      loading: { true: 'loading' },
    },

    compoundVariants: [
      {
        variant: ['fill', 'border', 'ghost'],
        disabled: true,
        class: 'text-mystic fill-mystic bg-athens hover:bg-athens',
      },
      {
        variant: ['title', 'link'],
        disabled: true,
        class: 'text-mystic fill-mystic hover:no-underline',
      },
      {
        children: false,
        icon: true,
        size: ['lg', 'md'],
        class: 'size-8 px-0',
      },
      {
        children: false,
        icon: true,
        size: 'sm',
        class: 'size-6 px-0',
      },
      {
        children: false,
        icon: true,
        size: 'xs',
        class: 'size-5 px-0',
      },
    ],
  })

  function getLoadingColor(variant: Props['variant']) {
    switch (variant) {
      case 'fill':
        return 'white'
      case 'link':
        return 'var(--green)'
      default:
        return 'var(--black)'
    }
  }
</script>

<svelte:element
  this={rest.href ? 'a' : as}
  bind:this={ref.$}
  aria-label={explanation}
  style:--loading-color={getLoadingColor(variant)}
  style:--loading-size="2px"
  {...rest}
  use:action={actionArgs}
  class={cn(
    button({
      variant,
      iconOnRight,
      size,
      loading,
      rounded,
      explanation: !!explanation,
      disabled: !!rest.disabled,
      children: !!children,
      icon: !!icon,
    }),

    className,
  )}
>
  {#if icon}
    <Svg id={icon} w={iconSize} h={iconHeight}></Svg>
  {/if}

  {#if children}
    {@render children()}
  {/if}

  {#if withPointer}
    <Svg id="pointer" w="10"></Svg>
  {/if}
</svelte:element>
