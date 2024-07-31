<script lang="ts">
  import LabelInput from '../PaymentMethodSelector/Card/LabelInput.svelte'
  import Note from '../../Note.svelte'
</script>

<div class="gap-3 column">
  <LabelInput label="Have a promo code?" placeholder="2H8vZG5P"></LabelInput>

  <Note dark>
    Holding 1000 SAN tokens will result in a 20% discount.
    <br />
    <a
      href="https://academy.santiment.net/san-tokens/how-to-buy-san-tokens/"
      target="_blank"
      class="text-green">Learn how to buy SAN</a
    >
  </Note>
</div>
