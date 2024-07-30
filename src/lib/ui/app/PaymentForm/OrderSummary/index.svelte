<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import Discount from './Discount.svelte'
  import Explanation from './Explanation.svelte'
  import StripePaymentButton from './StripePaymentButton.svelte'
  import { usePaymentFormCtx } from '../state.js'

  const { customer } = useCustomerCtx()
  const { paymentForm } = usePaymentFormCtx()

  let isTrialExpired = true

  let { isEligibleForSanbaseTrial, trialDaysLeft } = customer.$
</script>

<div class="min-w-[480px] max-w-[480px] gap-4 self-start column">
  <section class="gap-8 rounded-lg bg-athens px-8 py-6 column">
    <h2 class="text-lg font-semibold text-rhino">
      <div class="flex justify-between">
        Sanbase Pro - Billed monthly
        <span class="text-base font-normal text-waterloo">$49/ Month</span>
      </div>

      {#if isEligibleForSanbaseTrial}
        <span class="text-green">14 day Free Trial</span>
      {/if}
    </h2>

    <Discount></Discount>

    <div class="mt-4 gap-4 column">
      {#if isEligibleForSanbaseTrial}
        <h4 class="justify-between text-base font-medium text-waterloo row">
          Total you pay on May 10, 2022
          <span> $49</span>
        </h4>
      {/if}

      <h3 class="justify-between text-lg font-medium row">
        Today you pay <span>
          {#if isEligibleForSanbaseTrial}
            $0
          {:else}
            $49
          {/if}
        </span>
      </h3>

      {#if isEligibleForSanbaseTrial === false && trialDaysLeft < 1}
        <p class="-mt-1">
          Your trial has expired! If you have accidentally bypassed the free trial, please get in
          touch with
          <a href="mailto:support@santiment.net" class="text-green"> our support team</a>.
        </p>
      {/if}
    </div>

    <div class="gap-3 column">
      <Button variant="fill" size="lg" class="center">
        {#if isEligibleForSanbaseTrial}
          Start Free Trial
        {:else}
          Activate subscription
        {/if}
      </Button>

      <StripePaymentButton></StripePaymentButton>

      {#if isEligibleForSanbaseTrial}
        <p class="text-center text-waterloo">
          Cancel anytime. No charge before the end of the free trial
        </p>
      {/if}
    </div>
  </section>

  {#if paymentForm.$.isCardPayment || paymentForm.$.billingPeriod === 'year'}
    <section class="gap-6 rounded-lg bg-athens px-8 py-6 text-rhino column">
      <Explanation></Explanation>
    </section>
  {/if}
</div>
