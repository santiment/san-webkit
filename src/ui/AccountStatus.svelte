<script lang="ts" context="module">
  export enum AccountStatusType {
    First,
  }
</script>

<script lang="ts">
  import type { CustomerData } from '@/stores/user'
  import { PlanName } from '@/utils/plans'

  export let currentUser
  export let variant = AccountStatusType.First
  export let subscription: Pick<SAN.Subscription, 'plan'>
  export let customerData = {} as Pick<CustomerData, 'isEligibleForTrial' | 'annualDiscount'>

  $: ({ isEligibleForTrial, annualDiscount } = customerData)
  $: annualDiscountPercent = annualDiscount?.isEligible && annualDiscount.discount?.percentOff
  $: subscriptionPlan = subscription?.plan.name
  $: userPlanName = PlanName[subscriptionPlan] || subscriptionPlan
</script>

{#if currentUser}
  {#if annualDiscountPercent}
    <a
      href="https://app.santiment.net/pricing"
      class="btn-2 btn-1 btn--orange mrg-m mrg--r"
      on:click={window.__onLinkClick}
      >Special offer! {annualDiscountPercent}% OFF
    </a>
  {/if}

  {#if userPlanName}
    <a
      href="https://academy.santiment.net/products-and-plans/sanbase-pro-features/"
      class="pro btn-1 btn--s"
    >
      {userPlanName}
    </a>
  {:else}
    <a
      href="https://app.santiment.net/pricing"
      class="btn-1 btn--orange"
      on:click={window.__onLinkClick}
    >
      {#if isEligibleForTrial}
        {variant === AccountStatusType.First ? 'Start Free 14-day Trial' : 'Upgrade'}
      {:else}
        Upgrade
      {/if}
    </a>
  {/if}
{:else}
  <a href="/login" class="btn-1" on:click={window.__onLinkClick}>Sign up</a>
{/if}

<style>
  .pro {
    text-transform: uppercase;
    --bg: var(--orange-light-1);
    --bg-hover: var(--orange-light-1);
    --color: var(--orange);
    --color-hover: var(--orange-hover);
  }
</style>
