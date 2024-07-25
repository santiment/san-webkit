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
  })
</script>

<div class="grid grid-cols-2 gap-4">
  <LabelInput label="Card number" class="col-span-2">
    <div id="card-element" class="rounded-md border px-4 py-2.5"></div>
  </LabelInput>

  <LabelInput label="First name" placeholder="Thomas"></LabelInput>

  <LabelInput label="Last name" placeholder="Johnson"></LabelInput>

  <LabelInput name="address_country" label="Country" placeholder="United States"></LabelInput>

  <LabelInput name="address_state" label="State / Region" placeholder="e.g. California"
  ></LabelInput>

  <LabelInput name="address_city" label="City" placeholder="e.g. Sacramento"></LabelInput>

  <LabelInput name="address_line1" label="Street Address" placeholder="e.g. 1483 Pearl Street"
  ></LabelInput>
</div>
