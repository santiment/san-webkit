<script lang="ts">
  import type { TTrendState } from '../schema.js'

  import { SvelteSet } from 'svelte/reactivity'
  import { map, pipe, switchMap, tap } from 'rxjs'
  import { onMount } from 'svelte'

  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import VirtualList from '$ui/app/VirtualList/VirtualList.svelte'
  import Checkbox from '$ui/core/Checkbox/Checkbox.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/Input.svelte'
  import { useSearchCtx } from '$lib/ctx/search/index.svelte.js'

  import { queryTrendingWords } from './api.js'

  type TProps = {
    stepState: { $$: TTrendState }
  }

  type Item = ReturnType<typeof Item>
  const Item = <T extends 'title' | 'item'>(
    type: T,
    value: string,
    isActive = false,
    key = '',
  ) => ({
    type,
    value,
    isActive,
    key: value + key,
  })

  const { stepState }: TProps = $props()

  const { filter, onInput, onKeyUp, clear } = useSearchCtx<Item>({
    getCompareValues: ({ value }) => value,
  })

  const selected = new SvelteSet(
    stepState.$$.target.type === 'word' ? stepState.$$.target.words : [],
  )
  let wordItems = $state<Item[]>([])

  $effect(() => {
    stepState.$$.target = { type: 'word', words: Array.from(selected) }
  })

  const selections = $derived(
    selected.size
      ? [Item('title', 'Selected'), ...mapWords(Array.from(selected), true, 'selected')]
      : [],
  )

  const wordsWithoutSelected = $derived(wordItems.filter(({ value }) => !selected.has(value)))
  const filteredWords = $derived(filter(wordsWithoutSelected))
  const allItems = $derived([...selections, Item('title', 'Latest trends'), ...filteredWords])

  function mapWords(words: string[], isActive = false, key?: string) {
    return words.map((word) => Item('item', word, isActive, key))
  }

  function onClick(asset: string) {
    if (selected.has(asset)) {
      selected.delete(asset)
    } else {
      selected.add(asset)
    }
  }

  onMount(() => {
    const loadWords = useObserveFnCall(() =>
      pipe(
        switchMap(() => queryTrendingWords()()),
        map((words) => mapWords(words)),
        tap((_words) => (wordItems = _words)),
      ),
    )

    loadWords()

    return () => clear()
  })
</script>

<section class="flex flex-1 flex-col gap-3">
  <Input
    icon="search"
    placeholder="Search for trending words"
    oninput={onInput}
    onkeyup={onKeyUp}
  />

  <section class="flex-1">
    <VirtualList itemHeight={36} data={allItems} getKey={({ key }) => key}>
      {#snippet children({ type, value, isActive })}
        {#if type === 'title'}
          <h4 class="mb-4 text-xs font-medium text-waterloo">{value}</h4>
        {:else}
          <Button
            variant="plain"
            size="auto"
            class="pb-3 hover:text-green"
            onclick={() => onClick(value)}
          >
            <Checkbox {isActive} />
            {value}
          </Button>
        {/if}
      {/snippet}
    </VirtualList>
  </section>
</section>
