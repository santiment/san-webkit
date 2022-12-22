<script lang="ts">
  import { trackNftBattleGameDetailsPage } from '@/analytics/events/nftbattle'

  import Svg from '@/ui/Svg/svelte'
  import { Page } from './types'

  export let page: Page

  function changePage(newPage: Page) {
    if (newPage === page) return

    trackNftBattleGameDetailsPage(newPage, 'breadcrumbs', page)
    page = newPage
  }
</script>

<nav class="breadcrumbs row v-center">
  <button
    class="page btn"
    class:active={page === Page.Insight}
    on:click={() => changePage(Page.Insight)}>Publish Insight</button
  >
  <Svg id="arrow-right" h="10" w="5.5" />
  <button class="page btn" class:active={page === Page.Top} on:click={() => changePage(Page.Top)}>
    Reach the Top Ten
  </button>
  <Svg id="arrow-right" h="10" w="5.5" />
  <button
    class="page btn"
    class:active={page === Page.Reward}
    on:click={() => changePage(Page.Reward)}
  >
    Get Reward
  </button>

  <button class="info btn row v-center mrg-a mrg--l" on:click={() => changePage(Page.Info)}>
    <Svg id="nft" w="16" class="mrg-s mrg--r" />
    INFO
  </button>
</nav>

<style>
  .breadcrumbs {
    gap: 13.5px;
    padding: 24px 48px;
  }

  .page {
    --color: var(--fiord);
    --color-hover: var(--green);
  }
  .active {
    --color: var(--green);
  }

  .info {
    padding: 8px;
    --bg: var(--blue-light-1);
    --color: var(--blue);
    --bg-hover: var(--blue-light-2);
  }
</style>
