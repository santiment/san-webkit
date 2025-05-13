<script>
  import Svg from './../../ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? 'asc-fIpV_M' : ''} s-v2yw1y" />

<style>
  :global(.s-v2yw1y) {
    vertical-align: initial;
    margin-right: -14px;
  }

  :global(.asc-fIpV_M) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
