<script lang="ts">
  import { useStripeCtx } from '$lib/ctx/stripe.js'
  import LabelInput from './LabelInput.svelte'

  const { stripe } = useStripeCtx()

  $effect(() => {
    if (!stripe.$) return

    const nightMode = false
    const SETTINGS = {
      hidePostalCode: true,
      style: {
        base: {
          fontSize: '14px',
          color: nightMode ? '#fff' : '#2f354d',
          fontFamily: 'Proxima Nova, sans-serif',
          '::placeholder': {
            color: nightMode ? '#363a52' : '#cad0de',
          },
        },
        invalid: {
          color: '#ff5b5b',
        },
      },
    }

    const stripeCard = stripe.$.elements().create('card', SETTINGS)
    stripeCard?.mount('#card-element')

    // const elements = stripe.$.elements({
    //   clientSecret: 'seti_1Phe0qCA0hGU8IEVhFY3DjL8_secret_QYlXrQXQuVhn3BbugcuKK0bQM7mEZBD',
    // })
    // const addressElement = elements.create('address', { mode: 'billing' })
    // addressElement.mount('#address-element')

    const getCssColor = (color: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(`--${color}`)

    // Create and mount the Address Element in shipping mode
    const addressElement = stripe.$.elements({
      clientSecret: '',
      fonts: [
        {
          family: 'Proxima Nova',
          src: 'url(/src/lib/fonts/ProximaNova-Regular.woff2)',
          weight: '400',
        },
        {
          family: 'Proxima Nova',
          src: 'url(/src/lib/fonts/ProximaNova-Semibold.woff2)',
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
            color: getCssColor('waterloo'),
          },
          '.Input': {
            boxShadow: 'none',
            padding: '11px 16px',
            height: '40px',
            fontSize: '14px',
            color: getCssColor('black'),
            transition: 'none',
          },
          '.Input::placeholder': {
            color: getCssColor('casper'),
          },
          '.Input:hover': {
            borderColor: getCssColor('green'),
          },

          '.Input:focus': {
            boxShadow: 'none',
            borderColor: getCssColor('green'),
          },
        },
        variables: {
          fontFamily: 'Proxima Nova',
          borderRadius: '4px',
          colorBackground: getCssColor('white'),
          gridRowSpacing: '16px',
        },
      },
    }).create('address', {
      mode: 'billing',
    })
    addressElement.mount('#address-element')
  })
</script>

<div class="grid gap-4">
  <LabelInput label="Card number" class="">
    <div id="card-element" class="h-10 rounded-md border px-4 py-2.5 hover:border-green"></div>
  </LabelInput>

  <div id="address-element"></div>
</div>
