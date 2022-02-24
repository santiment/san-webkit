<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  export let rocketNode = undefined
</script>

<div bind:this={rocketNode} class="rocket row h-center">
  <Svg id="rocket" w="13.5" h="18" />
  {#if process.browser}
    <div class="ignited">
      <div class="fire" />
      <div class="fire" />
      <div class="fire" />
    </div>
  {/if}
</div>

<style>
  .rocket {
    transform: translate(var(--x, 0), var(--y, 0));
    transition: transform 150ms;
    margin-right: 9px;
    position: relative;
  }
  .ignited {
    animation: fire 0.4s;
    position: absolute;
    bottom: 0;
    opacity: 0;
    left: 6.5px;
  }

  .fire {
    position: absolute;
    bottom: -3px;
    width: 1px;
    height: 3px;
    background: var(--green);
  }
  .fire:first-of-type {
    transform: translateX(-3.5px) rotate(30deg);
  }
  .fire:last-of-type {
    transform: translateX(3.5px) rotate(-30deg);
  }

  @keyframes fire {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
