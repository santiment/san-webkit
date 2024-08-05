<script>import { onMount } from 'svelte';
import Svg from './../../ui/Svg/svelte';
import { track } from './../../analytics';
import Background from './Background.svelte';
import Feature from './Feature.svelte';
import { FeatureWalkthrough$ } from './context';
export let features;
const ANALYTICS_CATEGORY = 'Walkthrough';
let cursor = 0;
$: feature = features[cursor];
$: highlightedNode = document.querySelector('#' + (feature.nodeId || feature.id));
$: if (!isElementInCenter(highlightedNode)) {
    highlightedNode?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
$: rect = highlightedNode?.getBoundingClientRect() || { bottom: -14, x: 7 };
$: align = (rect, feature.align || 'left');
$: ({ bottom, x, right } = rect);
$: xPosition = x - 7;
$: if (x + 200 >= window.innerWidth) {
    align = 'right';
}
$: if (align === 'right') {
    xPosition = window.innerWidth - right - 7;
}
$: hasPrevious = cursor > 0;
$: hasNext = cursor < features.length - 1;
function onClose() {
    FeatureWalkthrough$.complete();
    FeatureWalkthrough$.clear();
    trackWalkthrough('close');
}
const onNext = () => {
    cursor++;
    trackWalkthrough('next_step', cursor);
};
const onPrevious = () => {
    cursor--;
    trackWalkthrough('prev_step', cursor);
};
function trackWalkthrough(event, idx) {
    const index = idx ?? cursor;
    track.event(`walkthrough_${event}`, {
        category: ANALYTICS_CATEGORY,
        current_step: index + 1,
        total_steps: features.length,
        source_url: window.location.href,
        step_id: features[index].id,
    });
}
function isElementInCenter(el) {
    if (!el)
        return false;
    const rect = el.getBoundingClientRect();
    const { clientHeight } = document.documentElement;
    const fromTop = rect.top;
    const fromBottom = clientHeight - rect.bottom;
    const maxDiff = clientHeight * 0.1;
    const diff = Math.abs(fromTop - fromBottom);
    return diff < maxDiff;
}
onMount(() => {
    trackWalkthrough('start');
});
</script>

<Background {rect} />

<div class="border" style="top:{window.scrollY + bottom + 14}px;{align}:{xPosition}px">
  <Feature {feature} />

  <button class="close btn" on:click={onClose}>
    <Svg id="close" w="12" />
  </button>

  <div class="row v-center mrg-xl mrg--t">
    <div class="dots row mrg-a mrg--r">
      {#if features.length > 1}
        {#each features as _, i}
          <button
            class="dot btn mrg-s mrg--r"
            class:active={cursor === i}
            on:click={() => {
              cursor = i
              trackWalkthrough('set_step', cursor)
            }}
          />
        {/each}
      {/if}
    </div>

    {#if hasPrevious}
      <button class="btn-2 mrg-s mrg--r" on:click={onPrevious}>Previous</button>
    {/if}

    <button class="btn-1" on:click={hasNext ? onNext : onClose}>
      {hasNext ? 'Next' : 'Close'}
    </button>
  </div>
</div>

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
.border {
  position: absolute;
  z-index: 99;
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
}</style>
