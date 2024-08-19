<script lang="ts">
  // import { Device, responsive$ } from '@/responsive'
  // import Slides from '@/ui/Slides.svelte'
  import Table from './Table.svelte'
  // import Plan from './Plan.svelte'
  import type { TSubscriptionPlan } from '../types.js'
  import { CONSUMER_PLANS_BREAKDOWN, SubscriptionPlanBreakdown } from './breakdown.js'
  import { cn } from '$ui/utils/index.js'

  let { class: className, plans }: { plans: TSubscriptionPlan[]; class: '' } = $props()

  let activeSlide = 0

  // let comparedPlans = $derived(getPlansLayout(plans, activeSlide, $responsive$))
  let comparedPlans = $derived(getPlansLayout(plans, activeSlide))
  let plansFeatures = $derived(
    comparedPlans.map(({ name }) => SubscriptionPlanBreakdown[name]).filter(Boolean),
  ) as {}[]

  function getPlansLayout(plans: TSubscriptionPlan[], slide: number) {
    return plans
  }
  // function getPlansLayout(plans: TSubscriptionPlan[], slide: number, device: string) {
  //   switch (device) {
  //     case Device.Desktop:
  //     case Device.Tablet:
  //       return plans
  //   }

  //   return plans.slice(slide, slide + 1)
  // }
</script>

<section id="comparison" class={cn('rounded border', className)}>
  <Table plans={plansFeatures} breakdown={CONSUMER_PLANS_BREAKDOWN}>
    <div class="sticky top-0 bg-white">
      {#if comparedPlans.length > 1}
        <div class="td-h"></div>

        {#each comparedPlans as plan (plan.id)}
          <div class="td">
            123
            <!-- <Plan {plan} {plans} /> -->
          </div>
        {/each}
      {:else}
        <!--
       <Slides amount={plans.length} bind:active={activeSlide} class="$style.slides fluid">
          {#each plans as plan (plan.id)}
             <Plan {plan} {plans} />
          {/each}
        </Slides>
         -->
      {/if}
    </div>
  </Table>
</section>

<style>
  #comparison {
    --accent: var(--orange);
    --accent-hover: var(--orange-hover);
    --accent-light-1: var(--orange-light-1);

    :global(.desktop) & {
      border-radius: 4px;
    }
  }

  .slides {
    --slides-v-padding: 22px 0 52px;
    --slides-h-padding: 16px;
    --indicators-bottom: 20px;
  }
</style>
