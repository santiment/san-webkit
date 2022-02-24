<script>
  import Svg from '@/ui/Svg/svelte'
  import { getSanbaseSubscription, getTrialDaysLeft } from '@/utils/subscription'

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
    <div class="free caption c-waterloo">
      Free plan
      <a href="https://app.santiment.net/pricing" class="upgrade btn">Upgrade</a>
    </div>
  {/if}
{:else}
  <a href="/login" class="caption c-waterloo">Sign in</a>
{/if}

<style>
  .upgrade {
    position: absolute;
    right: 0;
    bottom: -15px;
    transition: opacity 200ms;
    opacity: 0;
    pointer-events: none;
    --color: var(--orange);
    --color-hover: var(--orange-hover);
  }

  .free {
    position: relative;
    transition: transform 200ms;
  }
  .free:hover {
    transform: translateY(-6px);
  }
  .free:hover .upgrade {
    pointer-events: all;
    opacity: 1;
  }

  .pro {
    --bg: var(--orange-light-1);
    --bg-hover: var(--orange-light-1);
    --color: var(--orange);
    --color-hover: var(--orange-hover);
  }
</style>
