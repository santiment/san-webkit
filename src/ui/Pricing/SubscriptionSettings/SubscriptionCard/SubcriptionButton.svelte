<script lang="ts">
  import { dataPreloader, showPaymentDialog } from '@/ui/PaymentDialog/index.svelte'
  import { SubscriptionCardType, SubscriptionType } from './utils'
  import { showPlanSummaryDialog } from '../PlansSummaryDialog.svelte'
  import { checkIsUpgrade } from '../../utils'
  import { Billing, Plan } from '../../../../utils/plans'

  export let type: SubscriptionCardType
  export let subscriptionType: SubscriptionType
  export let subscription: SAN.Subscription
  export let plan: SAN.Plan
  export let annualDiscount: SAN.AnnualDiscount
  export let isEligibleForTrial
  export let isCurrent
  export let plans

  $: title = getTitle()
  $: isDisabled = checkIsDisabled()
  $: isUpgrade = checkIsUpgrade(plan, subscription)
  $: monthProPlan = plans.find(
    ({ interval, name }) => interval === Billing.MONTH && name === Plan.PRO,
  )
  $: yearProPlan = plans.find(
    ({ interval, name }) => interval === Billing.YEAR && name === Plan.PRO,
  )
  $: monthProPlusPlan = plans.find(
    ({ interval, name }) => interval === Billing.MONTH && name === Plan.PRO_PLUS,
  )
  $: yearProPlusPlan = plans.find(
    ({ interval, name }) => interval === Billing.YEAR && name === Plan.PRO_PLUS,
  )

  function getTitle() {
    switch (subscriptionType) {
      case SubscriptionType.Free: {
        switch (type) {
          case SubscriptionCardType.Current: {
            return 'Default Plan'
          }
          case SubscriptionCardType.Suggested:
          case SubscriptionCardType.Next:
          default: {
            return 'Start 14-day Free Trial'
          }
        }
      }
      case SubscriptionType.OnTrial:
      case SubscriptionType.ProFirstMonth: {
        switch (type) {
          case SubscriptionCardType.Current: {
            return 'Change plan'
          }
          case SubscriptionCardType.Suggested:
          case SubscriptionCardType.Next:
          default: {
            return `Pay now ${annualDiscount?.discount?.percentOff}% Off`
          }
        }
      }
      case SubscriptionType.FreeTrialFinished: {
        switch (type) {
          case SubscriptionCardType.Current: {
            return 'Upgrade'
          }
          case SubscriptionCardType.Suggested:
          case SubscriptionCardType.Next:
          default: {
            return 'Buy now'
          }
        }
      }
      case SubscriptionType.Pro:
      case SubscriptionType.ProPlus: {
        switch (type) {
          case SubscriptionCardType.Current: {
            return 'Change plan'
          }
          case SubscriptionCardType.Suggested:
          case SubscriptionCardType.Next:
          default: {
            return 'Upgrade'
          }
        }
      }
    }
  }

  function checkIsDisabled() {
    return isCurrent && subscriptionType === SubscriptionType.Free
  }

  function handleClickSubscriptionButton() {
    if (isCurrent) {
      showPlanSummaryDialog()
    }

    if (!isCurrent) {
      switch (subscriptionType) {
        case SubscriptionType.Free:
        case SubscriptionType.FreeTrialFinished:
        case SubscriptionType.Pro: {
          switch (type) {
            case SubscriptionCardType.Suggested: {
              showPaymentDialog({
                plan: monthProPlan.name,
                interval: monthProPlan.interval,
                isEligibleForTrial,
                annualDiscount,
              })
              break
            }
            case SubscriptionCardType.Next:
            default: {
              showPaymentDialog({
                plan: monthProPlusPlan.name,
                interval: monthProPlusPlan.interval,
                isEligibleForTrial,
                annualDiscount,
              })
              break
            }
          }
          break
        }
        case SubscriptionType.OnTrial:
        case SubscriptionType.ProFirstMonth: {
          switch (type) {
            case SubscriptionCardType.Suggested: {
              showPaymentDialog({
                plan: yearProPlan.name,
                interval: yearProPlan.interval,
                isEligibleForTrial,
                annualDiscount,
              })
              break
            }
            case SubscriptionCardType.Next:
            default: {
              showPaymentDialog({
                plan: yearProPlusPlan.name,
                interval: yearProPlusPlan.interval,
                isEligibleForTrial,
                annualDiscount,
              })
              break
            }
          }
          break
        }
      }
    }
  }
</script>

<button
  class="btn-1"
  class:disabled={isDisabled}
  class:btn--orange={!isCurrent}
  on:click={() => handleClickSubscriptionButton()}
  use:dataPreloader
>
  {title}
</button>

<style lang="scss">
  .btn-1 {
    height: 32px;
  }

  .disabled {
    --color: var(--mystic);
    --bg: var(--athens);
    border: 1px solid var(--porcelain);
  }
</style>
