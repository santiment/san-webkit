<script>
  import Svg from '@/ui/Svg/svelte'

  export let onClick = () => {}
  export let active = true
</script>

<div class="wrapper fluid row hv-center">
  <div class="fluid btn-3 more body-2 mrg--b mrg--t mrg-m">
    Show {active ? 'less' : 'more'} features <Svg
      id="arrow-down"
      w="10"
      h="5.5"
      class="mrg-m mrg--l" />
  </div>
</div>

<style lang="scss">
  .wrapper {
    .more {
      --color: var(--green);
      --color-hover: var(--green-hover);
    }

    .active {
      transform: rotate(180deg);
    }

    &:hover {
      background: var(--porcelain);
    }
  }
</style>
