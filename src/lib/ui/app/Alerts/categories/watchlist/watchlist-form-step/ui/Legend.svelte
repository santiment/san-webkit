<script lang="ts">
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '$ui/app/Alerts/Dialog/StepValue.svelte'

  import { useUserWatchlistsCtx } from '../../data.svelte.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { getWatchlistById } = useUserWatchlistsCtx()

  const { id, title } = $derived(step.state.$$.watchlist)

  $effect(() => {
    if (id && !title) {
      step.state.$$.watchlist.title = getWatchlistById(id.toString())?.title ?? ''
    }
  })
</script>

{#if title}
  <StepValue>
    {title}
  </StepValue>
{/if}
