<script lang="ts">
  import type { TBaseState } from '../../../../form-steps/index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '../../../../Dialog/StepValue.svelte'

  import { useUserWatchlistsCtx } from '../../../watchlist/data.svelte.js'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const { getWatchlistById } = useUserWatchlistsCtx({ loadScreeners: true })

  const { id, title } = $derived(state.$$.screener)

  $effect(() => {
    if (id && !title) {
      state.$$.screener.title = getWatchlistById(id.toString())?.title ?? ''
    }
  })
</script>

{#if title}
  <StepValue>
    {title}
  </StepValue>
{/if}
