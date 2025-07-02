<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../../../form-steps/index.svelte.js'

  import ListOfWatchlists from './ListOfWatchlists.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const selectedId = $derived(step.state.$$.watchlist.id)
</script>

<ListOfWatchlists
  {selectedId}
  onSelect={(watchlist) =>
    (step.state.$$.watchlist = { id: watchlist?.id ?? null, title: watchlist?.title ?? '' })}
/>
