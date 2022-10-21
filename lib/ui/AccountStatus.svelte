<script context="module">export var AccountStatusType;

(function (AccountStatusType) {
  AccountStatusType[AccountStatusType["First"] = 0] = "First";
  AccountStatusType[AccountStatusType["Second"] = 1] = "Second";
})(AccountStatusType || (AccountStatusType = {}));</script>

<script>import { getUserSubscriptionInfo } from './../utils/subscription';
export let currentUser;
export let variant = AccountStatusType.First;
export let subscription;
export let customerData = {};

$: ({
  annualDiscountPercent,
  userPlanName,
  trialDaysLeft,
  isEligibleForTrial
} = getUserSubscriptionInfo(customerData, subscription));</script>

{#if currentUser}
  {#if annualDiscountPercent && variant !== AccountStatusType.Second}
    <a
      href="https://app.santiment.net/pricing"
      class="btn-2 btn-1 btn--orange mrg-m mrg--r"
      on:click={window.__onLinkClick}
      >Special offer! {annualDiscountPercent}% OFF
    </a>
  {/if}

  {#if userPlanName}
    {#if trialDaysLeft < 1}
      <a
        href="https://academy.santiment.net/products-and-plans/sanbase-pro-features/"
        class="pro btn-1 btn--s">
        {userPlanName}
      </a>
    {/if}
  {:else}
    <a
      href="https://app.santiment.net/pricing"
      class="btn-1 btn--orange"
      on:click={window.__onLinkClick}>
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
