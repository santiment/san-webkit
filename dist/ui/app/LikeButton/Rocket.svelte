<script lang="ts">
  import Svg from '../../core/Svg/index.js'
  import { cn } from '../../utils/index.js'

  type TProps = {
    rocketNode: HTMLElement | undefined
    class: string
  }

  let { rocketNode = $bindable(undefined), class: className = '' }: TProps = $props()
</script>

<div
  bind:this={rocketNode}
  class={cn(
    'group-hover:animate-shake relative mr-[9px] flex justify-center group-disabled:animate-none',
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

<style>
  :global {
    @keyframes shake {
      0% {
        transform: translate(0, -2%);
      }
      10% {
        transform: translate(1%, -1%);
      }
      20% {
        transform: translate(2%, 0);
      }
      30% {
        transform: translate(-4%, 1%);
      }
      40% {
        transform: translate(4%, -1%);
      }
      50% {
        transform: translate(-4%, 0);
      }
      60% {
        transform: translate(4%, 0);
      }
      70% {
        transform: translate(-4%, 0);
      }
      80% {
        transform: translate(2%, -2%);
      }
      90% {
        transform: translate(-1%, -2%);
      }
      100% {
        transform: translate(0, -3%);
      }
    }

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
