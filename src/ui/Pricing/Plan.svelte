<script lang="ts">
  import { getCustomer$Ctx } from '@/stores/customer'
  import Svg from '@/ui/Svg/svelte'
  import {
    calculateYearDiscount,
    formatPrice,
    checkIsBusinessPlan,
    Plan,
    getPlanDisplayName,
  } from '@/utils/plans'
  import { checkIsTrialSubscription } from '@/utils/subscription'
  import PlanButton from './PlanButton.svelte'
  import { PlanDescription } from './description'

  let className = ''
  export { className as class }
  export let plan: SAN.Plan
  export let monthPlan: SAN.Plan = plan
  export let yearPlan = monthPlan
  export let plans: SAN.Plan[] = []

  const { customer$ } = getCustomer$Ctx()
  $: customer = $customer$
  $: ({ subscription } = customer)

  $: ({ name } = monthPlan)
  $: isOnTrial = subscription && checkIsTrialSubscription(subscription)
  $: currentPlanId = subscription?.plan.id
  $: isTrialPlan = isOnTrial && (currentPlanId === monthPlan.id || currentPlanId === yearPlan.id)

  $: isBusiness = checkIsBusinessPlan(monthPlan)

  $: isFreePlan = name.includes(Plan.FREE)
  $: isCustomPlan = name.includes(Plan.CUSTOM)

  $: ({ description, features } = PlanDescription[name])

  $: monthPrice = formatPrice(monthPlan)
  $: yearPrice = formatPrice(yearPlan)

  $: priceText = isCustomPlan ? 'Get a quote' : monthPrice
  $: yearDiscount = calculateYearDiscount(monthPlan, yearPlan)
</script>

<div class="plan txt-center relative {className}" class:isBusiness class:free={isFreePlan}>
  <div class="name h4 txt-m c-accent">{getPlanDisplayName(plan)}</div>

  {#if isTrialPlan}<div class="trial label">Your trial plan</div>{/if}

  <div class="description c-waterloo">{description}</div>

  <div class="price row h-center h2 txt-m mrg-xs mrg--b">
    {priceText}
    {#if !isFreePlan && !isCustomPlan}
      <span class="h4 txt-r c-waterloo mrg-xs mrg--l mrg--b">/ mo</span>
    {/if}
  </div>

  <div class="body-2 c-fiord">
    {#if isFreePlan}
      Free forever
    {:else if isCustomPlan}
      Based on your needs
    {:else}
      <span class="c-black">{yearPrice}</span>
      <span class="c-waterloo">/ year</span>
      {#if yearDiscount}
        <span class="discount body-3 mrg-s mrg--l">- {yearDiscount}% 🎉</span>
      {/if}
    {/if}
  </div>

  <PlanButton plan={monthPlan} {plans} class="mrg-l mrg--t mrg--b" source="pricing-card" />

  {#each features as feature}
    <div class="row txt-left mrg-l mrg--t">
      <Svg id="checkmark-circle" w="16" class="$style.checkmark" />
      {feature}
    </div>
  {/each}
</div>

<style lang="scss">
  .plan {
    --accent: var(--orange);
    --accent-hover: var(--orange-hover);
    --accent-light-1: var(--orange-light-1);
    padding: 32px var(--h-padding, 24px);

    &.isBusiness {
      --accent: var(--blue);
      --accent-hover: var(--blue-hover);
      --accent-light-1: var(--blue-light-1);
    }
  }

  .name {
    padding: 4px 12px;
    background: var(--name-bg, var(--accent-light-1));
    border-radius: 4px;
    display: inline-block;
    color: var(--name-color, var(--accent));
  }

  .price {
    align-items: flex-end;
  }

  .free {
    --name-bg: var(--athens);
    --name-color: var(--fiord);
    --fill-checkmark: var(--waterloo);
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
    color: var(--accent);
  }

  .description {
    margin: 16px auto;
    max-width: 160px;
  }

  .checkmark {
    margin: 2px 10px 0 0;
    fill: var(--fill-checkmark, var(--accent));
  }
</style>
