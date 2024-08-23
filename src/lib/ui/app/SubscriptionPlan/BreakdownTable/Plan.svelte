<script lang="ts">
  import type { TSubscriptionPlan } from '../types.js'
  import PlanButton from '../PlanButton.svelte'
  import { getFormattedPlan } from '../utils.js'

  let { plan }: { plan: TSubscriptionPlan } = $props()

  $inspect(plan)
  let formattedPlan = $derived(getFormattedPlan(plan))
</script>

<article class="flex-1 gap-2 text-left column">
  <h4 class="text-lg-2 font-medium text-rhino">
    {formattedPlan.name}
  </h4>
  <h5 class="text-base font-medium text-waterloo">
    ${formattedPlan.price.month}
  </h5>
  <PlanButton {plan} class="mt-3"></PlanButton>
</article>
