<script>
  import { customerData$ } from '@/stores/user'
  import { subscription$ } from '@/stores/subscription'
  import { PlanName } from '@/utils/plans'

  export let currentUser
  export let variant = 0

  $: ({ isEligibleForTrial, annualDiscount } = $customerData$)
  $: trialSpecialOfferPercent =
    annualDiscount  && annualDiscount.isEligible && annualDiscount.discount.percentOff 
  $: subscription = $subscription$
  $: currentPlanName = subscription && (PlanName[subscription.plan.name] || subscription.plan.name)
</script>

{#if currentUser}
  {#if currentPlanName && currentPlanName.toUpperCase().includes('PRO')}
    <div class="row v-center">
      {#if trialSpecialOfferPercent > 0}
        <a
          href="https://app.santiment.net/pricing"
          class="btn-1 btn-2 btn--orange mrg--r mrg-m"
          on:click={window.__onLinkClick}
          >Special offer! {trialSpecialOfferPercent}% OFF
        </a>
      {/if}
      <a
        href="https://academy.santiment.net/products-and-plans/sanbase-pro-features/"
        class="pro btn-1 btn--s caption row v-center">
        {currentPlanName}
      </a>
    </div>
  {:else if isEligibleForTrial}
    <div class="caption c-waterloo">
      <a
        href="https://app.santiment.net/pricing"
        class="btn-1 btn--orange"
        on:click={window.__onLinkClick}>{variant === 0 ? 'Start Free 14-day Trial' : 'Upgrade'}</a>
    </div>
  {:else if trialSpecialOfferPercent > 0}
    {#if variant === 0}
      <div class="caption c-waterloo">
        <a
          href="https://app.santiment.net/pricing"
          class="btn-1 btn-2 btn--orange"
          on:click={window.__onLinkClick}>Special offer! {trialSpecialOfferPercent}% OFF</a>
      </div>
    {/if}
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
