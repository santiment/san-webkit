<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    rocketNode: HTMLElement | undefined
  }

  let { rocketNode = $bindable(undefined), class: className }: TProps = $props()
</script>

<div
  bind:this={rocketNode}
  class={cn(
    'relative flex justify-center group-hover:animate-shake group-disabled:animate-none',
    className,
  )}
>
  <Svg id="rocket-active" h="20" />
</div>
