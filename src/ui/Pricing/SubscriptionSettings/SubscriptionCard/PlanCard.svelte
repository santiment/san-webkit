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
  export let userPlan: SAN.Plan = plan
  export let discount: undefined | number
  export let badge, badgeIcon

  $: ({ name } = plan)
  $: annual = checkIsYearlyPlan(plan) ? ' / Annual' : ''
  $: ({ billing, price } = getBillingPrice(plan, userPlan, annual))

  function getBillingPrice(plan, userPlan, annual) {
    if (plan === userPlan) {
      return {
        price: formatPrice(plan),
        billing: `Billed ${plan.interval}ly`,
      }
    }

    return {
      price: formatMonthlyPrice(plan),
      billing: annual
        ? `You save ${getSavedAmount(userPlan, plan, discount)} this year`
        : undefined,
    }
  }
</script>

<Card
  {...$$restProps}
  {billing}
  {price}
  title={PlanName[name] + annual}
  badge={discount ? `${discount}% Off` : badge}
  badgeIcon={discount ? null : badgeIcon}
/>
