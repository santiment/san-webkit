<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import ListOfWatchlists from '../../../watchlist/watchlist-form-step/ui/ListOfWatchlists.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const selectedId = $derived(step.state.$$.screener.id)
</script>

<ListOfWatchlists
  {selectedId}
  onSelect={(screener) =>
    (step.state.$$.screener = {
      id: screener?.id ? +screener.id : null,
      title: screener?.title ?? '',
    })}
  loadScreeners
/>
