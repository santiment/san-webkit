<script lang="ts">
  // import { Device, responsive$ } from '@/responsive'
  // import Slides from '@/ui/Slides.svelte'
  import Table from './Table.svelte'
  // import Plan from './Plan.svelte'
  import { cn } from '$ui/utils/index.js'
  import type { TSubscriptionPlan } from '../types.js'
  import {
    BUSINESS_PLANS_BREAKDOWN,
    CONSUMER_PLANS_BREAKDOWN,
    SubscriptionPlanBreakdown,
  } from './breakdown.js'
  import Plan from './Plan.svelte'

  let {
    class: className,
    plans,
    isConsumerPlans = true,
  }: { class?: string; plans: TSubscriptionPlan[]; isConsumerPlans?: boolean } = $props()

  let activeSlide = 0

  // let comparedPlans = $derived(getPlansLayout(plans, activeSlide, $responsive$))
  let comparedPlans = $derived(getPlansLayout(plans, activeSlide))
  let plansFeatures = $derived(
    comparedPlans.map(({ name }) => SubscriptionPlanBreakdown[name]).filter(Boolean),
  ) as Record<string, any>[]

  function getPlansLayout(plans: TSubscriptionPlan[], _slide: number) {
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

<!-- TODO: Make a note about margin here -->
<section id="comparison" class={cn('sm:-mx-5', className)}>
  <h2 class="mb-16 text-center text-3xl font-medium sm:hidden">Detailed breakdown of plans</h2>

  <section
    class="flex overflow-clip rounded border sm:overflow-x-auto"
    class:business={!isConsumerPlans}
  >
    <Table
      plans={plansFeatures}
      breakdown={isConsumerPlans ? CONSUMER_PLANS_BREAKDOWN : BUSINESS_PLANS_BREAKDOWN}
    >
      <div class="tr sticky top-[var(--plans-sticky-top,0)] bg-white">
        <div class={cn('td-h', 'items-start')}>
          <h5 class="hidden max-w-24 text-start text-lg-2 font-medium sm:block">Compare plans</h5>
        </div>

        {#each comparedPlans as plan}
          <div class="td">
            <Plan {plan}></Plan>
          </div>
        {/each}
      </div>
    </Table>
  </section>
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

  .business {
    --c-green: var(--c-blue);
    --orange: var(--blue);
  }
</style>
