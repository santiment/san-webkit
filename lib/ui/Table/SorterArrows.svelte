<script>
  import Svg from './../../ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? 'asc-7x2rjR' : ''} s-k3e7xj" />

<style>
  :global(.s-k3e7xj) {
    vertical-align: initial;
    margin-right: -14px;
  }

  :global(.asc-7x2rjR) {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
