<script>import { getAlternativePlan } from './../../../../utils/plans';
import PlanCard from './PlanCard.svelte';
export let suggestions;
export let plans;
export let isEligibleForTrial = false;
const EMPTY_SUGGESTION = {
    label: '',
    badge: '',
    badgeIcon: { id: '', w: 0 },
    description: '',
};
$: suggestedPlans = getPlanSuggestions(plans, suggestions);
function getPlanSuggestions(plans, suggestions) {
    if (!suggestions.length)
        return [];
    return plans.filter((plan) => {
        const isSameBilling = plan.interval === suggestions[0].billing;
        if (suggestions[0].discount) {
            return isSameBilling;
        }
        return suggestions.some((suggestion) => !!suggestion[plan.name]) && isSameBilling;
    });
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
