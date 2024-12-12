<script>import { SANBASE_ORIGIN } from './../../../../utils/links';
import { queryUpcomingInvoice } from './../../../../api/subscription';
import { getDateFormats } from './../../../../utils/dates';
import { formatPrice, Plan } from './../../../../utils/plans';
import { getTrialDaysLeft } from './../../../../utils/subscription';
import PlanCard from './PlanCard.svelte';
// import { showPlanSummaryDialog } from '../PlansSummaryDialog.svelte'
const showPlanSummaryDialog = null; // TODO: enable after making sure all new plans render correctly
export let plan;
export let subscription;
export let discount;
export let suggestionsCount;
export let isEligibleForTrial = false;
$: isPaidPlan = plan?.name !== Plan.FREE;
$: trialDaysLeft = subscription && getTrialDaysLeft(subscription);
$: isCancelled = Boolean(subscription && subscription.cancelAtPeriodEnd);
function formatDate(date) {
    const { DD, MMMM, YYYY } = getDateFormats(date);
    return `${MMMM} ${DD}, ${YYYY}`;
}
</script>

<PlanCard
  {plan}
  isChecked={!trialDaysLeft}
  label="Current plan"
  badge={trialDaysLeft}
  isTrial={trialDaysLeft}
  isActive={isPaidPlan && !trialDaysLeft}
  action={isPaidPlan ? 'Change plan' : isEligibleForTrial ? 'Default plan' : 'Upgrade'}
  onActionClick={showPlanSummaryDialog}
  subaction={isPaidPlan && 'Cancel subscription'}
  onSubactionClick={isCancelled ? undefined : () => window.showCancelSubscriptionDialog?.()}
  shouldHideBillingInfo={discount && suggestionsCount === 2}
>
  <p>
    {#if isPaidPlan}
      {#if isCancelled}
        Subscription is scheduled for <b>cancellation</b> at the end of the paid period:
        <b>
          {formatDate(new Date(subscription.currentPeriodEnd))}
        </b>
      {:else}
        {#await queryUpcomingInvoice(subscription.id) then { upcomingInvoice }}
          Your card will be charged <b>{formatPrice(upcomingInvoice)} per {plan.interval}</b>. It
          will automatically renewed on <b>{formatDate(new Date(upcomingInvoice.dueDate))}</b>
        {/await}
      {/if}
    {:else}
      Starter plan with limited access to Sanbase features. Check all plans
      <a href="{SANBASE_ORIGIN}/pricing" class="link-pointer" on:click={window.__onLinkClick}
        >here!</a
      >
    {/if}
  </p>
</PlanCard>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
b {
  font-weight: 500;
}</style>
