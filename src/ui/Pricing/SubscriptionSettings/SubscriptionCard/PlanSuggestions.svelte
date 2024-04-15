<script lang="ts">
  import type { PlanSuggestion, Suggestion } from './suggestions'

  import { getAlternativePlan } from '@/utils/plans'
  import PlanCard from './PlanCard.svelte'

  export let suggestions: PlanSuggestion[]
  export let plans: SAN.Plan[]
  export let isEligibleForTrial: boolean

  const EMPTY_SUGGESTION: Suggestion = {
    label: '',
    badge: '',
    badgeIcon: { id: '', w: 0 },
    description: '',
  }

  $: suggestedPlans = getPlanSuggestions(plans, suggestions)

  function getPlanSuggestions(plans: SAN.Plan[], suggestions: PlanSuggestion[]) {
    if (!suggestions.length) return []

    return plans.filter((plan) => {
      const isSameBilling = plan.interval === suggestions[0].billing
      if (suggestions[0].discount) {
        return isSameBilling
      }

      return suggestions.some((suggestion) => !!suggestion[plan.name]) && isSameBilling
    })
  }
</script>

{#each suggestedPlans as suggestion, index}
  {@const currentSuggestion = suggestions[index] || {}}
  {@const altPlan = getAlternativePlan(suggestion, plans)}
  {@const planOptions = altPlan ? [suggestion, altPlan] : [suggestion]}
  {@const planInfo = currentSuggestion[suggestion.name] ?? EMPTY_SUGGESTION}

  <PlanCard
    {...planInfo}
    {isEligibleForTrial}
    plans={planOptions}
    discount={currentSuggestion.discount}
    isUpgrade={currentSuggestion.isUpgrade}
    plan={suggestion}
  />
{:else}
  <slot />
{/each}
