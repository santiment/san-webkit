<script>
  import Svg from './../../ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? 'asc-TxNeff' : ''} s-182hmq" />

<style>
  :global(.s-182hmq) {
    vertical-align: initial;
    margin-right: -14px;
  }

  :global(.asc-TxNeff) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
