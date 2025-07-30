<script lang="ts">
  import type { TTrendState } from '../schema.js'
  import type { Watchlist } from '../../../watchlist/api.js'

  import ListOfWatchlists from '../../../watchlist/watchlist-form-step/ui/ListOfWatchlists.svelte'

  type TProps = {
    stepState: { $$: TTrendState }
  }

  const { stepState }: TProps = $props()

  const target = $derived(stepState.$$.target)
  const selectedId = $derived(target.type === 'watchlist' ? target.id : null)

  function onSelect(watchlist: Watchlist | null) {
    stepState.$$.target = {
      type: 'watchlist',
      id: watchlist?.id ? +watchlist.id : null,
      title: watchlist?.title ?? '',
    }
  }
</script>

<ListOfWatchlists {selectedId} {onSelect} />
