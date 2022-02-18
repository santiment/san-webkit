<script>
  import Input from './Input.svelte'
  import CCInput from './CCInput.svelte'
</script>

<div class="info">
  <Input title="Full name" name="name" placeholder="Thomas Johnson" />

  <CCInput />

  <Input title="Country" name="address_country" placeholder="US" />
  <Input title="State / Region" name="address_state" placeholder="California" />
  <Input title="City" name="address_state" placeholder="Sacramento" />
  <Input title="Street Address" name="address_state" placeholder="1483 Pearl Street" />
</div>

<style>
  .info {
    grid-area: info;
  }
  .info :global(label) {
    margin: 0 0 16px;
  }
  .info :global(label:last-child) {
    margin: 0;
  }
</style>
