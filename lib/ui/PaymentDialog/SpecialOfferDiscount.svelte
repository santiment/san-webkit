<script>import Checkmark from './Checkmark.svelte';
export let percentOff;
export let selectedNameBilling;</script>

<div class="discount mrg-l mrg--b">
  <div class="body-2 txt-m c-black row v-center">
    Special offer discount
    <Checkmark />
  </div>

  {percentOff}% Off for {selectedNameBilling} plan
</div>

<style>
  .discount {
    padding: 12px 16px;
    border-radius: 4px;
    background: var(--athens);
    color: var(--fiord);
  }

  :global(.desktop) .discount {
    background: var(--white);
  }
</style>
