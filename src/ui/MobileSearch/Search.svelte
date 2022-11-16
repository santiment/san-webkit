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
      filter: async (searchTerm, items) => {
        const value = searchTerm.toLowerCase()
        let projects = items.filter(({ name, ticker }) => {
          return name.toLowerCase().includes(value) || ticker.toLowerCase().includes(value)
        })

        if (!searchTerm) {
          return items
        }

        return projects
      },
      Component: Asset,
    },
    [FILTER_ITEMS.Trends]: {
      query: queryTrends,
      filter: async (searchTerm, items) => {
        const value = searchTerm.toLowerCase()
        let trends = items.filter((word) => {
          return word.toLowerCase().includes(value)
        })

        if (trends.length === 0 && searchTerm) {
          return [searchTerm]
        }

        return trends
      },
      Component: Trend,
    },
    [FILTER_ITEMS.Insights]: {
      query: queryInsights,
      filter: async (searchTerm, items) => {
        let projects = await queryInsightsBySearchTerm(searchTerm)

        if (!searchTerm) {
          return items
        }

        return projects
      },
      Component: Insight,
    },
    [FILTER_ITEMS.People]: {
      query: queryPeople,
      filter: async (searchTerm, items) => {
        const value = searchTerm.toLowerCase()
        const people = items.filter(({ username }) => username.toLowerCase().includes(value))

        if (!searchTerm) {
          return items
        }

        return people
      },
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
    <Suggestions {searchTerm} {type} {...TABS_CONTENT[type]} />
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
