<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
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
    plan,
    class: className,
  }: { plan: Exclude<TSubscriptionPlan, 'isDeprecated'>; class?: string } = $props()

  const { onPlanButtonClick, onBillingPeriodChangeClick } = useSubscriptionPlanButtonCtx.get()
  const { customer } = useCustomerCtx()

  let isBusinessPlan = $derived(BUSINESS_PLANS.has(plan.name))
  let isConsumerPlan = $derived(CONSUMER_PLANS.has(plan.name))

  let isCurrentPlan = $derived(checkIsCurrentPlan(customer.$.plan, plan))
  let isBillingChangeAvailable = $derived(checkIsAlternativeBillingPlan(customer.$.plan, plan))
  let isAnonymous = $derived(!customer.$.isLoggedIn)
  let anonymousProps = $derived(isAnonymous ? { onclick: null, href: '/sign-up' } : {})

  let classes = $derived({
    class: cn(
      'center',
      isBusinessPlan && 'bg-blue hover:bg-blue-hover',
      isConsumerPlan && 'bg-orange hover:bg-orange-hover',
      className,
    ),
  })

  function onSupportClick(e: Event) {
    if (window.Intercom) e.preventDefault()

    window.Intercom?.('show')
  }
</script>

{#if isCurrentPlan}
  {#if isAnonymous}
    <Button variant="fill" size="lg" class={cn('center', className)} {...anonymousProps}>
      Sing up
    </Button>
  {:else}
    <Button variant="fill" size="lg" disabled class={cn('!text-fiord center', className)}>
      Your current plan
    </Button>
  {/if}
{:else if plan.name === SubscriptionPlan.FREE.key}
  <Button variant="border" size="lg" class="center">Default plan</Button>
{:else if plan.name === SubscriptionPlan.CUSTOM.key}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={onSupportClick}
    href="mailto:support@santiment.net"
  >
    Let's talk!
  </Button>
{:else if isBillingChangeAvailable}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={() => onBillingPeriodChangeClick?.(plan)}
    {...anonymousProps}
  >
    Change billing period
  </Button>
{:else if isBusinessPlan}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={() => onPlanButtonClick?.(plan)}
    {...anonymousProps}
  >
    Get {getPlanName(plan)}
  </Button>
{:else if isConsumerPlan && (customer.$.isEligibleForSanbaseTrial || isAnonymous)}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={() => onPlanButtonClick?.(plan)}
    {...anonymousProps}
  >
    Start Free Trial
  </Button>
{:else}
  <Button
    variant="fill"
    size="lg"
    {...classes}
    onclick={() => onPlanButtonClick?.(plan)}
    {...anonymousProps}
  >
    Upgrade
  </Button>
{/if}
