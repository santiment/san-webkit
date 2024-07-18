<script>import Svg from './../../../ui/Svg/svelte';
export let isShowingMore = false;</script>

<button
  class="btn-0 fluid row hv-center"
  class:more={isShowingMore}
  on:click={() => (isShowingMore = !isShowingMore)}
>
  Show {isShowingMore ? 'less' : 'more'} features
  <Svg id="arrow-down" w="10" h="5.5" class="arrow-RKTK+C mrg-m mrg--l" />
</button>

<style >button {
  padding: 12px;
  border-radius: 0;
  --bg-hover: var(--porcelain);
  --accent: var(--green);
  --accent-hover: var(--green-hover);
}

.more {
  --rotate: rotate(180deg);
}

:global(.arrow-RKTK\+C) {
  transform: var(--rotate, rotate(0deg));
}</style>
