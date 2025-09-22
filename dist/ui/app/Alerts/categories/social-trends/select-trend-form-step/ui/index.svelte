<script lang="ts">
  import type { TBaseSchema, TTrendState } from '../schema.js'
  import type { TBaseState } from '../../../../form-steps/index.svelte.js'
  import type { Component } from 'svelte'

  import Button from '../../../../../../core/Button/index.js'
  import { cn } from '../../../../../../utils/index.js'
  import { exactObjectKeys } from '../../../../../../../utils/object.js'

  import Asset from './Asset.svelte'
  import Word from './Word.svelte'
  import Watchlist from './Watchlist.svelte'
  import { getInitTrendTarget } from '../utils.js'

  const Tab = (title: string, Component?: Component<{ stepState: { $$: TTrendState } }>) => ({
    title,
    Component,
  })

  const TAB_MAP: Record<TTrendState['target']['type'], ReturnType<typeof Tab>> = {
    asset: Tab('Trending assets', Asset),
    word: Tab('Trending words', Word),
    watchlist: Tab('Watchlist', Watchlist),
  }

  const TABS = exactObjectKeys(TAB_MAP)
  type TabKey = TTrendState['target']['type']

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const { target } = $derived(state.$$)
  const selectedTab = $derived(target.type)
  const TabComponent = $derived(TAB_MAP[selectedTab].Component)

  function selectTab(tab: TabKey) {
    state.$$.target = getInitTrendTarget(tab)
  }
</script>

<section class="flex h-full flex-col gap-4">
  <nav class="flex rounded-md border">
    {#each TABS as tab}
      {@const isActive = tab === selectedTab}

      <Button
        variant="plain"
        size="auto"
        class={cn(
          '-m-px flex-1 justify-center rounded-md border border-transparent bg-transparent px-3 py-1.5 hover:text-green',
          isActive && ' border-green bg-green-light-1 text-green',
        )}
        onclick={() => {
          if (isActive) return

          selectTab(tab)
        }}
      >
        {TAB_MAP[tab].title}
      </Button>
    {/each}
  </nav>

  {#if TabComponent}
    <TabComponent stepState={state} />
  {/if}
</section>
