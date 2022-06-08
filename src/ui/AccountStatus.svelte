<script>
  import Svg from '@/ui/Svg/svelte'
  import { getSanbaseSubscription, getTrialDaysLeft } from '@/utils/subscription'
  import { customerData$ } from '@/stores/user'

  export let currentUser

  $: subscription = currentUser && getSanbaseSubscription(currentUser.subscriptions)
  $: trialDaysLeft = subscription && getTrialDaysLeft(subscription)
  $: trialPostfix = trialDaysLeft ? ` Trial (${trialDaysLeft})` : ''
</script>

{#if currentUser}
  {#if subscription}
    <a
      href="https://academy.santiment.net/products-and-plans/sanbase-pro-features/"
      class="pro btn-1 btn--s caption row v-center">
      <Svg id="crown" w="13" h="10" class="mrg-s mrg--r" />
      Pro{trialPostfix}</a>
  {:else}
    <div class="caption c-waterloo">
      <a
        href="https://app.santiment.net/pricing"
        class="btn-1 btn--orange"
        on:click={window.__onLinkClick}>Upgrade</a>
    </div>
  {/if}
{:else}
  <a href="/login" class="btn-1" on:click={window.__onLinkClick}>Sign up</a>
{/if}

<style>
  .pro {
    --bg: var(--orange-light-1);
    --bg-hover: var(--orange-light-1);
    --color: var(--orange);
    --color-hover: var(--orange-hover);
  }
</style>
