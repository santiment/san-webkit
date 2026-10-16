<script lang="ts">
  import type { TPlanBillingGroup } from './api.js'

  import Svg from '$ui/core/Svg/index.js'

  import PlanButton from './PlanButton.svelte'
  import { getFormattedPlan } from './utils.js'

  type TProps = {
    source?: string
    billingGroup: TPlanBillingGroup[string]
  }

  let { source: _source = '', billingGroup }: TProps = $props()

  const formattedPlan = $derived(getFormattedPlan(billingGroup.month, billingGroup.year))
  const source = $derived(_source ? _source + '_plan_card' : 'plan_card')
</script>

<article
  class="relative h-[312px] overflow-hidden rounded-lg bg-blue-light-1 px-16 py-10 sm:h-auto sm:px-5 sm:py-8"
>
  <Svg illus id="business-whale" w={860} h={312} class="absolute right-0 top-0 sm:hidden" />

  <div class="relative w-[400px] items-start gap-6 column sm:w-auto">
    <h2 class="rounded-md bg-white px-3 py-1 text-2xl font-medium text-blue">
      {formattedPlan.name}
    </h2>

    <div class="gap-3 column">
      <h3 class="text-3xl font-medium text-rhino">Get a quote</h3>

      {#if formattedPlan.details}
        <p class="text-base text-fiord">{formattedPlan.details.description}</p>
      {/if}
    </div>

    <PlanButton {source} plan={billingGroup.month}></PlanButton>
  </div>
</article>
