<script lang="ts">
  import { Device, responsive$ } from '@/responsive'
  import Slides from '@/ui/Slides.svelte'
  import Table from './Table.svelte'
  import MoreFeaturesButton from './MoreFeaturesButton.svelte'
  import Plan from './Plan.svelte'
  import { PlanFeatures } from './comapre'

  let className = ''
  export { className as class }
  export let plans: SAN.Plan[]
  export let isShowingMore = false

  let activeSlide = 0

  $: comparedPlans = getPlansLayout(plans, activeSlide, $responsive$)
  $: plansFeatures = comparedPlans.map(({ name }) => PlanFeatures[name]).filter(Boolean)

  function getPlansLayout(plans: SAN.Plan[], slide: number, device: string) {
    switch (device) {
      case Device.Desktop:
      case Device.Tablet:
        return plans
    }

    return plans.slice(slide, slide + 1)
  }
</script>

<section id="comparison" class={className}>
  <Table {isShowingMore} plans={plansFeatures}>
    <div class="tr">
      {#if comparedPlans.length > 1}
        <div class="td-h" />
        {#each comparedPlans as plan (plan.id)}
          <div class="td">
            <Plan {plan} {plans} />
          </div>
        {/each}
      {:else}
        <Slides amount={plans.length} bind:active={activeSlide} class="$style.slides fluid">
          {#each plans as plan (plan.id)}
            <Plan {plan} {plans} />
          {/each}
        </Slides>
      {/if}
    </div>
  </Table>
  <MoreFeaturesButton bind:isShowingMore />
</section>

<style lang="scss">
  #comparison {
    --accent: var(--orange);
    --accent-hover: var(--orange-hover);
    --accent-light-1: var(--orange-light-1);
    border: 1px solid var(--porcelain);

    :global(.desktop) & {
      border-radius: 4px;
    }
  }

  .slides {
    --slides-v-padding: 22px 0 52px;
    --slides-h-padding: 16px;
    --indicators-bottom: 20px;
  }

  .tr {
    position: sticky;
    top: 0;
    background: var(--white);
  }
</style>
