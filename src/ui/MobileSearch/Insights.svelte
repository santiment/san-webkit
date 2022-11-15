<script lang="ts">
  import Suggestions from './Suggestions.svelte'
  import { queryInsights, queryInsightsBySearchTerm } from './api'

  export let searchTerm
  export let filter

  let loading = true
  let items = [] as any[]

  $: searchTerm ? onInput(searchTerm) : getInsights()

  function onInput(searchTerm: string) {
    loading = true
    queryInsightsBySearchTerm(searchTerm).then((data) => {
      items = data
      loading = false
    })
  }

  function getInsights() {
    loading = true
    queryInsights().then((data) => {
      items = data
      loading = false
    })
  }
</script>

<Suggestions {items} {loading} {filter} let:item onItemClick={window.__onLinkClick}>
  <div class="wrapper row hv-center">
    <img src="{process.env.MEDIA_PATH}/icons/description-filled.svg" alt="Insights" class="icon" />
  </div>
  <span class="name line-clamp">{item.title}</span>
</Suggestions>

<style>
  .name {
    display: block;
  }

  .wrapper {
    min-width: 24px;
    height: 24px;
    background: var(--orange-light-1);
    border-radius: 24px;
    margin-right: 10px;
  }

  .icon {
    width: 11px;
    height: 13px;
  }
</style>
