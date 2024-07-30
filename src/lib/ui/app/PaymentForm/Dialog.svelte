<script context="module">
  import Component from './Dialog.svelte'

  export const showPaymentDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import { useStripeCtx } from '$lib/ctx/stripe.js'
  import DialogHeader from './DialogHeader.svelte'
  import BillingPeriodSelector from './BillingPeriodSelector/index.svelte'
  import PaymentMethodSelector from './PaymentMethodSelector/index.svelte'
  import OrderSummary from './OrderSummary/index.svelte'
  import { usePaymentFormCtx } from './state.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'

  let { customProp, resolve, reject, Controller }: TDialogProps & { customProp: boolean } = $props()

  usePaymentFormCtx()
  useStripeCtx()
  const { customer } = useCustomerCtx()

  $inspect(customer.$)

  let isBusinessPlanSelected = false
</script>

<Dialog class="w-full column">
  <DialogHeader></DialogHeader>

  <div class="flex gap-10 overflow-auto px-36 pb-20 pt-16">
    <div class="gap-10 self-start column">
      <h1 class="color-rhino text-2xl font-medium">Sanbase Pro plan</h1>

      <BillingPeriodSelector></BillingPeriodSelector>

      <PaymentMethodSelector {isBusinessPlanSelected}></PaymentMethodSelector>
    </div>

    <OrderSummary></OrderSummary>
  </div>
</Dialog>
