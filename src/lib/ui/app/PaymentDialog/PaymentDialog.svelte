<script context="module">
  import Component from './PaymentDialog.svelte'

  export const showPaymentDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import { useStripeCtx } from '$lib/ctx/stripe.js'
  import DialogHeader from './DialogHeader.svelte'
  import BillingPeriodSelector from './BillingPeriodSelector/index.svelte'
  import PaymentMethodSelector from './PaymentMethodSelector/index.svelte'
  import CardForm from './CardForm/index.svelte'

  let { customProp, resolve, reject, Controller }: TDialogProps & { customProp: boolean } = $props()

  useStripeCtx()
</script>

<Dialog class="w-full column">
  <DialogHeader></DialogHeader>

  <div class="gap-10 overflow-auto px-36 pb-20 pt-16 column">
    <h1 class="color-rhino text-2xl font-medium">Sanbase Pro plan</h1>

    <BillingPeriodSelector></BillingPeriodSelector>

    <PaymentMethodSelector></PaymentMethodSelector>

    <CardForm></CardForm>
  </div>
</Dialog>
