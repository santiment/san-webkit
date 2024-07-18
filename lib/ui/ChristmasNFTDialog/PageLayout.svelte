<script>import { trackNftBattleGameDetailsPage } from './../../analytics/events/nftbattle';
import Svg from './../../ui/Svg/svelte'; // import Breadcrumbs from './Breadcrumbs.svelte'

import { Page } from './types';
import Aside from './Aside.svelte';
export let page;
export let title;
export let isNftWinner = false;
export let isDiscountWinner = false;
export let insights = [];

function changePage(newPage) {
  trackNftBattleGameDetailsPage(newPage, 'bottom_arrows', page);
  page = newPage;
}</script>

<div class="wrapper row">
  <section class="column">
    <!-- <Breadcrumbs bind:page /> -->

    <main class="column hover-scroll">
      <h2 class="h3 txt-m mrg-xl mrg--t mrg--b">{title}</h2>

      <slot />

      {#if page < Page.Info}
        <nav class="row justify mrg-a mrg--t">
          <button
            class="pagination btn row v-center"
            class:disabled={page < Page.Top}
            on:click={() => changePage(page - 1)}
          >
            <Svg id="pointer" w="14" h="8" class="back-RZW2IY" />
            Back
          </button>

          <button
            class="pagination btn row v-center"
            class:disabled={page >= Page.Reward}
            on:click={() => changePage(page + 1)}
          >
            Next
            <Svg id="pointer" w="14" h="8" />
          </button>
        </nav>
      {/if}
    </main>
  </section>

  <Aside {insights} {isNftWinner} {isDiscountWinner} />
</div>

<style >.wrapper,
section,
main {
  flex: 1;
}

main {
  padding: 0 48px 24px;
  max-height: 549px;
}

.pagination {
  gap: 8px;
  margin: 50px 0 0;
  background: none !important;
  --fill: var(--waterloo);
  --color-hover: var(--green);
}
.pagination.disabled {
  fill: var(--mystic);
}

:global(.back-RZW2IY) {
  transform: rotate(180deg);
}</style>
