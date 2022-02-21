<script lang="ts">
  import { getPrice, priceFormatter } from '@/utils/plans'

  export let plan: SAN.Plan
  export let price: string
  export let selectedNameBilling: string
  export let percentOff = 0
  export let sanBalance = 0

  const hasSanDiscount = sanBalance >= 1000

  $: discount = percentOff ? 'Discount code' : hasSanDiscount && 'SAN Holder discount'
  $: discountPercentOff = percentOff || (hasSanDiscount ? 20 : 0)
  $: discounted = discountPercentOff ? plan.amount * (discountPercentOff / 100) : 0
  $: total = plan.amount - discounted

  const format = (amount) => priceFormatter(getPrice(amount))
</script>

<div class="c-waterloo">
  <div class="row justify mrg-m mrg--b">
    {selectedNameBilling}
    <div>{price}</div>
  </div>

  {#if discountPercentOff}
    <div class="row justify">
      {discount}
      {discountPercentOff}%
      <div class="c-accent">- {format(discounted)}</div>
    </div>
  {/if}

  <div class="hr" />

  <div class="total body-2 txt-m row justify v-center c-black">
    Total due
    <span class="h4 txt-b">{format(total)}</span>
  </div>
</div>

<style>
  .hr {
    margin: 16px 0;
    border-top: 1px solid var(--porcelain);
  }
</style>
