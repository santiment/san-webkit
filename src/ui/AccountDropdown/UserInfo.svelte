<script>
  import { checkIsActiveSubscription } from '@/utils/subscription'
  import ProfileNames from '@/ui/Profile/Names.svelte'
  import { AccountStatusType } from '../AccountStatus.svelte'

  export let user
  export let subscriptionInfo
  export let variant = AccountStatusType.First

  const { subscription } = user
  const hasActiveSubscription = subscription && checkIsActiveSubscription(subscription)

  $: ({
    isEligibleForTrial,
    annualDiscountPercent,
    subscriptionPlan,
    offerEndsIn,
    userPlanName,
    trialDaysLeft,
  } = subscriptionInfo)

  $: getButtonLabel = () => {
    if (variant === AccountStatusType.First && annualDiscountPercent > 0) {
      if (trialDaysLeft > 0) return `Get ${annualDiscountPercent}% OFF`
      if (subscriptionPlan && !isEligibleForTrial) return `Get ${annualDiscountPercent}% OFF`
    }
    if (subscriptionPlan && !isEligibleForTrial && !annualDiscountPercent) return 'Learn about Pro'
    return 'Upgrade'
  }

  $: getNoteText = () => {
    if (isEligibleForTrial) return 'and get 14-day Pro Trial!'
    if (trialDaysLeft > 0) return `Free trial ends in: ${trialDaysLeft} days`
    if (variant === AccountStatusType.First && offerEndsIn > 0) {
      return `Special offer ends in: ${offerEndsIn} days `
    }
    return null
  }

  $: getSanbasePlan = () => {
    if (trialDaysLeft > 0) return 'Sanbase: Pro plan, Free Trial'
    if (userPlanName) return `Sanbase: ${userPlanName} plan`
    return 'Sanbase: free plan'
  }

  $: noteText = getNoteText()
</script>

<section>
  <ProfileNames {user} />

  <div class="caption c-waterloo">
    <div class="mrg-s mrg--t">
      {#if userPlanName && !trialDaysLeft}
        SanAPI: Basic plan<br />
      {/if}
      {getSanbasePlan()}
    </div>
    {#if !hasActiveSubscription}
      <a
        class="upgrade btn-1 btn--orange btn--s mrg-m mrg--t v-center body-3"
        href="https://app.santiment.net/pricing"
        on:click={window.__onLinkClick}>
        {getButtonLabel()}
      </a>
    {/if}
  </div>
  {#if noteText !== null}
    <div class="noteText">{noteText}</div>
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

  .noteText {
    color: var(--orange-hover);
    margin-top: 4px;
  }
</style>
