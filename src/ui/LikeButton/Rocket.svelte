<script lang="ts">
  import Svg from '../Svg.svelte'

  export let rocketNode = undefined
</script>

<div bind:this={rocketNode} class="rocket row h-center ignited">
  <Svg id="rocket" w="13.5" h="18" />
  <div class="fire" />
  <div class="fire" />
  <div class="fire" />
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
  }

  .fire {
    position: absolute;
    bottom: -3px;
    width: 1px;
    height: 3px;
    background: var(--green);
    opacity: var(--opacity, 0);
    transition: opacity 0.3s;
  }
  .fire:first-of-type {
    transform: translateX(-3.5px) rotate(30deg);
  }
  .fire:last-of-type {
    transform: translateX(3.5px) rotate(-30deg);
  }

  @keyframes fire {
    from {
      --opacity: 1;
    }
    to {
      --opacity: 0;
    }
  }
</style>
