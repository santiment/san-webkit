<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
  import type { Action } from 'svelte/action'
  import type { SS } from 'svelte-runes'

  import { tv, type VariantProps } from 'tailwind-variants'

  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import { cn } from '$ui/utils/index.js'
  import Svg, { type TSvgId, checkSvgIdAvailable } from '$ui/core/Svg/index.js'

  type TButtonVariants = VariantProps<typeof button>

  type TProps = HTMLButtonAttributes &
    Omit<TButtonVariants, 'icon' | 'explanation' | 'children'> & {
      as?: 'button' | 'label' | 'div'
      for?: string
      ref?: SS<undefined | null | HTMLElement>
      href?: string
      class?: string
      icon?: TSvgId
      iconSize?: number | string
      iconHeight?: number | string
      iconOnRight?: boolean
      iconIllus?: boolean
      explanation?: string
      loading?: boolean
      dropdown?: boolean
      target?: HTMLAnchorAttributes['target']

      action?: Action
      actionArgs?: any

      children?: Snippet
    }

  let {
    ref = { $: null },
    class: className,

    as = 'button',
    variant = 'ghost',
    accent = 'green',
    size: initialSize,
    iconOnRight = false,
    rounded = false,
    circle = false,
    dropdown = false,
    loading = false,
    disabled,

    icon,
    iconHeight,
    iconSize: initialIconSize,
    iconIllus = false,

    explanation,
    children,

    action = () => {},
    actionArgs,

    ...rest
  }: TProps = $props()

  const { device } = useDeviceCtx()

  const isPhone = $derived(device.$.isPhone)
  const size = $derived(initialSize ?? (isPhone ? 'lg' : 'md'))

  const { icon: sizedIcon, size: autoIconSize } = $derived.by(() => {
    if (!icon) return {}
    if (size === 'md' || size === 'lg') return { icon, size: undefined }

    const smallId = `${icon}-12`
    const isSmallIconAvailable = checkSvgIdAvailable(`${icon}-12`)

    if (isSmallIconAvailable) return { icon: smallId, size: undefined }

    return { icon, size: 12 }
  })

  const iconSize = $derived(
    initialIconSize === 'auto' || !initialIconSize ? autoIconSize : initialIconSize,
  )

  const button = tv({
    base: 'flex items-center cursor-pointer gap-2 rounded-md',
    variants: {
      children: { false: '' },
      icon: { false: '' },
      accent: { green: '', blue: '', orange: '', custom: '' },
      variant: {
        fill: 'px-5 fill-white-day text-white-day',
        border: 'border bg-transparent px-2.5 fill-waterloo hover:bg-[var(--ghost-active-bg)]',
        ghost: 'px-2.5 fill-waterloo hover:bg-[var(--ghost-active-bg)]',
        title: 'rounded-none hover:underline',
        link: 'rounded-none text-green fill-green hover:underline',
        plain: 'rounded-none',
      },
      iconOnRight: { true: 'flex-row-reverse justify-end' },
      explanation: { true: 'expl-tooltip' },
      disabled: { true: 'cursor-not-allowed' },
      rounded: { true: 'rounded-[14px]' },
      circle: { true: 'rounded-full' },
      size: {
        auto: 'p-0',
        md: 'h-8 py-[5px]',
        lg: 'h-10 py-1.5 text-base',
        sm: 'p-0',
        xs: 'p-0',
      },
      loading: { true: 'loading' },
    },

    compoundVariants: [
      {
        variant: 'fill',
        accent: 'green',
        class: 'bg-green hover:bg-green-hover',
      },
      {
        variant: 'fill',
        accent: 'blue',
        class: 'bg-blue hover:bg-blue-hover',
      },
      {
        variant: 'fill',
        accent: 'orange',
        class: 'bg-orange hover:bg-orange-hover',
      },
      {
        variant: 'fill',
        accent: 'custom',
        class: 'bg-[var(--accent,var(--green))] hover:bg-[var(--accent-hover,var(--green-hover))]',
      },
      {
        variant: ['fill', 'border'],
        disabled: true,
        class:
          'text-mystic fill-mystic bg-[var(--ghost-active-bg)] hover:bg-[var(--ghost-active-bg)]',
      },
      {
        variant: 'ghost',
        disabled: true,
        class: 'text-mystic fill-mystic bg-transparent hover:bg-transparent',
      },
      {
        variant: ['title', 'link'],
        disabled: true,
        class: 'text-mystic fill-mystic hover:no-underline',
      },
      {
        children: false,
        icon: true,
        size: ['lg'],
        class: 'justify-center size-10 px-0',
      },
      {
        children: false,
        icon: true,
        rounded: false,
        size: ['md'],
        class: 'justify-center size-8 px-0',
      },
      {
        children: false,
        icon: true,
        rounded: true,
        class: 'justify-center h-8 w-auto px-[9px]',
      },
      {
        children: false,
        icon: true,
        size: 'sm',
        class: 'justify-center size-6 px-0',
      },
      {
        children: false,
        icon: true,
        size: 'xs',
        class: 'justify-center size-5 px-0',
      },
    ],
  })

  function getLoadingColor(variant: TProps['variant']) {
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
  style:--ghost-active-bg="var(--active-ghost-button-bg, var(--athens))"
  style:--loading-color={getLoadingColor(variant)}
  style:--loading-size="2px"
  type={rest.href ? undefined : 'button'}
  disabled={disabled || undefined}
  {...rest}
  use:action={actionArgs}
  class={cn(
    'group/button',
    button({
      variant,
      accent,
      iconOnRight,
      size,
      loading,
      rounded,
      circle,
      explanation: !!explanation,
      disabled: !!disabled,
      children: !!children,
      icon: !!icon,
    }),

    className,
  )}
>
  {#if sizedIcon}
    <Svg id={sizedIcon} w={iconSize} h={iconHeight} illus={iconIllus} />
  {/if}

  {#if children}
    {@render children()}
  {/if}

  {#if dropdown}
    <div class="ml-auto pl-0.5">
      <div
        class={cn(
          'flex size-4 items-center justify-center rounded transition-colors',
          !loading && 'group-data-[state="open"]/button:bg-[var(--ghost-active-bg)]',
        )}
      >
        <Svg
          id="arrow-down"
          w="8"
          class={cn('transition-transform', 'group-data-[state="open"]/button:rotate-180')}
        />
      </div>
    </div>
  {/if}
</svelte:element>
