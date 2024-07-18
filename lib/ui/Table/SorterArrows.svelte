<script>import Svg from './../../ui/Svg/svelte';
export let isAscending = false;</script>

<Svg
  illus
  id="sorted"
  w="6"
  h="8"
  class="sorter-OVEdkc mrg-xs mrg--l {isAscending ? 'asc-xeQrL1' : ''}"
/>

<style>
  :global(.sorter-OVEdkc) {
    vertical-align: initial;
    margin-right: -14px;
  }
  :global(.asc-xeQrL1) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
