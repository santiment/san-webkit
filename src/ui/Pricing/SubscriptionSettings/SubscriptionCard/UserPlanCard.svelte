<script lang="ts">
  import { onlyProAndFreeLikePlans, onlyProLikePlans, Plan, PlanName } from '@/utils/plans'
  import { getTrialDaysLeft } from '@/utils/subscription'
  import { showCancelSubscriptionDialog } from '../../CancelSubscriptionDialog'
  import { showPlanSummaryDialog } from '../PlansSummaryDialog.svelte'
  import PlanCard from './PlanCard.svelte'

  export let plan
  export let subscription

  $: isNonFreePlan = plan?.name !== Plan.FREE
  $: trialDaysLeft = subscription && getTrialDaysLeft(subscription)
</script>

<PlanCard
  {plan}
  isChecked={!trialDaysLeft}
  label="Current plan"
  badge={trialDaysLeft}
  isTrial={trialDaysLeft}
  isActive={isNonFreePlan && !trialDaysLeft}
  action={isNonFreePlan ? 'Change plan' : 'Upgrade'}
  onActionClick={showPlanSummaryDialog}
  subaction={isNonFreePlan && 'Cancel Subscription'}
  onSubactionClick={showCancelSubscriptionDialog}
/>
