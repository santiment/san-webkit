<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Checkmark from './Checkmark.svelte'
  import { CardBrandIllustration } from './utils'

  export let savedCard: SAN.PaymentCard

  $: ({ last4, expMonth, expYear, brand } = savedCard || {})
</script>

<section class="body-2">
  <div class="card border">
    <div class="row justify">
      <Svg illus {...CardBrandIllustration[brand]} />
      <Checkmark />
    </div>

    <div class="row justify data">
      <div class="row v-center">
        <span class="dots c-casper">····</span>
        {last4}
      </div>
      <div class="c-waterloo">{expMonth} / {expYear}</div>
    </div>
  </div>

  <div class="btn-2 fluid txt-center mrg-xl mrg--t mrg--b" on:click={() => (savedCard = undefined)}>
    Use another card
  </div>

  <p class="caption c-waterloo">
    Santiment never stores your payment credentials. All details are encrypted on not accessible to
    Santiment or any of the public or private community. All payments are made in an easy and secure
    fashion with just two clicks on our Pricing page.
  </p>
</section>

<style>
  .card {
    padding: 16px;
  }

  .data {
    margin-top: 42px;
  }

  .dots {
    font-size: 30px;
    line-height: 0;
    margin: -5px 8px 0 0;
    letter-spacing: 4px;
  }

  .btn-2 {
    --v-padding: 7px;
  }
</style>
