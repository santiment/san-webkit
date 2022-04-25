<script lang="ts">
  import { formatMonthlyPrice, PlanName } from '@/utils/plans'

  export let plan: SAN.Plan

  $: ({ name } = plan)
</script>

<div class="fluid">
  <h2 class="row v-center">
    <span class="h4 txt-m">{PlanName[name]}</span>

    <span class="discount mrg-m mrg--l">50% Off</span>

    <span class="c-waterloo mrg-a mrg--l">{formatMonthlyPrice(plan)} / mo</span>
  </h2>

  <button class="btn-1 body-2 fluid mrg-m mrg--t">Start 14-day Free trial</button>
</div>

<style>
  button {
    --v-padding: 8px;
  }

  .discount {
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--green-light-1);
    color: var(--green);
  }
</style>
