<script>
  import Svg from './../../ui/Svg/svelte'
  export let isAscending = false
</script>

<Svg
  illus
  id="sorted"
  w="6"
  h="8"
  class="sorter-2JeLOD mrg-xs mrg--l {isAscending ? 'asc-2zkcND' : ''}"
/>

<style>
  :global(.sorter-2JeLOD) {
    vertical-align: initial;
    margin-right: -14px;
  }
  :global(.asc-2zkcND) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
