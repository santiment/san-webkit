<script>import Toggle from './Toggle.svelte';
let className = '';
export { className as class };
</script>

<Toggle class="toggle-k643rf {className}" icon="toggle-visibility" {...$$restProps} on:click />

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
:global(.toggle-k643rf) {
  --toggle-img-width: 28px;
  --toggle-big-img-width: 38px;
}</style>
