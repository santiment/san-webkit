<script context="module">import { dialogs } from './../../ui/Dialog';
import { Preloader } from './../../utils/fn';
import ChristmasNFTDialog from './Dialog.svelte';
import { checkIsGameStarted, queryUserNftInsights } from './api';
export const showChristmasNFTDialog = props => dialogs.showOnce(ChristmasNFTDialog, props);
export const dataPreloader = Preloader(queryUserNftInsights);</script>

<script>import Dialog from './../../ui/Dialog';
import PageLayout from './PageLayout.svelte';
import Intro from './Intro.svelte';
import Insight from './Insight.svelte';
import { Page } from './types';
import Top from './Top.svelte';
import Reward from './Reward.svelte';
import Info from './Info.svelte';
export let page = checkIsGameStarted() ? Page.Insight : Page.Intro;
let insights = [];

if (process.browser) {
  queryUserNftInsights().then(data => {
    insights = data;
  });
}

const pages = {
  [Page.Insight]: {
    title: 'Publish your Insight',
    Component: Insight
  },
  [Page.Top]: {
    title: 'Winning Criteria',
    Component: Top
  },
  [Page.Reward]: {
    title: 'Sit back and watch the action',
    Component: Reward
  },
  [Page.Info]: {
    title: 'About the Santiment Holiday NFT',
    Component: Info
  }
};</script>

<Dialog
  {...$$props}
  noTitle={!page}
  title={page ? 'Game details' : undefined}
  class="dialog-3KeZHJ"
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
  :global(.dialog-3KeZHJ) {
    padding: 0 !important;
    width: 960px;
    height: 600px;
    max-height: 600px;
  }
</style>
