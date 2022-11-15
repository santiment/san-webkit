<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Suggestions from './Suggestions.svelte'
  import { queryTrends } from './api'

  export let searchTerm
  export let filter

  let loading = true
  let trends = [] as any[]
  let items = trends

  if (process.browser) {
    queryTrends().then((data) => {
      trends = data
      loading = false
    })
  }

  $: trends, onInput(searchTerm)

  function onInput(searchTerm: string) {
    const value = searchTerm.toLowerCase()
    items = trends.filter((word) => {
      return word.toLowerCase().includes(value)
    })

    if (items.length === 0) {
      items = [searchTerm]
    }
  }
</script>

<Suggestions {items} {loading} {filter} let:item onItemClick={window.__onLinkClick}>
  <div class="wrapper row hv-center">
    <Svg id="fire-filled" w="11" h="14" class="$style.icon" />
  </div>
  <span class="name single-line">{item}</span>
</Suggestions>

<style>
  .name {
    display: block;
  }

  .wrapper {
    min-width: 24px;
    height: 24px;
    background: var(--blue-light-1);
    border-radius: 24px;
    margin-right: 10px;
  }

  .icon {
    fill: var(--blue);
  }
</style>
