<script lang="ts">
  import type { TPlanBillingGroup } from '../api.js'

  import { cn } from '$ui/utils/index.js'

  import PlanButton from '../PlanButton.svelte'
  import { BILLING_INTERVAL } from '../plans.js'
  import { getFormattedPlan } from '../utils.js'

  let {
    source = '',
    billingGroup,
    class: className,
  }: { source?: string; billingGroup: TPlanBillingGroup[string]; class?: string } = $props()

  const formattedPlan = $derived(getFormattedPlan(billingGroup))
  const primary = $derived(formattedPlan.primary)
</script>

<article class={cn('flex-1 gap-2 text-left column', className)}>
  <h4 class="text-lg-2 font-medium text-rhino">
    {formattedPlan.name}
  </h4>
  <h5 class="text-base font-medium text-waterloo">
    {#if formattedPlan.isCustom}
      Custom
    {:else}
      ${primary.price}
      <span class="font-normal">/ {BILLING_INTERVAL[primary.interval].short}</span>
    {/if}
  </h5>
  <PlanButton plan={primary.plan} class="mt-3" source="{source}_plans_breakdown"></PlanButton>
</article>
