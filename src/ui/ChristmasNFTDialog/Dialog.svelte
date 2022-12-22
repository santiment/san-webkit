<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import { Preloader } from '@/utils/fn'
  import ChristmasNFTDialog from './Dialog.svelte'
  import { checkIsGameStarted, queryUserNftInsights } from './api'

  export const showChristmasNFTDialog = (props?: any) => dialogs.showOnce(ChristmasNFTDialog, props)

  export const dataPreloader = Preloader(queryUserNftInsights)
</script>

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { trackNftBattleDialogClose, trackNftBattleDialogOpen } from '@/analytics/events/nftbattle'
  import Dialog from '@/ui/Dialog'
  import PageLayout from './PageLayout.svelte'
  import Intro from './Intro.svelte'
  import Insight from './Insight.svelte'
  import { Page } from './types'
  import Top from './Top.svelte'
  import Reward from './Reward.svelte'
  import Info from './Info.svelte'

  export let page = checkIsGameStarted() ? Page.Insight : Page.Intro

  let insights = [] as any[]

  if (process.browser) {
    queryUserNftInsights().then((data) => {
      insights = data
    })
  }

  const pages = {
    [Page.Insight]: {
      title: 'Publish your Insight',
      Component: Insight,
    },
    [Page.Top]: {
      title: 'Winning Criteria',
      Component: Top,
    },
    [Page.Reward]: {
      title: 'Sit back and watch the action',
      Component: Reward,
    },
    [Page.Info]: {
      title: 'About the Santiment Holiday NFT',
      Component: Info,
    },
  }

  onMount(trackNftBattleDialogOpen)

  onDestroy(() => {
    if (process.browser) trackNftBattleDialogClose(page)
  })
</script>

<Dialog
  {...$$props}
  noTitle={!page}
  title={page ? 'Game details' : undefined}
  class="$style.dialog"
  let:closeDialog
>
  {#if page === Page.Intro}
    <Intro {closeDialog} bind:page />
  {:else}
    {@const { title, Component } = pages[page]}
    <PageLayout {title} bind:page {insights}>
      <svelte:component this={Component} {insights} bind:page />
    </PageLayout>
  {/if}
</Dialog>

<style>
  .dialog {
    padding: 0 !important;
    width: 960px;
    height: 600px;
    max-height: 600px;
  }
</style>
