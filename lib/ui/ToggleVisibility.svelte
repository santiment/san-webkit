<script>import Toggle from './Toggle.svelte';
let className = '';
export { className as class };</script>

<Toggle class="toggle-fOcMKL {className}" icon="toggle-visibility" {...$$restProps} on:click />

<style >:global(.toggle-fOcMKL) {
  --toggle-img-width: 28px;
  --toggle-big-img-width: 38px;
}</style>
