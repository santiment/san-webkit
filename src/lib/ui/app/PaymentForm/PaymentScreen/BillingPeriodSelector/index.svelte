<script lang="ts">
  import { trackEvent } from '$lib/analytics/index.js'

  import Selector from '../../Selector.svelte'
  import { usePaymentFormCtx } from '../../state.js'

  const INTERVAL_NAME = { month: 'Monthly', year: 'Annually' }

  const { billingPeriod, subscriptionPlan, selectSubscriptionPlan } = usePaymentFormCtx()

  const plan = $derived(subscriptionPlan.$)
  const formattedPlan = $derived(plan.formatted)

  const options = $derived(
    formattedPlan?.intervals.map((item) => ({ ...item, name: INTERVAL_NAME[item.interval] })) ?? [],
  )

  const selectedBillingPeriod = $derived(
    options.find(({ interval }) => interval === billingPeriod.$),
  )

  function onSelect(option: (typeof options)[number]) {
    selectSubscriptionPlan(option.plan)

    billingPeriod.$ = option.interval

    trackEvent('toggle', {
      action: option.interval === 'year' ? 'on' : 'off',
      type: 'annual_billing',
      source: 'payment_dialog',
      plan: plan.selected?.name,
    })
  }
</script>

{#if options.length > 1}
  <Selector name="Billing period" active={selectedBillingPeriod} {options} {onSelect}>
    {#snippet children(option)}
      {@const isAnnualBilling = option.interval === 'year'}
      <h3 class="flex h-[26px] w-full items-center justify-between gap-2">
        {option.name}

        {#if isAnnualBilling && formattedPlan}
          <div class="rounded-md bg-white px-2 py-[5px] text-xs font-medium text-green">
            <span class="mr-2">🎉</span>SAVE {formattedPlan.savePercentWithAnnual}%
          </div>
        {/if}
      </h3>

      <h4 class="text-left align-bottom">
        ${option.price}

        <span class="text-sm font-normal text-waterloo">/ {isAnnualBilling ? 'Year' : 'Month'}</span
        >
      </h4>
    {/snippet}
  </Selector>
{/if}
