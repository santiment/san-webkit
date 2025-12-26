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
    'relative flex h-5 w-9 min-w-9 items-center rounded-full bg-casper hover:bg-waterloo data-[state=checked]:bg-green data-[state=checked]:hover:bg-green-hover md:h-6 md:w-[42px]',
    className,
  )}
  {...rest}
>
  <Switch.Thumb
    class="flex size-[14px] rounded-full bg-white transition-transform will-change-transform backface-hidden data-[state=checked]:translate-x-[15.5px] md:size-4"
  />

  <Svg
    {...currentIcon}
    style={cn(isDesktop && 'margin: 0 var(--_margin);', !checked && 'right: var(--_margin)')}
    class={cn('absolute fill-waterloo', checked && 'fill-white')}
  />
</Switch.Root>
