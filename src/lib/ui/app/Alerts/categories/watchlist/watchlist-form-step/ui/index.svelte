<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import ListOfWatchlists from './ListOfWatchlists.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  const { step }: TProps = $props()

  const state = step.state

  const selectedId = $derived(state.$$.watchlist.id)
</script>

<ListOfWatchlists
  {selectedId}
  onSelect={(watchlist) =>
    (state.$$.watchlist = {
      id: watchlist?.id ? +watchlist.id : null,
      title: watchlist?.title ?? '',
    })}
/>
