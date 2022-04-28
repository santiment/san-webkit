<script lang="ts">
  import { Billing, getAlternativePlan } from '@/utils/plans'

  let className = ''
  export { className as class }
  export let plan: SAN.Plan
  export let plans: SAN.Plan[]
  export let subscription: undefined | SAN.Subscription
  export let isEligibleForTrial: boolean = true
  export let annualDiscountEligibility = {} as SAN.AnnualDiscount

  $: ({ id } = plan)
  $: isCurrentPlan = subscription?.plan.id === id
  $: isUpgrade = checkIsUpgrade(plan, subscription)
  $: isDowngrade = isUpgrade !== undefined && !isUpgrade
  $: label = (plan, subscription, getLabel())

  function getLabel() {
    if (annualDiscountEligibility.isEligible) {
      if (plan.interval === Billing.YEAR)
        return `Pay now ${annualDiscountEligibility.discount?.percentOff}% Off`
      return 'Pay now'
    }

    if (isCurrentPlan) return 'Your current plan'
    if (isEligibleForTrial) return 'Start 14-day Free trial'
    if (isUpgrade) return 'Upgrade'
    if (isDowngrade) return 'Downgrade'

    return 'Buy now'
  }

  function checkIsUpgrade(plan: SAN.Plan, subscription?: SAN.Subscription) {
    if (!subscription) return undefined

    const subscribed = subscription.plan
    const isPlanCheaper = subscribed.amount > plan.amount

    if (subscribed.interval === plan.interval) {
      return !isPlanCheaper
    }

    return subscribed.interval === Billing.MONTH
  }
</script>

<button
  class="btn-1 fluid body-2 {className}"
  class:disabled={isCurrentPlan && !annualDiscountEligibility.isEligible}
  class:downgrade={isDowngrade}
  on:click>{label}</button
>

<style>
  .btn-1 {
    --v-padding: 8px;
  }

  .disabled {
    color: var(--fiord);
  }

  .downgrade {
    background: var(--white);
    border: 1px solid var(--porcelain);
    --color: var(--black);
    --v-padding: 7px;
    --color-hover: var(--accent);
  }
</style>
