<script lang="ts">
  import { Switch, type SwitchRootProps } from 'bits-ui'

  import { cn } from '../../utils/index.js'

  import Svg from '../Svg/index.js'

  let {
    icon = { active: { id: 'checkmark', w: 8, h: 6 }, inactive: { id: 'cross', w: 7 } },
    class: className,
    ...rest
  }: SwitchRootProps & {
    class?: string
    icon?: {
      active: { id: string; w: number; h?: number }
      inactive: { id: string; w: number; h?: number }
    }
  } = $props()
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
    class="flex size-[14px] rounded-full bg-white transition-transform data-[state=checked]:translate-x-[16px]"
  />

  {#if icon}
    <Svg
      style={cn('margin: 0 var(--_margin);', !rest.checked && 'right: var(--_margin)')}
      {...icon[rest.checked ? 'active' : 'inactive']}
      class="absolute fill-white"
    ></Svg>
  {/if}
</Switch.Root>
