<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TBaseState } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import ListOfWatchlists from './ListOfWatchlists.svelte'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const selectedId = $derived(state.$$.watchlist.id)
</script>

<ListOfWatchlists
  {selectedId}
  onSelect={(watchlist) =>
    (state.$$.watchlist = {
      id: watchlist?.id ?? null,
      title: watchlist?.title ?? '',
    })}
/>
