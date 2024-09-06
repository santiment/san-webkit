<script lang="ts">
  import type { StripeCardElementOptions } from '@stripe/stripe-js'
  import { useStripeCtx } from '$lib/ctx/stripe/index.js'
  import { getBrowserCssVariable } from '$ui/utils/index.js'
  import fontRegularUrl from '$lib/fonts/ProximaNova-Regular.woff2'
  import fontSemiboldUrl from '$lib/fonts/ProximaNova-Semibold.woff2'
  import LabelInput from './LabelInput.svelte'
  import { usePaymentFormCtx } from '../../../state.js'

  const { paymentForm } = usePaymentFormCtx()
  const { stripe } = useStripeCtx()

  let clientSecret = $derived(paymentForm.$.setupIntentClientSecret)

  $effect(() => {
    if (!stripe.$) return
    if (!clientSecret) return

    const SETTINGS = {
      hidePostalCode: true,
      style: {
        base: {
          fontSize: '14px',
          color: getBrowserCssVariable('black'),
          fontFamily: 'Proxima Nova, sans-serif',
          '::placeholder': {
            color: getBrowserCssVariable('casper'),
          },
        },
        invalid: {
          color: getBrowserCssVariable('red'),
        },
      },
    } as StripeCardElementOptions

    const elements = stripe.$.elements({
      clientSecret,
      fonts: [
        {
          family: 'Proxima Nova',
          src: `url(${fontRegularUrl})`,
          weight: '400',
        },
        {
          family: 'Proxima Nova',
          src: `url(${fontSemiboldUrl})`,
          weight: '600',
        },
      ],
      appearance: {
        rules: {
          '.Label': {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600',
            marginBottom: '3px',
            color: getBrowserCssVariable('waterloo'),
          },

          '.Input': {
            boxShadow: 'none',
            padding: '11px 16px',
            fontSize: '14px',
            color: getBrowserCssVariable('black'),
            borderColor: getBrowserCssVariable('porcelain'),
            transition: 'none',
          },
          '.Input::placeholder': {
            color: getBrowserCssVariable('casper'),
          },
          '.Input:hover': {
            borderColor: getBrowserCssVariable('green'),
          },
          '.Input:focus': {
            boxShadow: 'none',
            borderColor: getBrowserCssVariable('green'),
          },
        },
        variables: {
          fontFamily: 'Proxima Nova, sans-serif',
          borderRadius: '4px',
          gridRowSpacing: '16px',
          colorBackground: getBrowserCssVariable('white'),
          colorText: getBrowserCssVariable('black'),
        },
      },
    })

    const cardElement = elements.create('card', SETTINGS)
    cardElement.mount('#card-element')

    const addressElement = elements.create('address', { mode: 'billing' })
    addressElement.mount('#address-element')

    Object.assign(paymentForm.$, { cardElement, addressElement })

    return () => {
      Object.assign(paymentForm.$, { cardElement: null, addressElement: null })
    }
  })
</script>

<div class="grid gap-4">
  <LabelInput label="Card number" class="">
    <div id="card-element" class="h-10 rounded-md border px-4 py-2.5 hover:border-green"></div>
  </LabelInput>

  <div id="address-element"></div>
</div>

<style lang="postcss">
  :global {
    .StripeElement--invalid {
      @apply border-red;
    }
  }
</style>
