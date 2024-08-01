<script context="module">
  import Component from './Dialog.svelte'

  export const showPaymentDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import { useStripeCtx } from '$lib/ctx/stripe.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { usePaymentFormCtx } from './state.js'
  import DialogHeader from './DialogHeader.svelte'
  import PlansScreen from './PlansScreen/index.svelte'
  import BillingPeriodSelector from './PaymentScreen/BillingPeriodSelector/index.svelte'
  import PaymentMethodSelector from './PaymentScreen/PaymentMethodSelector/index.svelte'
  import OrderSummary from './PaymentScreen/OrderSummary/index.svelte'
  import { useSubscriptionPlanButtonCtx } from './PlansScreen/ctx.js'

  let { customProp, resolve, reject, Controller }: TDialogProps & { customProp: boolean } = $props()

  const { paymentForm, subscriptionPlan, selectSubscriptionPlan } = usePaymentFormCtx()
  useStripeCtx()
  useCustomerCtx()

  const SCREENS = ['1. Choose your plan', '2. Payment details']
  let screen = $state(SCREENS[0])

  useSubscriptionPlanButtonCtx({
    onBillingPeriodChangeClick(plan) {},
    onPlanButtonClick(plan) {
      selectSubscriptionPlan(plan)
      screen = SCREENS[1]
    },
  })
</script>

<Dialog class="w-full column">
  <DialogHeader screens={SCREENS} bind:active={screen}></DialogHeader>

  <div class="flex gap-10 overflow-y-scroll px-36 pb-20 pt-16">
    {#if screen === SCREENS[0]}
      <PlansScreen></PlansScreen>
    {:else}
      <div class="w-full gap-10 self-start column">
        <h1 class="color-rhino text-2xl font-medium">
          {#if subscriptionPlan.$.formatted}
            {subscriptionPlan.$.formatted.name} plan
          {:else}
            Unknown plan
          {/if}
        </h1>

        <BillingPeriodSelector></BillingPeriodSelector>

        <PaymentMethodSelector></PaymentMethodSelector>
      </div>

      <OrderSummary></OrderSummary>
    {/if}
  </div>
</Dialog>
