<script>
  import Svg from '@/ui/Svg/svelte'

  export let isAscending = false
</script>

<Svg illus id="sorted" w="6" h="8" class="mrg-xs mrg--l {isAscending ? '$style.asc' : ''}" />

<style>
  Svg {
    vertical-align: initial;
    margin-right: -14px;
  }

  .asc {
    --sorter-up: var(--waterloo);
    --sorter-down: var(--mystic);
  }
</style>
