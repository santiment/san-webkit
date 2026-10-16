<script lang="ts">
  import type { TPlanBillingGroup } from '../api.js'

  import { cn } from '$ui/utils/index.js'

  import PlanButton from '../PlanButton.svelte'
  import { getFormattedPlan } from '../utils.js'

  let {
    source = '',
    billingGroup,
    class: className,
  }: { source?: string; billingGroup: TPlanBillingGroup[string]; class?: string } = $props()

  const formattedPlan = $derived(getFormattedPlan(billingGroup))
  const cheapest = $derived(formattedPlan.intervals[0])
</script>

<article class={cn('flex-1 gap-2 text-left column', className)}>
  <h4 class="text-lg-2 font-medium text-rhino">
    {formattedPlan.name}
  </h4>
  <h5 class="text-base font-medium text-waterloo">
    {#if formattedPlan.isCustom}
      Custom
    {:else}
      ${cheapest.price}
    {/if}
  </h5>
  <PlanButton plan={cheapest.plan} class="mt-3" source="{source}_plans_breakdown"></PlanButton>
</article>
