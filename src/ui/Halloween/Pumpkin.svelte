<script lang="ts">
  import { customerData$ } from '@/stores/user'
  import { halloweenData$ } from '@/stores/halloween'
  import { updatePumpkinsCount } from '@/ui/Halloween/utils'
  import { showHalloweenPopup } from './HalloweenPopup.svelte'

  let className = ''
  export { className as class }
  let label = ''
  export let showOn = 0

  $: ({ isLoggedIn } = $customerData$)
  $: ({ count } = $halloweenData$)

  function onPumpkinClick() {
    updatePumpkinsCount(1).then(showHalloweenPopup)
  }
</script>

{#if isLoggedIn && showOn === count}
  <button class="btn row hv-center relative {className}" on:click={onPumpkinClick}>
    <span class="pumpkin">🎃</span>
    <img src="{process.env.MEDIA_PATH}/illus/halloween/flame.svg" alt="Flame" class="flame" />
  </button>
{/if}

<style>
  .flame {
    width: 42px;
    height: 58px;
  }

  .pumpkin {
    z-index: 2;
    position: absolute;
    bottom: 0;
    font-size: 24px;
  }
</style>
