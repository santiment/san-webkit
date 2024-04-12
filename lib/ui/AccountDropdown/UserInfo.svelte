<script>import { SANBASE_ORIGIN } from './../../utils/links';
import { getCustomer$Ctx } from './../../stores/customer';
import ProfileNames from './../../ui/Profile/Names.svelte';
import { AccountStatusType } from './../../ui/AccountStatus.svelte';
export let user;
export let variant = AccountStatusType.First;
export let isShowingFollowers = true;
const { customer$ } = getCustomer$Ctx();
$: customer = $customer$;
$: ({ isPro } = customer);
$: buttonLabel = getButtonLabel(customer, variant);
$: note = getNoteText(customer, variant);
$: sanbasePlan = getPlanStatus(customer);
$: href = isPro
    ? 'https://academy.santiment.net/products-and-plans/sanbase-pro-features/'
    : `${SANBASE_ORIGIN}/pricing`;
function getButtonLabel(customer, variant) {
    const { subscription, isEligibleForTrial, trialDaysLeft, planName, annualDiscount } = customer;
    const isTrialPassedwithActivePlan = subscription && !isEligibleForTrial;
    if (variant === AccountStatusType.First && annualDiscount.percent > 0) {
        if (trialDaysLeft > 0)
            return `Get ${annualDiscount.percent}% OFF`;
        if (isTrialPassedwithActivePlan)
            return `Get ${annualDiscount.percent}% OFF`;
    }
    if (planName)
        return 'Learn about Pro';
    return 'Upgrade';
}
function getNoteText(customer, variant) {
    const { isEligibleForTrial, trialDaysLeft, annualDiscount } = customer;
    if (isEligibleForTrial)
        return 'and get 14-day Pro Trial!';
    if (trialDaysLeft > 0)
        return `Free trial ends in: ${trialDaysLeft} days`;
    if (variant === AccountStatusType.First && annualDiscount.daysLeft > 0) {
        return `Special offer ends in: ${annualDiscount.daysLeft} days`;
    }
}
function getPlanStatus(customer) {
    const { trialDaysLeft, planName, isIncompleteSubscription } = customer;
    if (isIncompleteSubscription) {
        if (planName)
            return `Plan: ${planName} (Incomplete)`;
    }
    if (trialDaysLeft > 0) {
        return `Plan: ${planName}, Free Trial`;
    }
    if (planName)
        return `Plan: ${planName}`;
    return 'Plan: Free';
}
</script>

<section>
  <ProfileNames
    {user}
    followers={isShowingFollowers && user && user.followers ? user.followers.count : undefined}
  />

  <div class="caption c-waterloo">
    <div class="mrg-s mrg--t">
      <!-- {#if subscriptionInfo.userPlanName && !subscriptionInfo.trialDaysLeft} -->
      <!--   SanAPI: Basic plan<br /> -->
      <!-- {/if} -->
      {sanbasePlan}
    </div>
    <a
      class="upgrade btn-1 btn--orange btn--s mrg-m mrg--t v-center body-3"
      {href}
      on:click={window.__onLinkClick}
    >
      {buttonLabel}
    </a>
  </div>
  {#if note}
    <div class="note mrg-xs mrg--t">{note}</div>
  {/if}
</section>

<style>
  section {
    padding: 13px 20px 16px 16px;
    --img-size: 40px;
  }

  a {
    white-space: nowrap;
  }

  .upgrade {
    display: inline-flex;
  }

  .note {
    color: var(--orange-hover);
  }
</style>
