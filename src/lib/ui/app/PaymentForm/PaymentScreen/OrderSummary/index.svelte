<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { getFormattedMonthDayYear, modifyDate } from '$lib/utils/dates.js'
  import Discount from './Discount.svelte'
  import Explanation from './Explanation.svelte'
  import StripePaymentButton from './StripePaymentButton.svelte'
  import { usePaymentFormCtx } from '../../state.js'

  const { customer } = useCustomerCtx()
  const { paymentForm } = usePaymentFormCtx()

  let isEligibleForSanbaseTrial = $derived(customer.$.isEligibleForSanbaseTrial)
  let trialDaysLeft = $derived(customer.$.trialDaysLeft)
  let isCardPayment = $derived(paymentForm.$.isCardPayment)
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
        {@const now = new Date()}
        <h4 class="justify-between text-base font-medium text-waterloo row">
          Total you pay on {getFormattedMonthDayYear(modifyDate(now, { days: +14 }))}
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
      {#if isCardPayment === false}
        <Button variant="fill" size="lg" class="center">
          {#if isEligibleForSanbaseTrial}
            Contact us
          {:else}
            Connect MetaMask
          {/if}
        </Button>
      {:else}
        <Button variant="fill" size="lg" class="center">
          {#if isEligibleForSanbaseTrial}
            Start Free Trial
          {:else}
            Activate subscription
          {/if}
        </Button>
      {/if}

      {#if isCardPayment}
        <StripePaymentButton></StripePaymentButton>
      {/if}

      {#if isEligibleForSanbaseTrial && isCardPayment}
        <p class="text-center text-waterloo">
          Cancel anytime. No charge before the end of the free trial
        </p>
      {/if}
    </div>
  </section>

  {#if isCardPayment || paymentForm.$.billingPeriod === 'year'}
    <section class="gap-6 rounded-lg bg-athens px-8 py-6 text-rhino column">
      <Explanation></Explanation>
    </section>
  {/if}
</div>
