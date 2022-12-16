<script>import Svg from './../../ui/Svg/svelte';
export let isAscending = false;</script>

<Svg
  illus
  id="sorted"
  w="6"
  h="8"
  class="sorter-_FAyjq mrg-xs mrg--l {isAscending ? 'asc-1n9rYk' : ''}" />

<style>
  :global(.sorter-_FAyjq) {
    vertical-align: initial;
    margin-right: -14px;
  }
  :global(.asc-1n9rYk) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
