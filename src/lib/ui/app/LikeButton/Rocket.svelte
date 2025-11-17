<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    rocketNode: HTMLElement | undefined
    class: string
  }

  let { rocketNode = $bindable(undefined), class: className = '' }: TProps = $props()
</script>

<div
  bind:this={rocketNode}
  class={cn(
    'relative mr-[9px] flex justify-center group-hover:animate-shake group-disabled:animate-none',
    className,
  )}
>
  <Svg id="rocket-active" />
</div>
