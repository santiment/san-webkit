<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { getFormattedMonthDayYear, modifyDate } from '$lib/utils/dates.js'
  import Discount from './Discount.svelte'
  import Explanation from './Explanation.svelte'
  import StripePaymentButton from './StripePaymentButton.svelte'
  import { usePaymentFormCtx } from '../../state.js'
  import { useStripeCtx } from '$lib/ctx/stripe/index.js'
  import { usePaymentFlow, type TPaymentFlowResult } from '../../flow.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'
  import { onSupportClick } from '$lib/utils/support.js'
  import ConnectMetamask from './ConnectMetamask.svelte'

  let {
    onSuccess,
    onError,
  }: {
    onSuccess?: (data: TPaymentFlowResult) => void
    onError?: () => void
  } = $props()

  const { Controller } = getDialogControllerCtx()
  const { stripe: _stripe } = useStripeCtx()
  const { customer, currentUser } = useCustomerCtx()
  const { paymentForm, billingPeriod, subscriptionPlan, discount } = usePaymentFormCtx()
  const { startCardPaymentFlow } = usePaymentFlow()

  let formattedPlan = $derived(subscriptionPlan.$.formatted)
  let planPrice = $derived(formattedPlan?.price[billingPeriod.$])
  let discountedPrice = $derived(discount.$?.price || planPrice)
  let isConsumerPlan = $derived(!formattedPlan?.isBusiness)

  let isEligibleForSanbaseTrial = $derived(customer.$.isEligibleForSanbaseTrial && isConsumerPlan)
  let trialDaysLeft = $derived(customer.$.trialDaysLeft)
  let isCardPayment = $derived(paymentForm.$.isCardPayment)

  let isAnnualBilling = $derived(billingPeriod.$ === 'year')

  let isWalletCannected = $derived((currentUser.$$?.ethAccounts.length ?? 0) > 0)
  let isPaymentInProcess = $state(false)

  async function onPayClick() {
    isPaymentInProcess = true

    startCardPaymentFlow()
      .then((data) => {
        onPaymentSuccess(data)
      })
      .catch((e) => {
        onPaymentError(e)
      })
  }

  function onPaymentSuccess(data: TPaymentFlowResult) {
    Controller.close()
    onSuccess?.(data)
  }

  function onPaymentError(e?: any) {
    console.log(e)
    isPaymentInProcess = false
    onError?.()
  }
</script>

<div
  class="min-w-[400px] max-w-[480px] gap-4 self-start column md:mt-10 md:min-w-0 md:max-w-full md:gap-2 md:[&>*]:-mx-5 md:[&>*]:rounded-none"
>
  <section class="gap-8 rounded-lg bg-athens px-8 py-6 column">
    <h2 class="text-lg font-semibold text-rhino">
      <div class="flex justify-between">
        {#if formattedPlan}
          {formattedPlan.name} - Billed {isAnnualBilling ? 'annually' : 'monthly'}
          <span class="text-base font-normal text-waterloo">
            ${planPrice}/ {isAnnualBilling ? 'Year' : 'Month'}
          </span>
        {:else}
          Unknown plan
        {/if}
      </div>

      {#if isEligibleForSanbaseTrial}
        <span class="text-green">14 day Free Trial</span>
      {/if}
    </h2>

    {#if isConsumerPlan}
      <Discount></Discount>
    {/if}

    <div class="mt-4 gap-4 column">
      {#if isConsumerPlan && discount.$}
        <div class="flex justify-between border-b pb-3 text-base font-medium text-waterloo">
          {discount.$.description}
          {discount.$.percentOff}%
          <span class="text-green">- ${discount.$.priceOff}</span>
        </div>
      {/if}

      {#if isEligibleForSanbaseTrial}
        {@const now = new Date()}
        <h4 class="flex justify-between text-base font-medium text-waterloo">
          Total you pay on {getFormattedMonthDayYear(modifyDate(now, { days: +14 }))}
          <span> ${discountedPrice}</span>
        </h4>
      {/if}

      <h3 class="justify-between text-lg font-medium row">
        Today you pay <span>
          {#if isEligibleForSanbaseTrial}
            $0
          {:else}
            ${discountedPrice}
          {/if}
        </span>
      </h3>

      {#if isConsumerPlan && isEligibleForSanbaseTrial === false && trialDaysLeft < 1}
        <p class="-mt-1">
          Your trial has expired! If you have accidentally bypassed the free trial, please get in
          touch with
          <a href="mailto:support@santiment.net" class="text-green" onclick={onSupportClick}>
            our support team</a
          >.
        </p>
      {/if}
    </div>

    <div class="gap-3 column">
      {#if isCardPayment === false}
        {#if isEligibleForSanbaseTrial || isWalletCannected}
          <Button
            variant="fill"
            size="lg"
            class="center"
            href="mailto:support@santiment.net"
            data-source="payment_form_order"
            data-type="contact_us"
            onclick={onSupportClick}
          >
            Contact us
          </Button>
        {:else}
          <ConnectMetamask></ConnectMetamask>
        {/if}
      {:else}
        <Button
          variant="fill"
          size="lg"
          class="center"
          loading={isPaymentInProcess}
          onclick={onPayClick}
        >
          {#if isEligibleForSanbaseTrial}
            Start Free Trial
          {:else}
            Activate subscription
          {/if}
        </Button>
      {/if}

      {#if isCardPayment}
        <StripePaymentButton onSuccess={onPaymentSuccess} onError={onPaymentError}
        ></StripePaymentButton>
      {/if}

      {#if isConsumerPlan && isEligibleForSanbaseTrial && isCardPayment}
        <p class="text-center text-waterloo">
          Cancel anytime. No charge before the end of the free trial
        </p>
      {/if}
    </div>
  </section>

  {#if isCardPayment || isAnnualBilling}
    <section class="gap-6 rounded-lg bg-athens px-8 py-6 text-rhino column md:-mb-10">
      <Explanation price={planPrice}></Explanation>
    </section>
  {/if}
</div>
