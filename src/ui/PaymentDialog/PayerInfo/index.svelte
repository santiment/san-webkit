<script lang="ts">
  import CCInput from './CCInput.svelte'
  import Country from './Country.svelte'
  import Input from '../Input.svelte'

  export let StripeCard: stripe.elements.Element
</script>

<div class="info">
  <Input title="Full name" name="name" placeholder="Thomas Johnson" />

  <CCInput bind:StripeCard />

  <Country />

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
