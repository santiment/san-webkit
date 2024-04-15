<script lang="ts">
  import { SANBASE_ORIGIN } from '@/utils/links'
  import { checkIsYearlyPlan, formatPrice, PlanName } from '@/utils/plans'
  import { showPaymentDialog } from '@/ui/PaymentDialog/index.svelte'
  import Card from './Card.svelte'

  export let plan: SAN.Plan
  export let discount: undefined | number
  export let action = 'Buy now'
  export let label, badge, badgeIcon
  export let isEligibleForTrial = false
  export let isTrial = false
  export let isUpgrade = false
  export let shouldHideBillingInfo = false
  export let plans = [] as SAN.Plan[]
  export let onActionClick = () => {
    return showPaymentDialog({
      plans,
      plan: plan.name,
      interval: plan.interval,
      planData: plan,
      source: 'account-subscription-suggestions',
    })
  }

  $: ({ name } = plan)
  $: annual = checkIsYearlyPlan(plan) ? ' / Annual' : ''
  $: ({ billing, price } = getBillingPrice(plan))

  function getBillingPrice(plan: SAN.Plan) {
    return {
      price: formatPrice(plan),
      billing: `Billed ${plan.interval}ly`,
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
      <a href="{SANBASE_ORIGIN}/pricing" class="link-pointer" on:click={window.__onLinkClick}
        >here!</a
      >
    </p>
  </slot>
</Card>
