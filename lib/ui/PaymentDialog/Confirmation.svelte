<script>import Svg from './../../ui/Svg/svelte';
import Skeleton from './../../ui/Skeleton.svelte';
import PlanSelector from './PlanSelector.svelte';
import Check from './Check.svelte';
import DiscountInput from './DiscountInput.svelte';
import { Billing } from './../../utils/plans';
import SpecialOfferDiscount from './SpecialOfferDiscount.svelte';
export let plans;
export let plan;
export let name;
export let price;
export let isSinglePlan;
export let isEligibleForTrial;
export let loading;
export let sanBalance;
export let annualDiscount = {};
let percentOff = 0;

$: isAnnualPlan = plan.interval === Billing.YEAR;

$: selectedNameBilling = name ? `${name} ${isAnnualPlan ? 'annual' : 'monthly'}` : '';</script>

<div class="confirmation relative column">
  <Skeleton isActive={!plans.length}>
    <PlanSelector bind:plan {plans} {price} {selectedNameBilling} {annualDiscount} {isSinglePlan} />

    {#if isAnnualPlan && annualDiscount.isEligible}
      <SpecialOfferDiscount {selectedNameBilling} percentOff={annualDiscount.discount.percentOff} />
    {:else}
      <DiscountInput bind:percentOff />

      <div class="holder row mrg-xl mrg--b">
        <Svg id="info" w="16" class="info-1b8v6D mrg-s mrg--r" />
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

    <Check
      {plan}
      {price}
      {selectedNameBilling}
      {percentOff}
      {sanBalance}
      {isAnnualPlan}
      {isEligibleForTrial}
      annualDiscount={isAnnualPlan ? annualDiscount : {}}
    />

    <button type="submit" class="btn-1 btn--l row h-center fluid mrg-l mrg--t" class:loading>
      {isEligibleForTrial ? 'Start 14-Day Free Trial' : 'Purchase'}</button
    >
  </Skeleton>
</div>

<style >.confirmation {
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

:global(.info-1b8v6D) {
  margin-top: 2px;
}

:global(body:not(.desktop)) .confirmation {
  padding: 24px 0 0;
  background: none;
}
:global(body:not(.desktop)) .holder {
  max-width: unset;
}</style>
