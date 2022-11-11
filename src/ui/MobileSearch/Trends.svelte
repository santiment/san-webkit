<script lang="ts">
  import { queryTrends } from '@/api/trends'
  import Suggestions from './Suggestions.svelte'

  export let searchTerm
  export let filter

  let loading = true
  let trends = [] as any[]
  let items = trends

  queryTrends().then((data) => {
    trends = data
    loading = false
  })

  $: trends, onInput(searchTerm)

  function onInput(searchTerm: string) {
    const value = searchTerm.toLowerCase()
    items = trends.filter((word) => {
      return word.toLowerCase().includes(value)
    })
  }
</script>

<Suggestions {items} {loading} {filter} let:item onItemClick={window.__onLinkClick}>
  <img src="{process.env.MEDIA_PATH}/icons/trend-icon.svg" alt="Trend" class="$style.icon" />
  <span class="name single-line line-clamp">{item}</span>
</Suggestions>

<style>
  .name {
    display: block;
  }

  .icon {
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }
</style>
