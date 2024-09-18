<script lang="ts">
  import { trackEvent } from '$lib/analytics/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { onSupportClick } from '$lib/utils/support.js'
  import {
    BUSINESS_PLANS,
    CONSUMER_PLANS,
    SubscriptionPlan,
  } from '$ui/app/SubscriptionPlan/plans.js'
  import type { TSubscriptionPlan } from '$ui/app/SubscriptionPlan/types.js'
  import {
    checkIsAlternativeBillingPlan,
    checkIsCurrentPlan,
    getPlanName,
  } from '$ui/app/SubscriptionPlan/utils.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { useSubscriptionPlanButtonCtx } from './ctx.js'

  let {
    source: _source = '',
    plan,
    class: className,
  }: {
    plan: Exclude<TSubscriptionPlan, 'isDeprecated'>
    class?: string
    source?: string
  } = $props()

  const { onPlanButtonClick, onPlanChangeClick, onBillingPeriodChangeClick } =
    useSubscriptionPlanButtonCtx.get()
  const { customer } = useCustomerCtx()

  let source = $derived(_source + '_plan_button')
  let isBusinessPlan = $derived(BUSINESS_PLANS.has(plan.name))
  let isConsumerPlan = $derived(CONSUMER_PLANS.has(plan.name))

  let isCurrentPlan = $derived(checkIsCurrentPlan(customer.$.plan, plan))
  let isSameProductPlan = $derived(
    (isConsumerPlan && customer.$.isConsumerSubscription) ||
      (isBusinessPlan && customer.$.isBusinessSubscription),
  )
  let isBillingChangeAvailable = $derived(checkIsAlternativeBillingPlan(customer.$.plan, plan))
  let isAnonymous = $derived(!customer.$.isLoggedIn)
  let anonymousProps = $derived(
    isAnonymous
      ? {
          onclick: null,
          href: `/sign-up?from=${encodeURIComponent('/pricing')}`,
          'data-source': source,
        }
      : {},
  )

  let classes = $derived({
    class: cn(
      'center',
      isBusinessPlan && 'bg-blue hover:bg-blue-hover',
      isConsumerPlan && !customer.$.isBusinessPro && 'bg-orange hover:bg-orange-hover',
      className,
    ),
  })

  function trackPress(e: { currentTarget: HTMLElement }, plan?: TSubscriptionPlan) {
    trackEvent('press', {
      action: e.currentTarget.textContent?.trim() || '',
      type: e.currentTarget.dataset.type,
      plan: plan?.name,
      interval: plan?.interval,
      source,
    })
  }
</script>

{#if isCurrentPlan}
  {#if isAnonymous}
    <Button
      variant="fill"
      size="lg"
      class={cn('center', className)}
      {...anonymousProps}
      data-type="sign_up"
    >
      Sing up
    </Button>
  {:else}
    <Button variant="fill" size="lg" disabled class={cn('!text-fiord center', className)}>
      Your current plan
    </Button>
  {/if}
{:else if plan.name === SubscriptionPlan.FREE.key}
  <Button
    variant="border"
    size="lg"
    class="center"
    onclick={onSupportClick}
    href="mailto:support@santiment.net"
    data-type="default_plan"
    data-source={source}
  >
    Default plan
  </Button>
{:else if plan.name === SubscriptionPlan.CUSTOM.key}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    target="_blank"
    href="https://calendly.com/santiment-team/santiment-enterprise-plan-enquiry"
    data-type="custom_business_plan"
    data-source={source}
  >
    Let's talk!
  </Button>
{:else if isBillingChangeAvailable}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={(e) => {
      trackPress(e, plan)
      onBillingPeriodChangeClick?.(plan, e)
    }}
    {...anonymousProps}
    data-type="change_billing"
  >
    Change billing period
  </Button>
{:else if isBusinessPlan && customer.$.isFree}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={(e) => {
      trackPress(e, plan)
      onPlanButtonClick?.(plan, e)
    }}
    {...anonymousProps}
    data-type="get_business"
  >
    Get {getPlanName(plan)}
  </Button>
{:else if isConsumerPlan && (customer.$.isEligibleForSanbaseTrial || isAnonymous)}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={(e) => {
      trackPress(e, plan)
      onPlanButtonClick?.(plan, e)
    }}
    {...anonymousProps}
    data-type="start_free_trial"
  >
    Start Free Trial
  </Button>
{:else if (isBusinessPlan && customer.$.isBusinessMax) || (isConsumerPlan && customer.$.isMax) || (isBusinessPlan && customer.$.isConsumerSubscription)}
  <Button
    variant={isConsumerPlan && customer.$.isBusinessPro ? 'border' : 'fill'}
    size="lg"
    {...classes}
    href="mailto:support@santiment.net"
    onclick={(e) => {
      trackPress(e, plan)

      if (isSameProductPlan) onPlanChangeClick?.(plan, e)
      else onSupportClick(e)
    }}
    {...anonymousProps}
    data-type="{isConsumerPlan ? 'consumer' : 'business'}_change_plan"
  >
    Change plan
  </Button>
{:else}
  <Button
    variant={isConsumerPlan && customer.$.isBusinessPro ? 'border' : 'fill'}
    size="lg"
    {...classes}
    onclick={(e) => {
      trackPress(e, plan)

      if (isSameProductPlan) onPlanChangeClick?.(plan, e)
      else onPlanButtonClick?.(plan, e)
    }}
    data-type="upgrade"
  >
    Upgrade
  </Button>
{/if}
