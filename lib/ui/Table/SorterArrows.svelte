<script>
  import Svg from './../../ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? 'asc-V62ZTf' : ''} s-9wdw55" />

<style>
  :global(.s-9wdw55) {
    vertical-align: initial;
    margin-right: -14px;
  }

  :global(.asc-V62ZTf) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
