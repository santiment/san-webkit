<script lang="ts">
  import type { TTrendState } from '../schema.js'

  import ListOfWatchlists from '../../../watchlist/watchlist-form-step/ui/ListOfWatchlists.svelte'

  type TProps = {
    stepState: { $$: TTrendState }
  }

  const { stepState }: TProps = $props()

  const target = $derived(stepState.$$.target)
  const selectedId = $derived('watchlist_id' in target ? target.watchlist_id : null)
</script>

<ListOfWatchlists
  {selectedId}
  onSelect={(watchlist) => (stepState.$$.target = { watchlist_id: watchlist?.id ?? null })}
/>
