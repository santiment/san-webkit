<script lang="ts">
  import Input from './Input.svelte'
  import CCInput from './CCInput.svelte'

  export let StripeCard: stripe.elements.Element
</script>

<div class="info">
  <Input title="Full name" name="name" placeholder="Thomas Johnson" />

  <CCInput bind:StripeCard />

  <Input title="Country" name="address_country" placeholder="US" />
  <Input title="State / Region" name="address_state" placeholder="California" />
  <Input title="City" name="address_city" placeholder="Sacramento" />
  <Input title="Street Address" name="address_line1" placeholder="1483 Pearl Street" />
</div>

<style lang="scss">
  .info {
    grid-area: info;

    :global(label) {
      margin: 0 0 16px;
      &:last-child {
        margin: 0;
      }
    }
  }
</style>
