<script lang="ts">
  import { formatMonthlyPrice, Plan, getPlanDisplayName } from '@/utils/plans'
  import PlanButton from '../PlanButton.svelte'

  export let plan: SAN.Plan
  export let plans: SAN.Plan[] = []
  export let discount = 0

  $: ({ name } = plan)
  $: isFreePlan = name.includes(Plan.FREE)
</script>

<div class="fluid">
  <h3 class="row v-center">
    <span class="h4 txt-m">{getPlanDisplayName(plan)}</span>

    {#if discount && !isFreePlan}<span class="discount mrg-m mrg--l">50% Off</span>{/if}

    <span class="c-waterloo mrg-a mrg--l">
      {formatMonthlyPrice(plan)}
      {#if !isFreePlan}/ mo{/if}
    </span>
  </h3>

  <PlanButton {plan} {plans} class="mrg-m mrg--t" source="pricing-compare-table" />
</div>

<style>
  .discount {
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--green-light-1);
    color: var(--green);
  }
</style>
