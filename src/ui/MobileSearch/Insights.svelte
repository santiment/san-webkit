<script lang="ts">
  import { queryInsights } from '@/api/insights'
  import Suggestions from './Suggestions.svelte'

  export let searchTerm
  export let filter

  let loading = true
  let items = [] as any[]

  $: searchTerm, onInput(searchTerm)

  function onInput(searchTerm: string) {
    loading = true
    queryInsights(searchTerm).then((data) => {
      items = data
      loading = false
    })
  }
</script>

<Suggestions {items} {loading} {filter} {searchTerm} let:item onItemClick={window.__onLinkClick}>
  <img src="{process.env.MEDIA_PATH}/icons/insight-icon.svg" alt="Insight" class="$style.icon" />
  <span class="name single-line line-clamp">{item.title}</span>
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
