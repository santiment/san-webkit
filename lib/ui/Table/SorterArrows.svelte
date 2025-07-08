<script>
  import Svg from './../../ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? 'asc-nxaWDZ' : ''} s-x4zr8c" />

<style>
  :global(.s-x4zr8c) {
    vertical-align: initial;
    margin-right: -14px;
  }

  :global(.asc-nxaWDZ) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
