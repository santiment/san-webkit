<script>
  import Svg from './../../ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? 'asc-4zpUPv' : ''} s-v1xe6r" />

<style>
  :global(.s-v1xe6r) {
    vertical-align: initial;
    margin-right: -14px;
  }

  :global(.asc-4zpUPv) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
