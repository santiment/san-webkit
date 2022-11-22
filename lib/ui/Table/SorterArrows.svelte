<script>import Svg from './../../ui/Svg/svelte';
export let isAscending = false;</script>

<Svg
  illus
  id="sorted"
  w="6"
  h="8"
  class="sorter-2UbWM1 mrg-xs mrg--l {isAscending ? 'asc-1WH6Sd' : ''}" />

<style>
  :global(.sorter-2UbWM1) {
    vertical-align: initial;
    margin-right: -14px;
  }
  :global(.asc-1WH6Sd) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
