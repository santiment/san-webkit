<script lang="ts">
  import {
    Billing,
    formatMonthlyPrice,
    formatPrice,
    getAlternativePlan,
    getSavedAmount,
    Plan,
  } from '@/utils/plans'
  import { SubscriptionCardType, SubscriptionType } from './utils'

  export let type: SubscriptionCardType
  export let subscriptionType: SubscriptionType
  export let plan: SAN.Plan
  export let annualDiscount: SAN.AnnualDiscount
  export let plans: SAN.Plan[]

  $: monthProPlan = plans.find(
    ({ interval, name }) => interval === Billing.MONTH && name === Plan.PRO,
  )
  $: yearProPlan = plans.find(
    ({ interval, name }) => interval === Billing.YEAR && name === Plan.PRO,
  )
  $: monthProPlusPlan = plans.find(
    ({ interval, name }) => interval === Billing.MONTH && name === Plan.PRO_PLUS,
  )
  $: yearProPlusPlan = plans.find(
    ({ interval, name }) => interval === Billing.YEAR && name === Plan.PRO_PLUS,
  )
</script>

{#if type === SubscriptionCardType.Current}
  {#if subscriptionType !== SubscriptionType.OnTrial && subscriptionType !== SubscriptionType.ProFirstMonth}
    <div class="billing-info column">
      <div class="caption txt-m c-waterloo">Billed monthly:</div>
      <div class="body-1 txt-m">{plan && formatPrice(plan)}</div>
    </div>
  {/if}
{/if}

{#if type === SubscriptionCardType.Suggested}
  {#if subscriptionType === SubscriptionType.Free || subscriptionType === SubscriptionType.FreeTrialFinished}
    <div class="billing-info column">
      <div class="caption txt-m c-waterloo">Billed monthly:</div>
      <div class="body-1 txt-m">{monthProPlan && formatPrice(monthProPlan)}</div>
    </div>
  {:else if subscriptionType === SubscriptionType.OnTrial || subscriptionType === SubscriptionType.ProFirstMonth}
    <div class="billing-info column">
      <div class="caption txt-m c-waterloo">
        You save {yearProPlan &&
          getSavedAmount(
            yearProPlan,
            getAlternativePlan(yearProPlan, plans),
            annualDiscount.discount.percentOff,
          )} this year:
      </div>
      <div class="body-1 txt-m">
        {yearProPlan && formatMonthlyPrice(yearProPlan, annualDiscount.discount.percentOff)}/mo
      </div>
    </div>
  {/if}
{/if}

{#if type === SubscriptionCardType.Next}
  {#if subscriptionType === SubscriptionType.Free || subscriptionType === SubscriptionType.FreeTrialFinished || subscriptionType === SubscriptionType.Pro}
    <div class="billing-info column">
      <div class="caption txt-m c-waterloo">Billed monthly:</div>
      <div class="body-1 txt-m">{monthProPlusPlan && formatPrice(monthProPlusPlan)}</div>
    </div>
  {:else if subscriptionType === SubscriptionType.OnTrial || subscriptionType === SubscriptionType.ProFirstMonth}
    <div class="billing-info column">
      <div class="caption txt-m c-waterloo">
        You save {yearProPlusPlan &&
          getSavedAmount(
            yearProPlusPlan,
            getAlternativePlan(yearProPlusPlan, plans),
            annualDiscount.discount.percentOff,
          )} this year:
      </div>
      <div class="body-1 txt-m">
        {yearProPlusPlan &&
          formatMonthlyPrice(yearProPlusPlan, annualDiscount.discount.percentOff)}/mo
      </div>
    </div>
  {/if}
{/if}

<style lang="scss">
  .billing-info {
    align-items: flex-end;
  }
</style>
