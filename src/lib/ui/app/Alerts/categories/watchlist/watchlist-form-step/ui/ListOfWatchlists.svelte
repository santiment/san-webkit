<script lang="ts">
  import { onMount } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { useSearchCtx } from '$lib/ctx/search/index.svelte.js'
  import Input from '$ui/core/Input/Input.svelte'
  import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'

  import { type Watchlist } from '../../api.js'
  import { useUserWatchlistsCtx } from '../../data.svelte.js'

  type TProps = {
    selectedId: string | null
    onSelect: (watchlist: Watchlist | null) => void
    loadScreeners?: boolean
  }

  const { selectedId, onSelect, loadScreeners = false }: TProps = $props()

  const { watchlists, checkWatchlistHasAnotherAlert } = useUserWatchlistsCtx({ loadScreeners })
  const { initialAlert } = useAlertFormCtx.get()

  const { filter, clear, onInput, onKeyUp } = useSearchCtx<Watchlist>({
    getCompareValues: ({ title, description }) => [title, description ?? ''],
  })

  const filteredWatchlists = $derived(filter(watchlists.$))

  $effect(() => {
    if (!watchlists.loaded$) return

    const selectedInList = !!watchlists.$.find(({ id }) => selectedId === id)
    if (!selectedInList) {
      onSelect(null)
    }
  })

  onMount(() => {
    return () => clear()
  })
</script>

<section class="flex flex-col gap-3">
  <Input icon="search" placeholder="Search for watchlist" oninput={onInput} onkeyup={onKeyUp} />

  <section class="flex flex-col gap-3">
    {#each filteredWatchlists as watchlist}
      {@const { id, title, description, alerts } = watchlist}
      {@const isActive = selectedId === id}
      {@const disabled = loadScreeners
        ? checkWatchlistHasAnotherAlert(alerts, initialAlert?.id)
        : false}

      <Button
        variant="plain"
        size="auto"
        {disabled}
        explanation={disabled ? 'Alert for this screener already created' : undefined}
        class={cn(
          'group flex-col items-start gap-0 rounded border bg-white px-3 py-2 hover:border-green hover:text-green',
          isActive && 'border-green',
          disabled && 'bg-athens text-mystic hover:border-porcelain hover:text-mystic',
        )}
        onclick={() => onSelect(isActive ? null : watchlist)}
      >
        <div class="flex w-full items-center justify-between">
          {title}
          {#if isActive}
            <Svg id="checkmark" w="8" />
          {/if}
        </div>

        <p class={cn('text-xs text-waterloo', disabled && 'text-mystic')}>{description || ''}</p>
      </Button>
    {/each}
  </section>
</section>
