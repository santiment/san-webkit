<script>import { Device, responsive$ } from './../../../responsive';
import Slides from './../../../ui/Slides.svelte';
import Table from './Table.svelte';
import MoreFeaturesButton from './MoreFeaturesButton.svelte';
import Plan from './Plan.svelte';
import { PlanFeatures } from './comapre';
let className = '';
export { className as class };
export let plans;
export let isShowingMore = false;
let activeSlide = 0;
$: comparedPlans = getPlansLayout(plans, activeSlide, $responsive$);
$: plansFeatures = comparedPlans.map(({ name }) => PlanFeatures[name]).filter(Boolean);
function getPlansLayout(plans, slide, device) {
    switch (device) {
        case Device.Desktop:
        case Device.Tablet:
            return plans;
    }
    return plans.slice(slide, slide + 1);
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
        <Slides amount={plans.length} bind:active={activeSlide} class="slides-jEgEBe fluid">
          {#each plans as plan (plan.id)}
            <Plan {plan} {plans} />
          {/each}
        </Slides>
      {/if}
    </div>
  </Table>
  <MoreFeaturesButton bind:isShowingMore />
</section>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
#comparison {
  --accent: var(--orange);
  --accent-hover: var(--orange-hover);
  --accent-light-1: var(--orange-light-1);
  border: 1px solid var(--porcelain);
}
:global(.desktop) #comparison {
  border-radius: 4px;
}

:global(.slides-jEgEBe) {
  --slides-v-padding: 22px 0 52px;
  --slides-h-padding: 16px;
  --indicators-bottom: 20px;
}

.tr {
  position: sticky;
  top: 0;
  background: var(--white);
}</style>
