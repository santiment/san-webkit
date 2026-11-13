<script lang="ts">
  import type { TSubscriptionPlan } from '../types.js'

  import { cn } from '$ui/utils/index.js'

  import PlanButton from '../PlanButton.svelte'
  import { getFormattedPlan } from '../utils.js'

  let {
    source = '',
    plan,
    class: className,
  }: { source?: string; plan: TSubscriptionPlan; class?: string } = $props()

  let formattedPlan = $derived(getFormattedPlan(plan))
</script>

<article class={cn('flex-1 gap-2 text-left column', className)}>
  <h4 class="t-h5-medium text-rhino">
    {formattedPlan.name}
  </h4>
  <h5 class="t-body-2-medium text-waterloo">
    {#if formattedPlan.isCustom}
      Custom
    {:else}
      ${formattedPlan.price.month}
    {/if}
  </h5>
  <PlanButton {plan} class="mt-3" source="{source}_plans_breakdown"></PlanButton>
</article>
