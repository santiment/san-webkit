<script>import Svg from './../ui/Svg/svelte';
let className = '';
export { className as class };
export let href;
export let label;
</script>

<a {...$$props} {href} class="link-pointer v-center {className}">
  {label}
  <Svg id="right-arrow" w={10} h={5} class="svg-mnCxCK" />
</a>

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
a::after {
  width: calc(100% - 16px);
}

:global(.svg-mnCxCK) {
  margin: 0 2px 0 6px;
  transition: transform 0.2s;
}
a:hover :global(.svg-mnCxCK) {
  transform: translateX(2px);
}</style>
