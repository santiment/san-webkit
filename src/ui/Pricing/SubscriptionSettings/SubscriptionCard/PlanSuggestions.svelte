<script lang="ts">
  import type { PlanSuggestion, Suggestion } from './suggestions'

  import { getAlternativePlan } from '@/utils/plans'
  import PlanCard from './PlanCard.svelte'

  export let suggestions: PlanSuggestion[]
  export let plans: SAN.Plan[]
  export let isEligibleForTrial = false

  $: suggestedPlans = getPlanSuggestions(plans, suggestions)

  function getPlanSuggestions(plans: SAN.Plan[], suggestions: PlanSuggestion[]) {
    return suggestions.flatMap((suggestion) => {
      const variants = plans.filter(({ name }) => suggestion[name])
      const plan = variants.find(({ interval }) => interval === suggestion.billing) ?? variants[0]

      if (!plan) return []

      return [
        { plan, planInfo: suggestion[plan.name] as Suggestion, currentSuggestion: suggestion },
      ]
    })
  }
</script>

{#each suggestedPlans as { plan, planInfo, currentSuggestion }}
  {@const altPlan = getAlternativePlan(plan, plans)}
  {@const planOptions = altPlan ? [plan, altPlan] : [plan]}

  <PlanCard
    {...planInfo}
    {isEligibleForTrial}
    plans={planOptions}
    discount={currentSuggestion.discount}
    isUpgrade={currentSuggestion.isUpgrade}
    {plan}
  />
{:else}
  <slot />
{/each}
