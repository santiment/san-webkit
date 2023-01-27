<script>import Svg from './../../ui/Svg/svelte';
export let isAscending = false;</script>

<Svg
  illus
  id="sorted"
  w="6"
  h="8"
  class="sorter-UXZzcj mrg-xs mrg--l {isAscending ? 'asc-pCo7KF' : ''}"
/>

<style>
  :global(.sorter-UXZzcj) {
    vertical-align: initial;
    margin-right: -14px;
  }
  :global(.asc-pCo7KF) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
