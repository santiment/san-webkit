<script>
  import Svg from '@/ui/Svg/svelte'

  export let onClick = () => {}
  export let active = false
</script>

<div class="wrapper fluid row hv-center" on:click={onClick}>
  <div class="fluid btn-3 more body-2 mrg--b mrg--t mrg-m">
    Show {active ? 'more' : 'less'} features
    <div class:showMore={!active} class="row v-center mrg-m mrg--l">
      <Svg id="arrow-down" w="10" h="5.5" />
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    .more {
      --color: var(--green);
      --color-hover: var(--green-hover);
    }

    .showMore {
      transform: rotate(180deg);
    }

    &:hover {
      background: var(--porcelain);
    }
  }
</style>
