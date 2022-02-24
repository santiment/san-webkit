<script lang="ts">
  import { stripe } from '@/stores/stripe'
  import Input from './Input.svelte'

  export let StripeCard: stripe.elements.Element | undefined
  export let nightMode = false
  let ccNode

  const INPUT_STYLE = {
    base: {
      fontSize: '14px',
      color: nightMode ? '#fff' : '#2f354d', // black
      fontFamily: 'Proxima Nova, sans-serif',
      '::placeholder': {
        color: nightMode ? '#363a52' : '#cad0de', // casper
      },
    },
    invalid: {
      color: '#ff5b5b', // red
    },
  }
  const SETTINGS = { style: INPUT_STYLE }

  $: $stripe && ccNode && mountCC()

  function mountCC() {
    StripeCard = $stripe?.elements().create('card', SETTINGS)
    StripeCard?.mount('#card-element')
  }
</script>

<Input title="Card number">
  <div id="card-element" slot="input" bind:this={ccNode} class="input" />
</Input>

<style>
  #card-element {
    height: 40px;
    padding: 11px 13px;
  }
</style>
