<script lang="ts">
  import { SANBASE_ORIGIN } from '@/utils/links'
  import { formatPrice, Plan, getPlanDisplayName } from '@/utils/plans'
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
  export let description = ''
  export let onActionClick = () => {
    if (plan.name === Plan.CUSTOM) {
      window.open('https://calendly.com/santiment-team/santiment-enterprise-plan-enquiry', '_blank')
      return
    }

    return showPaymentDialog({
      plans,
      plan: plan.name,
      interval: plan.interval,
      planData: plan,
      source: 'account-subscription-suggestions',
    })
  }

  $: displayName = getPlanDisplayName(plan)
  $: ({ billing, price } = getBillingPrice(plan))

  function getBillingPrice(plan: SAN.Plan) {
    if (plan.name === Plan.CUSTOM)
      return {
        price: 'Custom',
        billing: 'Based on your needs',
      }

    return {
      price: formatPrice(plan),
      billing: `Billed ${plan.interval}ly:`,
    }
  }
</script>

<Card
  {...$$restProps}
  billingTitle={billing}
  {price}
  {discount}
  {shouldHideBillingInfo}
  {onActionClick}
  action={plan.name === Plan.CUSTOM
    ? 'Let’s talk!'
    : discount
    ? `Pay now ${discount}% Off`
    : isEligibleForTrial
    ? 'Start 14-day Free Trial'
    : isUpgrade
    ? 'Upgrade'
    : action}
  disabled={action === 'Default plan'}
  title={displayName + (isTrial ? ' Trial' : '')}
  label={discount ? 'Special offer' : label}
  badge={discount ? `${discount}% Off` : badge}
  badgeIcon={discount ? null : badgeIcon}
>
  <slot>
    <p>
      {description}

      Check all plans
      <a href="{SANBASE_ORIGIN}/pricing" class="link-pointer" on:click={window.__onLinkClick}>
        here!
      </a>
    </p>
  </slot>
</Card>
