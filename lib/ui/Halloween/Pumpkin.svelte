<script lang="ts">
  import { customerData$ } from '@/stores/user'
  import { halloweenData$ } from '@/stores/halloween'
  import { updatePumpkins } from './flow'
  import { showHalloweenPopup } from './Dialog.svelte'
  import FlamePumpkin from './FlamePumpkin.svelte'

  export let showOn = ''

  $: ({ isLoggedIn } = $customerData$)

  function onPumpkinClick() {
    updatePumpkins(showOn).then(() => showHalloweenPopup({ isClickawayDisabled: true }))
  }
</script>

{#if isLoggedIn && !$halloweenData$.pages.has(showOn)}
  <FlamePumpkin class="btn" small on:click={onPumpkinClick} />
{/if}
