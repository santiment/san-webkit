<script>
  import Svg from '@/ui/Svg/svelte'

  export let isShowingMore = false
</script>

<button
  class="btn fluid btn--accent row hv-center"
  class:more={isShowingMore}
  on:click={() => (isShowingMore = !isShowingMore)}
>
  Show {isShowingMore ? 'more' : 'less'} features
  <Svg id="arrow-down" w="10" h="5.5" class="$style.arrow mrg-m mrg--l" />
</button>

<style lang="scss">
  button {
    padding: 12px;
    border-radius: 0;
    --bg-hover: var(--porcelain);
  }

  .more {
    --rotate: rotate(0deg);
  }

  .arrow {
    transform: var(--rotate, rotate(180deg));
  }
</style>
