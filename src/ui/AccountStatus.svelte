<script lang="ts" context="module">
  export enum AccountStatusType {
    First,
    Second,
  }
</script>

<script lang="ts">
  import type { CustomerData } from '@/stores/user'

  import { SANBASE_ORIGIN } from '@/utils/links'
  import { getUserSubscriptionInfo } from '@/utils/subscription'

  export let currentUser
  export let variant = AccountStatusType.First
  export let subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd'>
  export let customerData = {} as Pick<CustomerData, 'isEligibleForTrial' | 'annualDiscount'>

  $: ({ annualDiscountPercent, userPlanName, trialDaysLeft, isEligibleForTrial, isIncomplete } =
    getUserSubscriptionInfo(customerData, subscription))
</script>

{#if currentUser}
  {#if annualDiscountPercent && variant !== AccountStatusType.Second}
    <a
      href="{SANBASE_ORIGIN}/pricing"
      class="btn-2 btn-1 btn--orange mrg-m mrg--r"
      on:click={window.__onLinkClick}
      >Special offer! {annualDiscountPercent}% OFF
    </a>
  {/if}

  {#if userPlanName}
    {#if trialDaysLeft < 1}
      <a
        href="https://academy.santiment.net/products-and-plans/sanbase-pro-features/"
        class="pro btn-1 btn--s"
      >
        {userPlanName}
        {isIncomplete ? ' (incomplete)' : ''}
      </a>
    {/if}
  {:else}
    <a href="{SANBASE_ORIGIN}/pricing" class="btn-1 btn--orange" on:click={window.__onLinkClick}>
      {#if isEligibleForTrial && variant === AccountStatusType.First}
        Start Free 14-day Trial
      {:else}
        Upgrade
      {/if}
    </a>
  {/if}
{:else}
  <a href="/sign-up" class="btn-1" on:click={window.__onLinkClick}>Sign up</a>
{/if}

<style>
  .pro {
    text-transform: uppercase;
    --bg: var(--orange-light-1);
    --bg-hover: var(--orange-light-2);
    --color: var(--orange);
    --color-hover: var(--orange-hover);
  }
</style>
