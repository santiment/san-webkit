<script>import Input from './Input.svelte';
import CCInput from './CCInput.svelte';
import Country from './PayerInfo/Country.svelte';
export let StripeCard;
</script>

<div class="info">
  <Input title="Full name" name="name" placeholder="Thomas Johnson" />

  <CCInput bind:StripeCard />

  <Country />

  <Input title="State / Region" name="address_state" placeholder="California" />
  <Input title="City" name="address_city" placeholder="Sacramento" />
  <Input title="Street Address" name="address_line1" placeholder="1483 Pearl Street" />
</div>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.info {
  grid-area: info;
}
.info :global(label) {
  margin: 0 0 16px;
}
.info :global(label):last-child {
  margin: 0;
}</style>
