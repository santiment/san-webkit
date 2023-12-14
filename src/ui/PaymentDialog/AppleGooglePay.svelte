<script lang="ts">
  import { stripe as stripe$ } from '@/stores/stripe'
  import { startStripePaymentButtonsFlow } from './flow'
  import { onPaymentSuccess, onPaymentError } from './utils'
  import { getCustomer$Ctx } from '@/stores/customer'
  import { noop } from '@/utils'

  export let plan: SAN.Plan
  export let source: string
  export let closeDialog = noop
  export let ctx = { total: 0, coupon: '' }

  const { customer$ } = getCustomer$Ctx()

  $: stripe = $stripe$

  $: plan.name && stripe && handleStripButtons(stripe, plan, ctx)

  function handleStripButtons(stripe: stripe.Stripe, plan: SAN.Plan, ctx: any) {
    console.log(ctx)

    startStripePaymentButtonsFlow(stripe, {
      total: ctx.total,
      plan,
      coupon: ctx.coupon,
      onSuccess,
      onError,
    })
  }

  function onSuccess(data: any) {
    onPaymentSuccess(data, source, customer$)
    closeDialog()
  }

  function onError(e: any) {
    onPaymentError(e, source)
  }
</script>

<div id="payment-request-button" class="mrg-s mrg--t" />
