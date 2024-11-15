<script lang="ts">
  import { trackEvent } from '../../../../../analytics/index.js'
  import Selector from '../../Selector.svelte'
  import { usePaymentFormCtx } from '../../state.js'

  const OPTIONS = [{ name: 'Monthly' }, { name: 'Annually' }]

  const { billingPeriod, subscriptionPlan, selectSubscriptionPlan } = usePaymentFormCtx()

  let plan = $derived(subscriptionPlan.$)
  let selectedBillingPeriod = $derived(OPTIONS[billingPeriod.$ === 'month' ? 0 : 1])
  let formattedPlan = $derived(plan.formatted)

  function onSelect(option: (typeof OPTIONS)[number]) {
    const isMonthSelected = option === OPTIONS[0]
    const selected = isMonthSelected ? 'month' : 'year'

    selectSubscriptionPlan(plan[selected])

    billingPeriod.$ = selected

    trackEvent('toggle', {
      action: isMonthSelected ? 'off' : 'on',
      type: 'annual_billing',
      source: 'payment_dialog',
      plan: plan.selected?.name,
    })
  }
</script>

<Selector name="Billing period" active={selectedBillingPeriod} options={OPTIONS} {onSelect}>
  {#snippet children(option)}
    {@const isAnnualBilling = option.name === 'Annually'}
    <h3 class="flex h-[26px] w-full items-center justify-between gap-2">
      {option.name}

      {#if isAnnualBilling && formattedPlan}
        <div class="rounded-md bg-white px-2 py-[5px] text-xs font-medium text-green">
          <span class="mr-2">🎉</span>SAVE {formattedPlan.price.savePercentWithAnnual}%
        </div>
      {/if}
    </h3>

    <h4 class="align-bottom">
      ${formattedPlan?.price[isAnnualBilling ? 'year' : 'month'] || ''}

      <span class="text-sm font-normal text-waterloo">/ {isAnnualBilling ? 'Year' : 'Month'}</span>
    </h4>
  {/snippet}
</Selector>
