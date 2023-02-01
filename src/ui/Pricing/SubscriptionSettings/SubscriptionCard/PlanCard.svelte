<script lang="ts">
  import {
    checkIsYearlyPlan,
    formatMonthlyPrice,
    formatPrice,
    getSavedAmount,
    PlanName,
  } from '@/utils/plans'
  import { showPaymentDialog } from '@/ui/PaymentDialog/index.svelte'
  import Card from './Card.svelte'

  export let plan: SAN.Plan
  export let altPlan: SAN.Plan = plan
  export let discount: undefined | number
  export let action = 'Buy now'
  export let label, badge, badgeIcon
  export let isEligibleForTrial = false
  export let isTrial = false
  export let isUpgrade = false
  export let shouldHideBillingInfo
  export let onActionClick = () => {
    return showPaymentDialog({
      plan: plan.name,
      interval: plan.interval,
      planData: plan,
      source: 'account-subscription-suggestions',
    })
  }

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
      price: formatMonthlyPrice(plan, discount),
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
  {discount}
  {shouldHideBillingInfo}
  {onActionClick}
  action={discount
    ? `Pay now ${discount}% Off`
    : isEligibleForTrial
    ? 'Start 14-day Free Trial'
    : isUpgrade
    ? 'Upgrade'
    : action}
  disabled={action === 'Default plan'}
  title={PlanName[name] + (isTrial ? ' Trial' : '') + annual}
  label={discount ? 'Special offer' : label}
  badge={discount ? `${discount}% Off` : badge}
  badgeIcon={discount ? null : badgeIcon}
>
  <slot>
    <p>
      {#if badge === 'Popular'}
        Get access to advanced crypto metrics, market insights and more!
      {:else}
        Advanced plan with complete access to analytics, backtesting framework.
      {/if}

      Check all plans
      <a
        href="https://app.santiment.net/pricing"
        class="link-pointer"
        on:click={window.__onLinkClick}>here!</a
      >
    </p>
  </slot>
</Card>
