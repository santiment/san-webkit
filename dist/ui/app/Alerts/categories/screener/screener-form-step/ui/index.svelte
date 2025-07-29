<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TBaseState } from '../../../../form-steps/index.svelte.js'

  import ListOfWatchlists from '../../../watchlist/watchlist-form-step/ui/ListOfWatchlists.svelte'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const selectedId = $derived(state.$$.screener.id)
</script>

<ListOfWatchlists
  {selectedId}
  onSelect={(screener) =>
    (state.$$.screener = {
      id: screener?.id ? +screener.id : null,
      title: screener?.title ?? '',
    })}
  loadScreeners
/>
