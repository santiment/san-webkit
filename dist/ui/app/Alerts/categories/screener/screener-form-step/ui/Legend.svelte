<script lang="ts">
  import type { TAlertStep } from '../../../../form-steps/index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '../../../../Dialog/StepValue.svelte'

  import { useUserWatchlistsCtx } from '../../../watchlist/data.svelte.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { getWatchlistById } = useUserWatchlistsCtx({ loadScreeners: true })

  const { id, title } = $derived(step.state.$$.screener)

  $effect(() => {
    if (id && !title) {
      step.state.$$.screener.title = getWatchlistById(id)?.title ?? ''
    }
  })
</script>

{#if title}
  <StepValue>
    {title}
  </StepValue>
{/if}
