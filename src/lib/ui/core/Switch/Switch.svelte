<script lang="ts">
  import { Switch, type SwitchRootProps } from 'bits-ui'

  import { cn } from '$ui/utils/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  import Svg from '../Svg/index.js'

  type Icon = { id: string; w: number; h?: number }

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
  const activeIcon = $derived(icon?.active ?? { id: 'checkmark', w: 8, h: 6 })
  const inactiveIcon = $derived(icon?.inactive ?? { id: 'cross', w: isDesktop ? 7 : 8 })

  const currentIcon = $derived(checked ? activeIcon : inactiveIcon)
</script>

<Switch.Root
  bind:checked
  style="--_margin:{isDesktop ? 3 : 6}px;padding: 0 var(--_margin);"
  class={cn(
    'relative flex h-5 w-9 min-w-9 items-center rounded-full bg-casper hover:bg-waterloo md:h-6 md:w-[42px]',
    checked && 'bg-green hover:bg-green-hover',
    disabled && 'bg-porcelain hover:bg-porcelain',
    className,
  )}
  {disabled}
  {...rest}
>
  <Switch.Thumb
    class={cn(
      'flex size-[14px] rounded-full bg-porcelain transition-transform will-change-transform md:size-4',
      !checked && !disabled && 'dark:bg-mystic',
      checked && 'translate-x-4 bg-green-light-2-day',
      disabled && 'bg-whale',
      disabled && checked && 'bg-whale',
    )}
  />

  <Svg
    {...currentIcon}
    style={cn(isDesktop && 'margin: 0 var(--_margin);', !checked && 'right: var(--_margin)')}
    class={cn(
      'absolute fill-waterloo-day',
      checked && 'fill-white-day hover:fill-athens-day',
      disabled && checked && 'fill-white hover:fill-white',
    )}
  />
</Switch.Root>
