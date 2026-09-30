<script lang="ts">
  import type { TBaseState } from '../../../../form-steps/index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '../../../../Dialog/StepValue.svelte'

  import { useUserWatchlistsCtx } from '../../data.svelte.js'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const { getWatchlistById } = useUserWatchlistsCtx()

  const { id, title } = $derived(state.$$.watchlist)

  $effect(() => {
    if (id && !title) {
      state.$$.watchlist.title = getWatchlistById(id.toString())?.title ?? ''
    }
  })
</script>

{#if title}
  <StepValue>
    {title}
  </StepValue>
{/if}
