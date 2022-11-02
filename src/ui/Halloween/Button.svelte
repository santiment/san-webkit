<script lang="ts">
  import { customerData$ } from '@/stores/user'
  import { halloweenData$ } from '@/stores/halloween'
  import { showHalloweenPopup } from './Dialog.svelte'
  import { getPumpkinCode } from './flow'

  let className = ''
  export { className as class }

  $: ({ isLoggedIn } = $customerData$)
  $: isLoggedIn && !$halloweenData$.code && getPumpkinCode($halloweenData$.pages)
</script>

{#if isLoggedIn}
  <button class="btn-1 btn--orange row v-center {className}" on:click={showHalloweenPopup}>
    <span class="body-2">🎃</span>
    {#if $halloweenData$.code}
      Wow! 54% OFF
    {:else}
      {$halloweenData$.pages.size === 0 ? 'Get a discount' : 'Keep Haunting!'}
    {/if}
  </button>
{/if}

<style>
  .btn-1 {
    padding: 4px 12px;
    gap: 6px;
  }
</style>
