<script lang="ts">
  import { customerData$ } from '@/stores/user'
  import { halloweenData$ } from '@/stores/halloween'
  import { showHalloweenPopup } from './HalloweenPopup.svelte'

  let className = ''
  export { className as class }
  let label = ''

  $: ({ isLoggedIn } = $customerData$)
  $: ({ pages } = $halloweenData$)
  $: pages, setLabel()

  function setLabel() {
    switch (pages.length) {
      case 1:
      case 2: {
        label = 'Keep Haunting!'
        break
      }
      default: {
        label = 'Get a discount'
        break
      }
    }
  }
</script>

{#if isLoggedIn}
  <button class="btn-1 btn--orange row v-center {className}" on:click={showHalloweenPopup}>
    <span class="body-2">🎃</span>
    {label}
  </button>
{/if}

<style>
  .btn-1 {
    padding: 4px 12px;
    gap: 6px;
  }
</style>
