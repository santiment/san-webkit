<script context="module">export function percentChange(oldValue, newValue) {
  const change = 100 * (newValue - oldValue) / oldValue;
  return formatPercentChange(change);
}
export function formatPercentChange(value) {
  return +value.toFixed(Math.abs(value) < 1 ? 4 : 2);
}</script>

<script>import Svg from './../ui/Svg/svelte';
let className = '';
export { className as class };
export let change;</script>

<div class="row v-center change {className}" class:down={change < 0} class:zero={change === 0}>
  {#if change !== 0}
    <span class="direction row hv-center mrg-xs mrg--r">
      <Svg id="triangle" w="6" h="4" class="arrow-2T5uwV" />
    </span>
  {/if}
  {change}%
</div>

<style>
  .change {
    position: relative;
    --color: var(--lima);
    --bg: var(--lima-light-1);
  }
  .down {
    --color: var(--red);
    --bg: var(--red-light-1);
    --transform: rotate(180deg);
  }
  :global(.arrow-2T5uwV) {
    transform: var(--transform);
  }

  .zero {
    --color: var(--orange);
  }

  .direction {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    fill: var(--color);
    background: var(--bg);
  }
</style>
