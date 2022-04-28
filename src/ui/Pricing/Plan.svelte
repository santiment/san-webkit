<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import {
    Billing,
    formatMonthlyPrice,
    getAlternativePlan,
    getSavedAmount,
    PlanName,
  } from '@/utils/plans'
  import { checkIsTrialSubscription } from '@/utils/subscription'
  import PlanButton from './PlanButton.svelte'
  import { PlanDescription } from './description'

  let className = ''
  export { className as class }
  export let plan: SAN.Plan
  export let plans: SAN.Plan[]
  export let subscription: undefined | SAN.Subscription
  export let isEligibleForTrial: boolean
  export let annualDiscount = {} as SAN.AnnualDiscount

  $: ({ id, name, interval } = plan)
  $: isOnTrial = checkIsTrialSubscription(subscription)
  $: isTrialPlan = isOnTrial && subscription?.plan.id === id
  $: isAnnualPlan = interval === Billing.YEAR
  $: altPlan = getAlternativePlan(plan, plans) as SAN.Plan
  $: ({ description, features } = PlanDescription[name])
  $: percentOff = annualDiscount.discount?.percentOff || 0
</script>

<div class="plan txt-center relative {className}">
  <div class="name h4 txt-m c-accent">{PlanName[name]}</div>

  {#if isTrialPlan}<div class="trial label">Your trial plan</div>{/if}

  {#if isAnnualPlan && percentOff}<div class="discount label">{percentOff}% Off</div>{/if}

  <div class="description c-waterloo">{description}</div>

  <div class="h2 txt-m mrg-xs mrg--b">
    {formatMonthlyPrice(plan, percentOff)}<span class="h4 txt-r c-waterloo mrg-xs mrg--l">/ mo</span
    >
  </div>

  <div class="body-2 c-waterloo">
    {isAnnualPlan
      ? `You save ${getSavedAmount(plan, altPlan, percentOff)} a year`
      : formatMonthlyPrice(altPlan, percentOff) + ' if billed yearly'}
  </div>

  <PlanButton
    {plan}
    {plans}
    {subscription}
    {isEligibleForTrial}
    {annualDiscount}
    class="mrg-l mrg--t mrg--b"
  />

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

  .checkmark {
    margin: 2px 10px 0 0;
    fill: var(--accent);
  }
</style>
