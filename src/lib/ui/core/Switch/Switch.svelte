<script lang="ts">
  import { Switch, type SwitchRootProps } from 'bits-ui'

  import { cn } from '$ui/utils/index.js'

  import Svg from '../Svg/index.js'

  type Icon = { id: string; w: number; h?: number }

  const {
    icon,
    class: className,
    ...rest
  }: SwitchRootProps & {
    class?: string
    icon?: {
      active?: Icon
      inactive?: Icon
    }
  } = $props()

  const activeIcon = $derived(icon?.active ?? { id: 'checkmark', w: 8, h: 6 })
  const inactiveIcon = $derived(icon?.inactive ?? { id: 'cross', w: 7 })

  const currentIcon = $derived(rest.checked ? activeIcon : inactiveIcon)
</script>

<Switch.Root
  {...rest}
  style="--_margin:3px;padding: 0 var(--_margin);"
  class={cn(
    'relative flex h-5 w-9 min-w-9 items-center rounded-[10px] bg-casper hover:bg-waterloo data-[state=checked]:bg-green data-[state=checked]:hover:bg-green-hover',
    className,
  )}
>
  <Switch.Thumb
    class="flex size-[14px] rounded-full bg-white transition-transform will-change-transform backface-hidden data-[state=checked]:translate-x-[15.5px]"
  />

  <Svg
    {...currentIcon}
    style={cn('margin: 0 var(--_margin);', !rest.checked && 'right: var(--_margin)')}
    class="absolute fill-white"
  />
</Switch.Root>
