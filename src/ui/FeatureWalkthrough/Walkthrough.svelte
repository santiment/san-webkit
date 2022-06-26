<script>
  import Svg from '@/ui/Svg/svelte'
  import Background from './Background.svelte'
  import { FeatureWalkthrough$ } from './context'
  import Feature from './Feature.svelte'

  export let features

  let cursor = 0

  const highlightedNode = document.querySelector('#test')

  $: hasPrevious = cursor > 0
  $: hasNext = cursor < features.length - 1
  $: feature = features[cursor]

  $: rect = highlightedNode.getBoundingClientRect()

  function onClose() {
    FeatureWalkthrough$.clear()
  }

  function onNext() {
    cursor++
  }

  function onPrevious() {
    cursor--
  }
</script>

<Background {rect} />

<div class="border" style="top:{rect.bottom + 14}px;left:{rect.x - 7}px">
  <Feature {feature} />

  <button class="close btn" on:click={onClose}>
    <Svg id="close" w="12" />
  </button>

  <div class="row v-center mrg-xl mrg--t">
    <div class="dots row mrg-a mrg--r">
      {#each features as _, i}
        <div
          class="dot btn mrg-s mrg--r"
          class:active={cursor === i}
          on:click={() => (cursor = i)}
        />
      {/each}
    </div>

    {#if hasPrevious}
      <div class="btn-2 mrg-s mrg--r" on:click={onPrevious}>Previous</div>
    {/if}

    <div class="btn-1 btn--accent" on:click={hasNext ? onNext : onClose}>
      {hasNext ? 'Next' : 'Close'}
    </div>
  </div>
</div>

<style lang="scss">
  .border {
    position: absolute;
    z-index: 99999;
    background: var(--white);
    padding: 20px 24px 32px;
    max-width: 400px;
  }

  .close {
    position: absolute;
    top: 23px;
    right: 23px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }

  .dot {
    border-radius: 50%;
    width: 6px;
    height: 6px;
    --bg: var(--green-light-3);
    --bg-hover: var(--green-hover);
  }

  .active {
    --bg: var(--green);
  }
</style>
