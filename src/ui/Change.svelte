<script lang="ts" context="module">
  export function percentChange(oldValue: number, newValue: number) {
    const change = (100 * (newValue - oldValue)) / oldValue
    return formatPercentChange(change)
  }
  export function formatPercentChange(value: number): number {
    return +value.toFixed(Math.abs(value) < 1 ? 4 : 2)
  }
</script>

<script lang="ts">
  import Svg from './Svg/svelte'

  let className = ''
  export { className as class }
  export let change: number
</script>

<div class="row v-center change {className}" class:up={change >= 0}>
  <span class="direction row hv-center mrg-xs mrg--r">
    <Svg id="triangle" w="6" h="4" />
  </span>
  {change}%
</div>

<style>
  .change {
    position: relative;
    --color: var(--red);
    --bg: var(--red-light-1);
  }
  .up {
    --color: var(--lima);
    --bg: var(--lima-light-1);
  }

  .direction {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    fill: var(--color);
    background: var(--bg);
  }
</style>
