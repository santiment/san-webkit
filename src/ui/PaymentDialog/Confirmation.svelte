<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Skeleton from '@/ui/Skeleton.svelte'
  import PlanSelector from './PlanSelector.svelte'
  import Check from './Check.svelte'
  import DiscountInput from './DiscountInput.svelte'
  import { Billing } from '@/utils/plans'
  import SpecialOfferDiscount from './SpecialOfferDiscount.svelte'
  import AppleGooglePay from './AppleGooglePay.svelte'

  export let plans: SAN.Plan[]
  export let plan: SAN.Plan
  export let name: string
  export let price: string
  export let isSinglePlan: boolean
  export let isEligibleForTrial: boolean
  export let loading: boolean
  export let annualDiscount
  export let onSubmit: any

  let percentOff = 0

  $: isAnnualPlan = plan.interval === Billing.YEAR
  $: selectedNameBilling = name ? `${name} ${isAnnualPlan ? 'annual' : 'monthly'}` : ''
</script>

<div class="confirmation relative column">
  <Skeleton isActive={!plans.length}>
    <PlanSelector bind:plan {plans} {price} {selectedNameBilling} {annualDiscount} {isSinglePlan} />

    {#if isAnnualPlan && annualDiscount.isEligible}
      <SpecialOfferDiscount {selectedNameBilling} percentOff={annualDiscount.percent} />
    {:else}
      <DiscountInput bind:percentOff />

      <div class="holder row mrg-xl mrg--b">
        <Svg id="info" w="16" class="$style.info mrg-s mrg--r" />
        <div>
          Holding 1000 SAN tokens will result in a 20% discount.
          <a
            href="https://academy.santiment.net/san-tokens/how-to-buy-san-tokens/"
            target="_blank"
            class="link-pointer"
            rel="noopener noreferrer">Learn how to buy SAN.</a
          >
        </div>
      </div>
    {/if}

    <Check {plan} {percentOff} {isAnnualPlan} />

    <button
      type="submit"
      class="btn-1 btn--l row h-center fluid mrg-l mrg--t"
      class:loading
      on:click={onSubmit}
    >
      {isEligibleForTrial ? 'Start 14-Day Free Trial' : 'Purchase'}</button
    >
  </Skeleton>

  <AppleGooglePay />
</div>

<style lang="scss">
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

  :global(body:not(.desktop)) {
    .confirmation {
      padding: 24px 0 0;
      background: none;
    }

    .holder {
      max-width: unset;
    }
  }
</style>
