<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import {
    Billing,
    formatMonthlyPrice,
    getAlternativePlan,
    getPrice,
    PlanName,
    priceFormatter,
  } from '@/utils/plans'
  import { PlanDescription } from './description'

  let className = ''
  export { className as class }
  export let plan: SAN.Plan
  export let plans: SAN.Plan[]

  $: ({ name, interval } = plan)
  $: altPlan = getAlternativePlan(plan, plans) as SAN.Plan
  $: ({ description, features } = PlanDescription[name])

  function getSavedAmount() {
    return priceFormatter(getPrice(altPlan.amount * 12 - plan.amount))
  }
</script>

<div class="plan txt-center relative {className}">
  <div class="name h4 txt-m c-accent">{PlanName[name]}</div>

  <div class="trial label">Your trial plan</div>
  <div class="discount label">50% Off</div>

  <div class="description c-waterloo">{description}</div>

  <div class="h2 txt-m mrg-xs mrg--b">
    {formatMonthlyPrice(plan)}<span class="h4 txt-r c-waterloo mrg-xs mrg--l">/ mo</span>
  </div>

  <div class="body-2 c-waterloo">
    {interval === Billing.YEAR
      ? `You save ${getSavedAmount()} a year`
      : formatMonthlyPrice(altPlan) + ' if billed yearly'}
  </div>

  <button class="btn-1 fluid body-2 mrg-l mrg--t mrg--b" on:click>Start 14-day Free trial</button>

  {#each features as feature}
    <div class="row txt-left mrg-l mrg--t">
      <Svg id="checkmark-circle" w="16" class="$style.checkmark" />
      {feature}
    </div>
  {/each}
</div>

<style>
  .plan {
    --accent: var(--orange);
    --accent-hover: var(--orange-hover);
    --accent-light-1: var(--orange-light-1);
    padding: 32px var(--h-padding, 24px);
  }

  .name {
    padding: 4px 12px;
    background: var(--accent-light-1);
    border-radius: 4px;
    display: inline-block;
    text-transform: uppercase;
  }

  .label {
    position: absolute;
    padding: 4px 8px;
    top: 9px;
    border-radius: 4px;
  }

  .trial {
    left: 9px;
    color: var(--fiord);
    background: var(--athens);
  }

  .discount {
    right: 9px;
    color: var(--green);
    background: var(--green-light-1);
  }

  .description {
    margin: 16px auto;
    max-width: 160px;
  }

  .btn-1 {
    --v-padding: 8px;
  }

  .checkmark {
    margin: 2px 10px 0 0;
    fill: var(--accent);
  }
</style>
