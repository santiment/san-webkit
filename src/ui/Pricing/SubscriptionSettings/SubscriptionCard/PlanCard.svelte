<script lang="ts">
  import {
    checkIsYearlyPlan,
    formatMonthlyPrice,
    formatPrice,
    getSavedAmount,
    PlanName,
  } from '@/utils/plans'

  import Card from './Card.svelte'

  export let plan: SAN.Plan
  export let altPlan: SAN.Plan = plan
  export let discount: undefined | number
  export let label, badge, badgeIcon
  export let isEligibleForTrial = false
  export let isTrial = false

  $: ({ name } = plan)
  $: annual = checkIsYearlyPlan(plan) ? ' / Annual' : ''
  $: ({ billing, price } = getBillingPrice(plan, altPlan, annual))

  function getBillingPrice(plan, altPlan, annual) {
    if (plan === altPlan) {
      return {
        price: formatPrice(plan),
        billing: `Billed ${plan.interval}ly`,
      }
    }

    return {
      price: formatMonthlyPrice(plan),
      billing: annual
        ? `You save ${getSavedAmount(plan, altPlan, discount)} this year`
        : 'Billed monthly',
    }
  }
</script>

<Card
  {...$$restProps}
  {billing}
  {price}
  action={discount
    ? `Pay now ${discount}% Off`
    : isEligibleForTrial
    ? 'Start 14-day Free Trial'
    : 'Buy now'}
  title={PlanName[name] + (isTrial ? ' Trial' : '') + annual}
  label={discount ? 'Special offer' : label}
  badge={discount ? `${discount}% Off` : badge}
  badgeIcon={discount ? null : badgeIcon}
/>
