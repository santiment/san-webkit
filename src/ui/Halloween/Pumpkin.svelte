<script lang="ts">
  import { customerData$ } from '@/stores/user'
  import { halloweenData$ } from '@/stores/halloween'
  import { updatePumpkins } from '@/ui/Halloween/utils'
  import { showHalloweenPopup } from './HalloweenPopup.svelte'

  let className = ''
  export { className as class }
  let label = ''
  export let showOn = ''

  $: ({ isLoggedIn } = $customerData$)
  $: ({ pages } = $halloweenData$)

  function onPumpkinClick() {
    updatePumpkins(showOn).then(showHalloweenPopup)
  }
</script>

{#if isLoggedIn && !pages.includes(showOn)}
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
