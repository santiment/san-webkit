<script>
  import Slides from '@/ui/Slides.svelte'
  import Table from './Table.svelte'
  import Plan from './Plan.svelte'
  import { PRO_COMPARED_FEATURES, PRO_PLUS_COMPARED_FEATURES } from './comapre'

  const PLANS = [PRO_COMPARED_FEATURES, PRO_PLUS_COMPARED_FEATURES]

  let activeSlide = 0

  $: console.log(activeSlide)
</script>

<Slides amount={2} bind:active={activeSlide} class="$style.slides">
  <Plan />
  <Plan />
</Slides>

<Table plans={PLANS.slice(activeSlide, activeSlide + 1)} />

<style>
  .slides {
    border-top: 1px solid var(--porcelain);
    --slides-v-padding: 22px 0 52px;
    --slides-h-padding: 16px;
    --indicators-bottom: 20px;
  }
</style>
