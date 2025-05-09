<script lang="ts">
  import { onMount } from 'svelte'
  import { map, pipe, switchMap, tap } from 'rxjs'

  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { useSearchCtx } from '$lib/ctx/search/index.svelte.js'
  import Input from '$ui/core/Input/Input.svelte'

  import { queryUserWatchlists, type Watchlist } from '../../api.js'

  type TProps = {
    selectedId: Watchlist['id'] | null
    onSelect: (watchlist: Watchlist | null) => void
    loadScreeners?: boolean
  }

  const { selectedId, onSelect, loadScreeners = false }: TProps = $props()

  const { filter, clear, onInput, onKeyUp } = useSearchCtx<Watchlist>({
    getCompareValues: ({ title, description }) => [title, description ?? ''],
  })

  let watchlists = $state<Watchlist[]>([])

  const filteredWatchlists = $derived(filter(watchlists))

  const loadWatchlists = useObserveFnCall(() =>
    pipe(
      switchMap(() => queryUserWatchlists()()),
      map((watchlists) => watchlists.filter(({ isScreener }) => loadScreeners === isScreener)),
      tap((_watchlists) => (watchlists = _watchlists)),
    ),
  )

  onMount(() => {
    loadWatchlists()

    return () => clear()
  })
</script>

<section class="flex flex-col gap-3">
  <Input icon="search" placeholder="Search for watchlist" oninput={onInput} onkeyup={onKeyUp} />

  <section class="flex flex-col gap-3">
    {#each filteredWatchlists as watchlist}
      {@const { id, title, description } = watchlist}
      {@const isActive = selectedId === id}

      <Button
        variant="plain"
        size="auto"
        class={cn(
          'group flex-col items-start gap-0 rounded border bg-white px-3 py-2 hover:border-green hover:text-green',
          isActive && 'border-green',
        )}
        onclick={() => onSelect(isActive ? null : watchlist)}
      >
        <div class="flex w-full items-center justify-between">
          {title}
          {#if isActive}
            <Svg id="checkmark" w="8" />
          {/if}
        </div>

        <p class="text-xs text-waterloo">{description || ''}</p>
      </Button>
    {/each}
  </section>
</section>
