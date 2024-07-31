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

  let { customProp, resolve, reject, Controller }: TDialogProps & { customProp: boolean } = $props()

  usePaymentFormCtx()
  useStripeCtx()
  useCustomerCtx()

  let isBusinessPlanSelected = false

  const SCREENS = ['1. Choose your plan', '2. Payment details']
  let screen = $state(SCREENS[0])
</script>

<Dialog class="w-full column">
  <DialogHeader screens={SCREENS} bind:active={screen}></DialogHeader>

  <div class="flex gap-10 overflow-y-scroll px-36 pb-20 pt-16">
    {#if screen === SCREENS[0]}
      <PlansScreen></PlansScreen>
    {:else}
      <div class="gap-10 self-start column">
        <h1 class="color-rhino text-2xl font-medium">Sanbase Pro plan</h1>

        <BillingPeriodSelector></BillingPeriodSelector>

        <PaymentMethodSelector {isBusinessPlanSelected}></PaymentMethodSelector>
      </div>

      <OrderSummary></OrderSummary>
    {/if}
  </div>
</Dialog>
