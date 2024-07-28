<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import Discount from './Discount.svelte'
  import Explanation from './Explanation.svelte'
  import StripePaymentButton from './StripePaymentButton.svelte'
  import { usePaymentFormCtx } from '../state.js'

  const { paymentForm } = usePaymentFormCtx()

  let isTrialExpired = true
</script>

<div class="min-w-[480px] max-w-[480px] gap-4 column">
  <section class="gap-8 rounded-lg bg-athens px-8 py-6 column">
    <h2 class="flex justify-between text-lg font-semibold text-rhino">
      Sanbase Pro - Billed monthly
      <span class="text-base font-normal text-waterloo">$49/ Month</span>
    </h2>

    <Discount></Discount>

    <div class="mt-4 gap-4 column">
      <h3 class="text-lg font-medium">Today you pay <span>$49</span></h3>

      {#if isTrialExpired}
        <p class="-mt-1">
          Your trial has expired! If you have accidentally bypassed the free trial, please get in
          touch with
          <a href="mailto:support@santiment.net" class="text-green"> our support team</a>.
        </p>
      {/if}
    </div>

    <div class="gap-3 column">
      <Button variant="fill" size="lg" class="center">Start Free Trial</Button>
      <StripePaymentButton></StripePaymentButton>
    </div>
  </section>

  {#if paymentForm.$.isCardPayment || paymentForm.$.billingPeriod === 'year'}
    <section class="gap-6 rounded-lg bg-athens px-8 py-6 text-rhino column">
      <Explanation></Explanation>
    </section>
  {/if}
</div>
