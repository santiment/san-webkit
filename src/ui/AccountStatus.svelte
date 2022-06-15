<script lang="ts" context="module">
  export enum AccountDropdownVariant {
    Version1 = 1,
    Version2 = 2,
  }
</script>

<script>
  import { customerData$ } from '@/stores/user'
  import { subscription$ } from '@/stores/subscription'
  import { PlanName } from '@/utils/plans'

  export let currentUser
  export let variant = AccountDropdownVariant.Version1

  $: ({ isEligibleForTrial, annualDiscount } = $customerData$)
  $: specialOfferPercent =
    (annualDiscount &&
      annualDiscount.isEligible &&
      annualDiscount.discount &&
      annualDiscount.discount.percentOff) ||
    0
  $: subscription = $subscription$
  $: currentPlanName = subscription && (PlanName[subscription.plan.name] || subscription.plan.name)
</script>

{#if currentUser}
  {#if currentPlanName && currentPlanName.toUpperCase().includes('PRO')}
    <div class="row v-center">
      {#if specialOfferPercent > 0}
        <a
          href="https://app.santiment.net/pricing"
          class="btn-2 btn-1 btn--orange mrg-m mrg--r"
          on:click={window.__onLinkClick}
          >Special offer! {specialOfferPercent}% OFF
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
        on:click={window.__onLinkClick}
        >{variant === AccountDropdownVariant.Version1 ? 'Start Free 14-day Trial' : 'Upgrade'}</a>
    </div>
  {:else if specialOfferPercent > 0}
    {#if variant === AccountDropdownVariant.Version1}
      <div class="caption c-waterloo">
        <a
          href="https://app.santiment.net/pricing"
          class="btn-1 btn-2 btn--orange"
          on:click={window.__onLinkClick}>Special offer! {specialOfferPercent}% OFF</a>
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
