<script lang="ts">
  import Slides from '@/ui/Slides.svelte'
  import Table from './Table.svelte'
  import Plan from './Plan.svelte'
  import { PRO_COMPARED_FEATURES, PRO_PLUS_COMPARED_FEATURES } from './comapre'
  import { Device, responsive$ } from '@/responsive'

  let className = ''
  export { className as class }

  const PLANS = [PRO_COMPARED_FEATURES, PRO_PLUS_COMPARED_FEATURES]

  let activeSlide = 0

  $: plans = getPlansLayout(activeSlide, $responsive$)

  function getPlansLayout(slide: number, device: string) {
    switch (device) {
      case Device.Desktop:
      case Device.Tablet:
        return PLANS
    }

    return PLANS.slice(slide, slide + 1)
  }
</script>

<div class="comparison {className}">
  <Table {plans}>
    <div class="tr">
      {#if plans.length > 1}
        <div class="td-h" />
        <div class="td"><Plan /></div>
        <div class="td"><Plan /></div>
      {:else}
        <Slides amount={2} bind:active={activeSlide} class="$style.slides fluid">
          <Plan />
          <Plan />
        </Slides>
      {/if}
    </div>
  </Table>
</div>

<style lang="scss">
  .comparison {
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
