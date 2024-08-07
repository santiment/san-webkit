<script lang="ts">
  import { type TPlanBillingGroup } from '$ui/app/SubscriptionPlan/api.js'
  import { getFormattedPlan } from '$ui/app/SubscriptionPlan/index.js'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import Switch from '$ui/core/Switch/index.js'
  import PlanButton from './PlanButton.svelte'

  let { billingGroup }: { billingGroup: TPlanBillingGroup[string] } = $props()

  const monthlyPlan = billingGroup.month
  const formattedPlan = getFormattedPlan(monthlyPlan, billingGroup.year)

  let isAnnualBilling = $state(false)

  const theme = formattedPlan.isFree
    ? {
        accent: 'var(--c-fiord)',
        'accent-light-1': 'var(--c-athens)',
        checkmark: 'var(--c-waterloo)',
      }
    : formattedPlan.isBusiness
      ? {
          accent: 'var(--c-blue)',
          'accent-light-1': 'var(--c-blue-light-1)',
          checkmark: 'var(--c-blue)',
        }
      : {}
</script>

<article
  class="min-w-0 flex-1 p-10 pt-8 column"
  style:--c-orange={theme.accent}
  style:--c-orange-light-1={theme['accent-light-1']}
>
  <h2
    class={cn(
      'mb-4 max-w-fit rounded-md px-3 py-1 text-2xl font-medium',
      'bg-orange-light-1 text-orange',
    )}
  >
    {formattedPlan.name}
  </h2>

  {#if formattedPlan.details}
    <p class="mb-10 text-base text-waterloo">
      {formattedPlan.details.description}
    </p>
  {/if}

  <section class="mb-4 min-h-[150px] column">
    <h3 class="mb-3 text-4xl font-semibold">
      {#if formattedPlan.isCustom}
        Get a quote
      {:else if formattedPlan.isFree}
        $0
      {:else if isAnnualBilling}
        ${formattedPlan.price.year}
        <span class="text-xl font-normal text-waterloo">/ year</span>
      {:else}
        ${formattedPlan.price.month}
        <span class="text-xl font-normal text-waterloo">/ mo</span>
      {/if}
    </h3>

    <h4 class="mb-10 text-base text-fiord">
      {#if formattedPlan.isFree}
        Free forever
      {:else if formattedPlan.isCustom}
        Based on your needs
      {:else if isAnnualBilling}
        <span class="font-medium text-rhino">${formattedPlan.price.month}</span>
        <span class="text-waterloo"> / month</span>
      {:else}
        <span class="font-medium text-rhino">${formattedPlan.price.year}</span>
        <span class="mr-1 text-waterloo"> / year</span>

        {#if formattedPlan.price.savePercentWithAnnual}
          <span class="text-orange">
            - {formattedPlan.price.savePercentWithAnnual}% 🎉
          </span>
        {/if}
      {/if}
    </h4>

    {#if formattedPlan.amount.month}
      <label class="flex items-center gap-2 text-base text-waterloo">
        <Switch
          checked={isAnnualBilling}
          onCheckedChange={() => (isAnnualBilling = !isAnnualBilling)}
        ></Switch>

        Bill annually
      </label>
    {/if}
  </section>

  <PlanButton plan={isAnnualBilling ? billingGroup.year! : monthlyPlan}></PlanButton>

  {#if formattedPlan.details}
    <ul class="mt-10 gap-5 fill-orange text-rhino column" style:--c-orange={theme.checkmark}>
      {#each formattedPlan.details.features as feature}
        <li class="flex gap-2.5">
          <Svg id="checkmark-circle" class="mt-[1.5px]"></Svg>
          {feature}
        </li>
      {/each}
    </ul>
  {/if}
</article>
