<script lang="ts">
  import { formatMonthlyPrice, PlanName } from '@/utils/plans'
  import PlanButton from '../PlanButton.svelte'

  export let plan: SAN.Plan
  export let plans: SAN.Plan[]
  export let discount = 0

  $: ({ name } = plan)
</script>

<div class="fluid">
  <h3 class="row v-center">
    <span class="h4 txt-m">{PlanName[name]}</span>

    {#if discount}<span class="discount mrg-m mrg--l">50% Off</span>{/if}

    <span class="c-waterloo mrg-a mrg--l">{formatMonthlyPrice(plan)} / mo</span>
  </h3>

  <PlanButton {plan} {plans} class="mrg-m mrg--t" />
</div>

<style>
  .discount {
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--green-light-1);
    color: var(--green);
  }
</style>
