<script>import Svg from './../../ui/Svg/svelte';
import Skeleton from './../../ui/Skeleton.svelte';
import PlanSelector from './PlanSelector.svelte';
import Check from './Check.svelte';
import DiscountInput from './DiscountInput.svelte';
import { Billing } from './../../utils/plans';
import SpecialOfferDiscount from './SpecialOfferDiscount.svelte';
import AppleGooglePay from './AppleGooglePay.svelte';
import { noop } from './../../utils';
import { BROWSER } from 'esm-env';
export let plans;
export let plan;
export let name;
export let price;
export let isEligibleForTrial;
export let loading;
export let annualDiscount;
export let onSubmit;
export let source;
export let closeDialog = noop;
let percentOff = 0;
let ctx = { total: 0, coupon: '' };
$: isAnnualPlan = plan.interval === Billing.YEAR;
$: selectedNameBilling = name ? `${name} ${isAnnualPlan ? 'annual' : 'monthly'}` : '';
</script>

<div class="confirmation relative column">
  <Skeleton isActive={!plans.length}>
    <PlanSelector bind:plan {plans} {price} {selectedNameBilling} {annualDiscount} />

    {#if isAnnualPlan && annualDiscount.isEligible}
      <SpecialOfferDiscount {selectedNameBilling} percentOff={annualDiscount.percent} />
    {:else}
      <DiscountInput bind:percentOff bind:ctx />

      {#if name?.toLowerCase().includes('business') === false}
        <div class="holder row mrg-xl mrg--b">
          <Svg id="info" w="16" class="info-dmlz6X mrg-s mrg--r" />
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
    {/if}

    <Check {plan} {percentOff} {isAnnualPlan} bind:ctx />

    <button
      type="submit"
      class="btn-1 btn--l row h-center fluid mrg-l mrg--t"
      class:loading
      on:click={onSubmit}
    >
      {isEligibleForTrial ? 'Start 14-Day Free Trial' : 'Purchase'}</button
    >
  </Skeleton>

  {#if BROWSER}
    <AppleGooglePay {ctx} {plan} {source} {closeDialog} />
  {/if}
</div>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
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

:global(.info-dmlz6X) {
  margin-top: 2px;
}

:global(body:not(.desktop)) .confirmation {
  padding: 24px 0 0;
  background: none;
}
:global(body:not(.desktop)) .holder {
  max-width: unset;
}</style>
