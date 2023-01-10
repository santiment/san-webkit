<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { Page } from './types'

  export let page: Page
  export let answer: string

  function changePage(newPage: Page) {
    if (newPage > page) {
      console.log(answer)
    }

    page = newPage
  }
</script>

<nav class="row v-center body-2">
  <button class="pagination btn-1 row hv-center mrg-l mrg--r" on:click={() => changePage(page + 1)}>
    {#if page === Page.Provider}
      <Svg id="rocket-alt" w="12" />
      Submit
    {:else}
      Next
    {/if}
  </button>

  <button
    class="pagination btn-2 txt-center"
    class:disabled={page === Page.Do}
    on:click={() => changePage(page - 1)}
  >
    Previous
  </button>

  <div class="dots row v-center mrg-a mrg--l">
    {#each Object.keys(Page).slice(1, 8) as i}
      <hr class="dot" class:active={Number(i) === page} />
    {/each}
  </div>
</nav>

<style lang="scss">
  nav {
    margin-top: 40px;
  }

  .pagination {
    gap: 10px;
    height: 40px;

    &:nth-child(1) {
      --bg: var(--blue);
      --bg-hover: var(--blue-hover);
      width: 124px;
    }
    &:nth-child(2) {
      --color-hover: var(--blue-hover);
      width: 101px;
    }
  }

  .dots {
    gap: 8px;
  }

  .dot {
    border: none;
    width: 6px;
    height: 6px;
    background: var(--blue-light-3);
    border-radius: 100%;

    &.active {
      background: var(--blue);
    }
  }
</style>
