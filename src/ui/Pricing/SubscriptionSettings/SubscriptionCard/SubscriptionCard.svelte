<script lang="ts">
  import SubscriptionTag from './SubscriptionTag.svelte'
  import SubscriptionCardDescription from './SubscriptionCardDescription.svelte'
  import BillingInfo from './BillingInfo.svelte'
  import SubcriptionButton from './SubcriptionButton.svelte'
  import CancelSubscriptionButton from './CancelSubscriptionButton.svelte'
  import { checkIsTrialSubscription } from '../../../../utils/subscription'
  import { Plan } from '../../../../utils/plans'
  import { getPlanName, SubscriptionCardType, SubscriptionType } from './utils'

  export let type: SubscriptionCardType
  export let plan: SAN.Plan
  export let subscription: SAN.Subscription
  export let annualDiscount: SAN.AnnualDiscount
  export let isEligibleForTrial
  export let plans: SAN.Plan[]

  $: isCurrent = type === SubscriptionCardType.Current
  $: isTrial = subscription && checkIsTrialSubscription(subscription)
  $: isTrialFinished = !subscription?.trialEnd && !isEligibleForTrial
  $: subscriptionType = getSubscriptionType({ isTrial, isTrialFinished })
  $: title = getTitle({ type, subscriptionType })
  $: planName = getPlanName({ subscriptionType, plan, type })
  $: shouldHideBillingInfo =
    isCurrent &&
    (subscriptionType === SubscriptionType.OnTrial ||
      subscriptionType === SubscriptionType.ProFirstMonth)
  $: shouldShowCancelButton =
    isCurrent &&
    subscriptionType !== SubscriptionType.Free &&
    subscriptionType !== SubscriptionType.FreeTrialFinished

  function getTitle({ type, subscriptionType }) {
    switch (type) {
      case SubscriptionCardType.Current:
        return 'Current plan'
      case SubscriptionCardType.Suggested:
        switch (subscriptionType) {
          case SubscriptionType.OnTrial:
          case SubscriptionType.ProFirstMonth: {
            return 'Special offer'
          }
          default: {
            return 'Suggested for you'
          }
        }
      case SubscriptionCardType.Next:
        switch (subscriptionType) {
          case SubscriptionType.OnTrial:
          case SubscriptionType.ProFirstMonth: {
            return 'Special offer'
          }
          default: {
            return 'Next level'
          }
        }
    }
  }

  function getSubscriptionType({ isTrial, isTrialFinished }) {
    if (!subscription && isEligibleForTrial) {
      return SubscriptionType.Free
    }

    if (isTrial) {
      return SubscriptionType.OnTrial
    }

    if (isTrialFinished && plan.name === Plan.FREE) {
      return SubscriptionType.FreeTrialFinished
    }

    if (
      plan.name === Plan.PRO &&
      plan.interval === 'month' &&
      annualDiscount?.discount &&
      annualDiscount?.isEligible
    ) {
      return SubscriptionType.ProFirstMonth
    }

    if (plan.name === Plan.PRO) {
      return SubscriptionType.Pro
    }

    if (plan.name === Plan.PRO_PLUS) {
      return SubscriptionType.ProPlus
    }
  }
</script>

<div
  class="plan column"
  class:current={isCurrent}
  class:suggested={type === SubscriptionCardType.Suggested}
  class:next={type === SubscriptionCardType.Next}
  class:wide={subscriptionType === SubscriptionType.Pro ||
    subscriptionType === SubscriptionType.ProPlus}
>
  <div class="row justify">
    <div class="caption txt-m c-waterloo">{title}</div>
    <SubscriptionTag {type} {subscriptionType} {subscription} {annualDiscount} />
  </div>
  <div class="column">
    <div class="h4 txt-m mrg--b mrg-xs">{planName}</div>
    <SubscriptionCardDescription {type} {subscriptionType} {plan} {subscription} />
    <div class="bottom row" class:justify={!shouldHideBillingInfo}>
      <div class="row">
        <SubcriptionButton
          {type}
          {subscriptionType}
          {plan}
          {subscription}
          {annualDiscount}
          {isEligibleForTrial}
          {isCurrent}
          {plans}
        />
        {#if shouldShowCancelButton}
          <CancelSubscriptionButton />
        {/if}
      </div>
      {#if !shouldHideBillingInfo}
        <BillingInfo {type} {subscriptionType} {plan} {annualDiscount} {plans} />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .current {
    --plan-background: var(--athens);
  }

  .suggested {
    --plan-background: var(--green-light-1);
  }

  .next {
    --plan-background: var(--orange-light-1);
  }

  .plan {
    width: 100%;
    max-width: 357px;
    padding: 16px 16px 16px 24px;
    background: var(--plan-background, var(--athens));
    border-radius: 8px;
  }

  .wide {
    max-width: 544px;
  }

  .bottom {
    height: 42px;
    align-items: flex-end;
  }
</style>
