<script lang="ts">
  import { Switch, type SwitchRootProps } from 'bits-ui'

  import { cn } from '$ui/utils/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  import Svg from '../Svg/index.js'

  type Icon = { id: string; w?: number; h?: number }

  let {
    icon,
    checked = $bindable(false),
    class: className,
    disabled,
    ...rest
  }: SwitchRootProps & {
    class?: string
    icon?: {
      active?: Icon
      inactive?: Icon
    }
  } = $props()

  const { device } = useDeviceCtx()

  const { isDesktop } = $derived(device.$)
  const activeIcon = $derived(icon?.active ?? { id: 'checkmark' })
  const inactiveIcon = $derived(icon?.inactive ?? { id: 'cross' })

  const currentIcon = $derived(checked ? activeIcon : inactiveIcon)

  const switchWidth = $derived(isDesktop ? 36 : 42)
  const thumbPadding = $derived(isDesktop ? 3 : 6)
  const thumbSize = $derived(isDesktop ? 14 : 16)

  const thumbX = $derived(checked ? switchWidth - thumbPadding - thumbSize : thumbPadding)
</script>

<Switch.Root
  bind:checked
  --width="{switchWidth}px"
  class={cn(
    'relative flex items-center rounded-full bg-casper hover:bg-waterloo',
    'h-5 w-[var(--width)] min-w-[var(--width)] md:h-6',
    checked && 'bg-green hover:bg-green-hover',
    disabled && 'bg-porcelain hover:bg-porcelain',
    className,
  )}
  {disabled}
  {...rest}
>
  <Switch.Thumb
    --size="{thumbSize}px"
    --translate-x="{thumbX}px"
    class={cn(
      'absolute left-0 z-10 flex rounded-full bg-porcelain transition-transform will-change-transform',
      'size-[var(--size)] translate-x-[var(--translate-x)]',
      !checked && !disabled && 'dark:bg-mystic',
      checked ? 'bg-green-light-2-day' : '',
      disabled && 'bg-whale',
      disabled && checked && 'bg-whale',
    )}
  />

  <Svg
    w={12}
    {...currentIcon}
    class={cn(
      'absolute z-0 fill-waterloo-day',
      checked && 'fill-white-day hover:fill-athens-day',
      checked ? 'left-[5px]' : 'right-[5px]',
      disabled && checked && 'fill-white hover:fill-white',
    )}
  />
</Switch.Root>
