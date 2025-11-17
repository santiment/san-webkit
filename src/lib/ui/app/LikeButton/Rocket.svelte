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
  <Svg id="rocket" w="13.5" h="18" />

  <div
    class="absolute bottom-0 left-[6.5px] opacity-0 group-hover:animate-[fire_0.4s_infinite_alternate] group-disabled:animate-none"
  >
    <div class="absolute -bottom-[3px] h-[3px] w-[1px] -translate-x-[3.5px] rotate-[30deg]"></div>
    <div class="absolute -bottom-[3px] h-[3px] w-[1px]"></div>
    <div class="absolute -bottom-[3px] h-[3px] w-[1px] translate-x-[3.5px] -rotate-[30deg]"></div>
  </div>
</div>

<style lang="postcss">
  :global {
    @keyframes fire {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  }
</style>
