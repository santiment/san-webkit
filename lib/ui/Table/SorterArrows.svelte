<script>
  import Svg from './../../ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? 'asc-CC3QFl' : ''} s-i2fa0z" />

<style>
  :global(.s-i2fa0z) {
    vertical-align: initial;
    margin-right: -14px;
  }

  :global(.asc-CC3QFl) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
