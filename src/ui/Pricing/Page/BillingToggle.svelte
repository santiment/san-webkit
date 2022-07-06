<script>
  import { Billing } from '@/utils/plans'

  export let billing = Billing.MONTH
</script>

<div class="btn border body-2">
  <div
    class="bill"
    class:active={billing === Billing.MONTH}
    on:click={() => (billing = Billing.MONTH)}>
    Monthly
  </div>
  <div
    class="bill"
    class:active={billing === Billing.YEAR}
    on:click={() => (billing = Billing.YEAR)}>
    Annually<span class="mrg-s mrg--l body-3">Save 10% 😍</span>
  </div>
</div>

<style lang="scss">
  .border {
    display: inline-flex;
    overflow: hidden;
    margin: 40px auto;
  }

  .bill {
    padding: 8px 16px;
    color: var(--waterloo);

    &:hover {
      color: var(--green);
    }
  }

  span {
    padding: 4px 6px;
    background: var(--athens);
    border-radius: 4px;
    color: var(--black);
  }

  .active {
    background: var(--green-light-1);
    color: var(--green);

    &:hover {
      color: var(--green-hover);
    }

    span {
      background: var(--white);
    }
  }
</style>
