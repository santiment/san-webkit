<script>
  import Svg from './../../ui/Svg/svelte'
  export let isAscending = false
</script>

<Svg
  illus
  id="sorted"
  w="6"
  h="8"
  class="sorter-1_p9bO mrg-xs mrg--l {isAscending ? 'asc-C-Nyz4' : ''}"
/>

<style>
  :global(.sorter-1_p9bO) {
    vertical-align: initial;
    margin-right: -14px;
  }
  :global(.asc-C-Nyz4) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
