<script lang="ts">
  import { Switch } from 'bits-ui'
  import { Tween } from 'svelte/motion'

  import { useUiCtx } from '../../../ctx/ui/index.svelte.js'
  import { sleep } from '../../../utils/index.js'
  import Svg from '../../core/Svg/index.js'
  import { cn } from '../../utils/index.js'

  type TProps = {
    class?: string
  }

  const { class: className }: TProps = $props()

  const { ui } = useUiCtx()

  const ANIMATION_DURATION = 200
  const opacity = new Tween(1, { duration: ANIMATION_DURATION / 2 })

  let checked = $derived(ui.$$.isNightMode)
  let internalNightMode = $derived(ui.$$.isNightMode)

  async function onCheckedChange(value: boolean) {
    await opacity.set(0)
    internalNightMode = value
    await opacity.set(1)

    await sleep(200)
    ui.toggleNightMode()
  }
</script>

<Switch.Root
  bind:checked
  class={cn(
    'flex w-[72px] select-none items-center justify-between rounded-full bg-athens-day px-2.5 py-1.5 transition-colors hover:bg-porcelain-day',
    internalNightMode && 'bg-porcelain-night hover:bg-mystic-night',
    internalNightMode !== ui.$$.isNightMode && 'pointer-events-none',
    className,
  )}
  {onCheckedChange}
>
  <span
    style:transition-duration="{ANIMATION_DURATION}ms"
    style:opacity={opacity.current}
    class={cn(
      'text-fiord-day transition-transform',
      checked && 'translate-x-5',
      internalNightMode && 'text-fiord-night',
    )}
  >
    {internalNightMode ? 'Night' : 'Day'}
  </span>

  <Switch.Thumb
    style="opacity: {opacity.current};transition-duration: {ANIMATION_DURATION}ms"
    class={cn('transition-transform', checked && '-translate-x-[36px]')}
  >
    <Svg id={internalNightMode ? 'moon' : 'sun'} illus w="20" />
  </Switch.Thumb>
</Switch.Root>
