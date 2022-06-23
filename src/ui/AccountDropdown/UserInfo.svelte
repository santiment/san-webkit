<script>
  import ProfileNames from '@/ui/Profile/Names.svelte'
  import { AccountStatusType } from '@/ui/AccountStatus.svelte'

  export let user
  export let subscriptionInfo
  export let variant = AccountStatusType.First

  function getButtonLabel(subscriptionInfo, variant) {
    const {
      subscriptionPlan,
      isEligibleForTrial,
      annualDiscountPercent,
      trialDaysLeft,
      userPlanName,
    } = subscriptionInfo

    const isTrialPassedwithActivePlan = subscriptionPlan && !isEligibleForTrial

    if (variant === AccountStatusType.First && annualDiscountPercent > 0) {
      if (trialDaysLeft > 0) return `Get ${annualDiscountPercent}% OFF`
      if (isTrialPassedwithActivePlan) return `Get ${annualDiscountPercent}% OFF`
    }

    if (userPlanName) return 'Learn about Pro'

    return 'Upgrade'
  }

  function getNoteText(subscriptionInfo, variant) {
    const { isEligibleForTrial, trialDaysLeft, annualDiscountDaysLeft } = subscriptionInfo

    if (isEligibleForTrial) return 'and get 14-day Pro Trial!'

    if (trialDaysLeft > 0) return `Free trial ends in: ${trialDaysLeft} days`

    if (variant === AccountStatusType.First && annualDiscountDaysLeft > 0) {
      return `Special offer ends in: ${annualDiscountDaysLeft} days`
    }
  }

  function getSanbasePlan(subscriptionInfo) {
    const { trialDaysLeft, userPlanName } = subscriptionInfo

    if (trialDaysLeft > 0) return 'Sanbase: Pro plan, Free Trial'

    if (userPlanName) return `Sanbase: ${userPlanName} plan`

    return 'Sanbase: free plan'
  }

  $: buttonLabel = getButtonLabel(subscriptionInfo, variant)
  $: note = getNoteText(subscriptionInfo, variant)
  $: sunbasePlan = getSanbasePlan(subscriptionInfo)
</script>

<section>
  <ProfileNames {user} />

  <div class="caption c-waterloo">
    <div class="mrg-s mrg--t">
      {#if subscriptionInfo.userPlanName && !subscriptionInfo.trialDaysLeft}
        SanAPI: Basic plan<br />
      {/if}
      {sunbasePlan}
    </div>
    <a
      class="upgrade btn-1 btn--orange btn--s mrg-m mrg--t v-center body-3"
      href="https://app.santiment.net/pricing"
      on:click={window.__onLinkClick}>
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
