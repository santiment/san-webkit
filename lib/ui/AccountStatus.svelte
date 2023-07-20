<script lang="ts" context="module">
  export enum AccountStatusType {
    First,
    Second,
  }
</script>

<script lang="ts">
  import { SANBASE_ORIGIN } from '@/utils/links'
  import { getCustomer$Ctx } from '@/stores/customer'

  export let currentUser
  export let variant = AccountStatusType.First

  const { customer$ } = getCustomer$Ctx()

  $: ({ planName, trialDaysLeft, isEligibleForTrial, isIncompleteSubscription, annualDiscount } =
    $customer$)
</script>

{#if currentUser}
  {#if annualDiscount.percent && variant !== AccountStatusType.Second}
    <a
      href="{SANBASE_ORIGIN}/pricing"
      class="btn-2 btn-1 btn--orange mrg-m mrg--r"
      on:click={window.__onLinkClick}
      >Special offer! {annualDiscount.percent}% OFF
    </a>
  {/if}

  {#if planName}
    {#if trialDaysLeft < 1}
      <a
        href="https://academy.santiment.net/products-and-plans/sanbase-pro-features/"
        class="pro btn-1 btn--s"
      >
        {planName}
        {isIncompleteSubscription ? ' (incomplete)' : ''}
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
