<script lang="ts">
  import type { StripeCardElementOptions } from '@stripe/stripe-js'
  import { untrack } from 'svelte'
  import { useDeviceCtx } from '../../../../../../ctx/device/index.svelte.js'
  import { useStripeCtx } from '../../../../../../ctx/stripe/index.js'
  import { getBrowserCssVariable } from '../../../../../utils/index.js'
  import fontRegularUrl from '../../../../../../fonts/ProximaNova-Regular.woff2'
  import fontSemiboldUrl from '../../../../../../fonts/ProximaNova-Semibold.woff2'
  import LabelInput from './LabelInput.svelte'
  import { usePaymentFormCtx } from '../../../state.js'

  let { delayStripe = 0 } = $props()

  const { paymentForm } = usePaymentFormCtx()
  const { stripe } = useStripeCtx({ delay: delayStripe })
  const { device } = useDeviceCtx()

  let clientSecret = $derived(paymentForm.$.setupIntentClientSecret)

  $effect(() => {
    if (!stripe.$) return
    if (!clientSecret) return

    const { isMobile } = untrack(() => device.$)
    const fontSize = isMobile ? '16px' : '14px'

    const SETTINGS = {
      hidePostalCode: true,
      style: {
        base: {
          fontSize,
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
            fontSize,
            boxShadow: 'none',
            padding: isMobile ? '10px 16px' : '11px 16px',
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
          fontSmooth: 'never',
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
      cardElement.destroy()
      addressElement.destroy()

      // NOTE: Cleaning up Stripe memory leak
      try {
        // @ts-expect-error
        const { _controller } = addressElement
        if (_controller) {
          Object.values(_controller._frames).forEach(
            (frame: any) => frame.type === 'GOOGLE_MAPS_APP' && frame.destroy(),
          )
        }
      } catch (e) {
        console.error('Failed to clean up Stripe GOOGLE_MAPS_APP', e)
      }
    }
  })
</script>

<div class="grid gap-4 md:text-base">
  <LabelInput label="Card number" class="">
    <div id="card-element" class="h-10 rounded-md border px-4 py-2.5 hover:border-green">
      <span class="text-casper">Card number</span>
    </div>
  </LabelInput>

  <div id="address-element" class="min-h-[210px]">
    <div class="gap-4 column">
      <LabelInput label="Full name" placeholder="First and last name"></LabelInput>
      <LabelInput label="Country or region" placeholder="Country or region"></LabelInput>
      <LabelInput label="Address" placeholder="Street address"></LabelInput>
    </div>
  </div>
</div>

<style>
  :global {
    .StripeElement--focus {
        --tw-border-opacity: 1;
        border-color: rgb(var(--c-green) / var(--tw-border-opacity))
    }
    .StripeElement--invalid {
        --tw-border-opacity: 1 !important;
        border-color: rgb(var(--c-red) / var(--tw-border-opacity)) !important
    }
  }
</style>
