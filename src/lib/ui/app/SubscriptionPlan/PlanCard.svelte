<script lang="ts">
  import { type TPlanBillingGroup } from '$ui/app/SubscriptionPlan/api.js'
  import { BILLING_INTERVAL } from '$ui/app/SubscriptionPlan/plans.js'
  import { checkIsCurrentPlan, getFormattedPlan } from '$ui/app/SubscriptionPlan/index.js'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import Switch from '$ui/core/Switch/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import PlanButton from './PlanButton.svelte'

  let {
    source: _source = '',
    billingGroup,
  }: { source?: string; billingGroup: TPlanBillingGroup[string] } = $props()

  const { customer } = useCustomerCtx()

  const formattedPlan = getFormattedPlan(billingGroup)

  let selected = $state(formattedPlan.primary)

  const source = $derived(_source ? _source + '_plan_card' : 'plan_card')
  const isAnnualBilling = $derived(selected.interval === 'year')
  const isCurrentPlan = $derived(checkIsCurrentPlan(customer.$.plan, selected.plan))
  const alternative = $derived(
    formattedPlan.intervals.find((item) => item.interval !== selected.interval),
  )

  const theme = formattedPlan.isFree
    ? {
        accent: 'var(--c-fiord)',
        'accent-light-1': 'var(--c-athens)',
        checkmark: 'var(--c-waterloo)',
      }
    : formattedPlan.isBusiness
      ? {
          'c-green': 'var(--c-blue)',
          'c-green-hover': 'var(--c-blue-hover)',
          accent: 'var(--c-blue)',
          'accent-light-1': 'var(--c-blue-light-1)',
          checkmark: 'var(--c-blue)',
        }
      : {
          'c-green': 'var(--c-orange)',
          'c-green-hover': 'var(--c-orange-hover)',
        }
</script>

<article
  class="min-w-0 flex-1 p-10 pt-8 column"
  style:--c-orange={theme.accent}
  style:--c-orange-light-1={theme['accent-light-1']}
>
  <h2 class={cn('mb-4 flex max-w-fit gap-1 md:flex-wrap')}>
    <span class="rounded-md bg-orange-light-1 px-3 py-1 text-2xl font-medium text-orange">
      {formattedPlan.name}
    </span>

    {#if isCurrentPlan}
      {#if customer.$.isTrialSubscription}
        <span
          class="expl-tooltip flex h-10 shrink-0 whitespace-nowrap rounded-md bg-green-light-1 px-3 text-base text-green center"
          aria-label="Your free trial will expire in {customer.$.trialDaysLeft} days"
        >
          Your trial plan
        </span>
      {:else if customer.$.isPro}
        <span class="flex size-10 rounded-md bg-orange-light-1 fill-orange center">
          <Svg id="crown" h="12"></Svg>
        </span>
      {/if}
    {/if}
  </h2>

  {#if formattedPlan.details}
    <p class="mb-10 text-base text-waterloo sm:mb-8">
      {formattedPlan.details.description}
    </p>
  {/if}

  <section class="min-h-[156px] column sm:min-h-0">
    <h3 class="mb-3 text-4xl font-semibold">
      {#if formattedPlan.isCustom}
        Get a quote
      {:else if formattedPlan.isFree}
        $0
      {:else}
        ${selected.price}
        <span class="text-xl font-normal text-waterloo"
          >/ {BILLING_INTERVAL[selected.interval].short}</span
        >
      {/if}
    </h3>

    <h4 class="mb-8 text-base text-fiord sm:mb-8">
      {#if formattedPlan.isFree}
        Free forever
      {:else if formattedPlan.isCustom}
        Based on your needs
      {:else if alternative}
        <span class="font-medium text-rhino">${alternative.price}</span>
        <span class="mr-1 text-waterloo">
          / {BILLING_INTERVAL[alternative.interval].long}, billed {BILLING_INTERVAL[
            selected.interval
          ].billed}
        </span>
      {/if}
    </h4>

    {#if formattedPlan.intervals.length > 1}
      <label
        class="mb-4 flex items-center gap-2 text-base text-waterloo"
        style:--c-green={theme['c-green']}
        style:--c-green-hover={theme['c-green-hover']}
      >
        <Switch
          checked={isAnnualBilling}
          onCheckedChange={() => {
            trackEvent('toggle', {
              action: isAnnualBilling ? 'off' : 'on',
              type: 'annual_billing',
              source,
              plan: selected.plan.name,
            })
            if (alternative) selected = alternative
          }}
        ></Switch>

        Bill annually

        {#if formattedPlan.savePercentWithAnnual}
          <span class="text-orange">
            - {formattedPlan.savePercentWithAnnual}% <span class="md:hidden">🎉</span>
          </span>
        {/if}
      </label>
    {/if}
  </section>

  <PlanButton {source} plan={selected.plan}></PlanButton>

  {#if formattedPlan.details}
    <ul
      class="mt-10 gap-5 fill-orange text-rhino column sm:mt-8"
      style:--c-orange={theme.checkmark}
    >
      {#each formattedPlan.details.features as feature}
        <li class="flex gap-2.5">
          <Svg id="checkmark-circle" class="mt-[1.5px]"></Svg>
          {feature}
        </li>
      {/each}
    </ul>
  {/if}
</article>
