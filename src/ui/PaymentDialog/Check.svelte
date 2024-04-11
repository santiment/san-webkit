<script lang="ts">
  import { checkIsBusinessPlan, getPrice, priceFormatter } from '@/utils/plans'
  import { checkSanDiscount } from './utils'
  import { getCustomer$Ctx } from '@/stores/customer'

  export let plan: SAN.Plan
  export let percentOff = 0
  export let isAnnualPlan: boolean
  export let ctx = { total: 0 }

  const { customer$ } = getCustomer$Ctx()

  $: ({ sanBalance, isEligibleForTrial, annualDiscount } = $customer$)

  $: isBusiness = checkIsBusinessPlan(plan)
  $: hasSanDiscount = isBusiness ? false : checkSanDiscount(sanBalance)
  $: discount = isBusiness ? '' : getDiscount(annualDiscount, percentOff, hasSanDiscount)
  $: discountPercentOff = isBusiness
    ? percentOff
    : annualDiscount.percent || percentOff || (hasSanDiscount ? 20 : 0)
  $: discounted = discountPercentOff ? plan.amount * (discountPercentOff / 100) : 0
  $: total = plan.amount - discounted
  $: ctx.total = total

  const format = (amount) => priceFormatter(getPrice(amount))

  function getDiscount() {
    if (annualDiscount.isEligible) return 'Special offer discount'

    if (percentOff) return 'Promo code'

    return hasSanDiscount && 'SAN Holder discount'
  }
</script>

<div class="c-waterloo mrg-a mrg--t">
  {#if discountPercentOff}
    <div class="row justify">
      {discount}
      {discountPercentOff}%
      <div class="c-accent">- {format(discounted)}</div>
    </div>

    <div class="hr" />
  {/if}

  <div class="total body-2 txt-m row justify c-black">
    <div>
      Today you pay
      {#if !isBusiness && isEligibleForTrial}
        <div class="body-3 txt-r c-waterloo">After 14 days: {format(total)}</div>
      {:else}
        <div class="body-3 txt-r c-waterloo">
          The {isAnnualPlan ? 'annual' : 'monthly'} payment next time will be {format(plan.amount)}
        </div>
      {/if}
    </div>
    <span class="h3 mrg-xxl mrg--l">{!isBusiness && isEligibleForTrial ? '$0' : format(total)}</span
    >
  </div>
</div>

<style>
  .hr {
    margin: 16px 0;
    border-top: 1px solid var(--porcelain);
  }
</style>
