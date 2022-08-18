<script>
  import { getDateFormats } from './../../../../utils/dates'
  import { formatPrice, Plan } from './../../../../utils/plans'
  import { getNextPaymentDate, getTrialDaysLeft } from './../../../../utils/subscription'
  import PlanCard from './PlanCard.svelte'
  import { showPlanSummaryDialog } from '../PlansSummaryDialog.svelte'
  import { showCancelSubscriptionDialog } from '../../CancelSubscriptionDialog'
  export let plan
  export let subscription

  $: isPaidPlan = (plan === null || plan === void 0 ? void 0 : plan.name) !== Plan.FREE

  $: trialDaysLeft = subscription && getTrialDaysLeft(subscription)

  function formatDate(date) {
    const { DD, MMMM, YYYY } = getDateFormats(date)
    return `${MMMM} ${DD}, ${YYYY}`
  }
</script>

<PlanCard
  {plan}
  isChecked={!trialDaysLeft}
  label="Current plan"
  badge={trialDaysLeft}
  isTrial={trialDaysLeft}
  isActive={isPaidPlan && !trialDaysLeft}
  action={isPaidPlan ? 'Change plan' : 'Upgrade'}
  onActionClick={showPlanSummaryDialog}
  subaction={isPaidPlan && 'Cancel Subscription'}
  onSubactionClick={showCancelSubscriptionDialog}
>
  <p>
    {#if isPaidPlan}
      {@const price = formatPrice(plan)}
      {#if trialDaysLeft}
        Your card will be charged <b>{price} after</b> your trial will finish on
        <b>{formatDate(new Date(subscription.trialEnd))}</b>
      {:else}
        Your card will be charged <b>{price} per {plan.interval}</b>. It will automatically renewed
        on <b>{formatDate(getNextPaymentDate(plan))}</b>
      {/if}
    {:else}
      Starter plan with limited access to Sanbase features. Check all plans
      <a href="https://app.santiment.net/pricing" class="btn-0" on:click={window.__onLinkClick}
        >here!</a
      >
    {/if}
  </p>
</PlanCard>

<style>
  b {
    font-weight: 500;
  }
</style>
