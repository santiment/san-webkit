<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import ListOfWatchlists from './ListOfWatchlists.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const selectedId = $derived(step.state.$$.target.watchlist_id)
</script>

<ListOfWatchlists
  {selectedId}
  onSelect={(watchlist) => (step.state.$$.target.watchlist_id = watchlist?.id ?? null)}
/>
