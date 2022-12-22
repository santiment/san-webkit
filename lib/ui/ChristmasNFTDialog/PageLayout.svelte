<script>import Svg from './../../ui/Svg/svelte';
import Breadcrumbs from './Breadcrumbs.svelte';
import { Page } from './types';
import Aside from './Aside.svelte';
export let page;
export let title;
export let insights = [];</script>

<div class="wrapper row">
  <section class="column">
    <Breadcrumbs bind:page />

    <main class="column">
      <h2 class="h4 txt-m mrg-xl mrg--b">{title}</h2>

      <slot />

      {#if page < Page.Info}
        <nav class="row justify mrg-a mrg--t">
          <button
            class="pagination btn row v-center"
            class:disabled={page < Page.Top}
            on:click={() => (page -= 1)}
          >
            <Svg id="pointer" w="14" h="8" class="back-2llM8V" />
            Back
          </button>

          <button
            class="pagination btn row v-center"
            class:disabled={page >= Page.Reward}
            on:click={() => (page += 1)}
          >
            Next
            <Svg id="pointer" w="14" h="8" />
          </button>
        </nav>
      {/if}
    </main>
  </section>

  <Aside {insights} />
</div>

<style >.wrapper,
section,
main {
  flex: 1;
}

main {
  padding: 0 48px 24px;
  max-height: 465px;
  overflow: auto;
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

:global(.back-2llM8V) {
  transform: rotate(180deg);
}</style>
