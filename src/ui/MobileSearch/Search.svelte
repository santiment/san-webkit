<script lang="ts" context="module">
  import { queryProjects } from '@/api/projects'
  import Asset from './Asset.svelte'
  import Trend from './Trend.svelte'
  import Insight from './Insight.svelte'
  import Person from './Person.svelte'
  import { FILTER_ITEMS } from './utils'
  import { queryInsights, queryInsightsBySearchTerm, queryPeople, queryTrends } from './api'

  export const TABS_CONTENT = {
    [FILTER_ITEMS.Assets]: {
      query: queryProjects,
      filter: (searchTerm, items) =>
        items.filter(
          ({ name, ticker }) =>
            name.toLowerCase().includes(searchTerm) || ticker.toLowerCase().includes(searchTerm),
        ),
      Component: Asset,
    },
    [FILTER_ITEMS.Trends]: {
      query: queryTrends,
      filter: (searchTerm, items) => {
        const trends = items.filter((word) => {
          return word.toLowerCase().includes(searchTerm)
        })

        return trends.length ? trends : [searchTerm]
      },
      Component: Trend,
    },
    [FILTER_ITEMS.Insights]: {
      query: queryInsights,
      filter: (searchTerm) => queryInsightsBySearchTerm(searchTerm),
      Component: Insight,
    },
    [FILTER_ITEMS.People]: {
      query: queryPeople,
      filter: (searchTerm, items) =>
        items.filter(({ username }) => username.toLowerCase().includes(searchTerm)),
      Component: Person,
    },
  }
</script>

<script lang="ts">
  import Header from './Header.svelte'
  import Filter from './Filter.svelte'
  import Suggestions from './Suggestions.svelte'

  export let show = true

  let searchTerm = ''
  let type = FILTER_ITEMS.Assets
</script>

{#if show}
  <section class="relative">
    <Header bind:searchTerm bind:show />
    <Filter bind:type />
    <Suggestions {searchTerm} {type} bind:show {...TABS_CONTENT[type]} />
  </section>
{/if}

<style>
  section {
    background: var(--white);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    padding-top: 16px;
  }
</style>
