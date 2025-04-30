<script lang="ts">
  import type { TBaseSchema, TTrendState } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'
  import type { Component } from 'svelte'

  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { exactObjectKeys } from '$lib/utils/object.js'

  import Asset from './Asset.svelte'
  import Word from './Word.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }
  const Tab = (title: string, Component?: Component<{ stepState: { $$: TTrendState } }>) => ({
    title,
    Component,
  })

  const TAB_MAP = {
    asset: Tab('Trending assets', Asset),
    word: Tab('Trending words', Word),
    watchlist: Tab('Watchlist'),
  } as const satisfies Record<string, ReturnType<typeof Tab>>

  const TABS = exactObjectKeys(TAB_MAP)
  type Tab = (typeof TABS)[number]

  let { step }: TProps = $props()

  const { target } = $derived(step.state.$$)

  const selectedTab = $derived(
    target ? TABS['slug' in target ? 0 : 'word' in target ? 1 : 2] : TABS[0],
  )
  const TabComponent = $derived(TAB_MAP[selectedTab].Component)

  function selectTab(tab: Tab) {
    step.state.$$.target = getTabInitTarget(tab)
  }

  function getTabInitTarget(tab: Tab) {
    switch (tab) {
      case 'asset':
        return { slug: [] }
      case 'word':
        return { word: [] }
      case 'watchlist':
        return { watchlist_id: null }
    }
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
          '-m-px flex-1 justify-center rounded-md border border-transparent px-3 py-1.5 hover:text-green',
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
    <TabComponent stepState={step.state} />
  {/if}
</section>
