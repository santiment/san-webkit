<script lang="ts">
  import Input from './Input.svelte'
  import PlanSelector from './PlanSelector.svelte'
  import Check from './Check.svelte'
  import DiscountInput from './DiscountInput.svelte'
  import Skeleton from '../Skeleton.svelte'
  import Svg from '../Svg/svelte'

  export let plans: SAN.Plan[]
  export let plan: SAN.Plan
  export let name: string
  export let price: string
  export let isSinglePlan: boolean
  export let isEligibleForTrial: boolean

  let percentOff = 0

  $: selectedNameBilling = name ? `${name} ${plan.interval}ly` : ''
</script>

<div class="confirmation relative">
  <Skeleton isActive={!plans.length}>
    <PlanSelector bind:plan {plans} {price} {selectedNameBilling} {isSinglePlan} />

    <DiscountInput bind:percentOff />

    <div class="holder row mrg-xl mrg--b">
      <Svg id="info" w="16" class="$style.info mrg-s mrg--r" />
      <div>
        Holding 1000 SAN tokens will result in a 20% discount.
        <a
          href="https://santiment.net/about-santiment/how-to-buy-san/"
          target="_blank"
          rel="noopener noreferrer">Learn how to buy SAN.</a>
      </div>
    </div>

    <Check {plan} {price} {selectedNameBilling} {percentOff} />

    <button type="submit" class="btn-1 btn--l row h-center fluid mrg-l mrg--t">
      {isEligibleForTrial ? 'Start 14-Day Free Trial' : 'Pay'}</button>
  </Skeleton>
</div>

<style>
  .confirmation {
    grid-area: confirmation;
    background: var(--athens);
    border-radius: 4px;
    padding: 27px 32px 24px;
  }

  .holder {
    padding: 12px;
    background: var(--green-light-1);
    border-radius: 4px;
    fill: var(--waterloo);
    max-width: 355px;
  }
  .info {
    margin-top: 2px;
  }
</style>
