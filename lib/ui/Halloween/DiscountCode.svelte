<script>import { copy } from './../../utils';
let className = '';
export { className as class };
export let discount;
let copyLabel = 'Copy discount';
function onCopy(e) {
  e.preventDefault();
  copyLabel = 'Copied!';
  copy(discount, () => copyLabel = 'Copy discount', 1500);
}</script>

<button class="btn expl-tooltip {className}" aria-label={copyLabel} on:click={onCopy}>
  {discount}
</button>

<style>
  .btn {
    --bg: var(--athens);
  }
</style>
