<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import ListOfWatchlists from '../../../watchlist/watchlist-form-step/ui/ListOfWatchlists.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  const { step }: TProps = $props()

  const state = step.state

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
