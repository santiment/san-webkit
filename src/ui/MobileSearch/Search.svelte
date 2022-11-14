<script lang="ts">
  import Header from './Header.svelte'
  import Filter from './Filter.svelte'
  import Assets from './Assets.svelte'
  import Trends from './Trends.svelte'
  import Insights from './Insights.svelte'
  import People from './People.svelte'
  import { FILTER_ITEMS } from './utils'

  export let show = true

  let searchTerm = ''
  let filter = FILTER_ITEMS.Assets
</script>

{#if show}
  <section class="relative">
    <Header bind:searchTerm bind:show />
    <Filter bind:filter />
    {#if filter === FILTER_ITEMS.Assets}
      <Assets {searchTerm} {filter} />
    {:else if filter === FILTER_ITEMS.Trends}
      <Trends {searchTerm} {filter} />
    {:else if filter === FILTER_ITEMS.Insights}
      <Insights {searchTerm} {filter} />
    {:else if filter === FILTER_ITEMS.People}
      <People {searchTerm} {filter} />
    {/if}
  </section>
{/if}

<style>
  section {
    background: var(--white);
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1000;
    padding-top: 16px;
  }
</style>
