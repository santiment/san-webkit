<script context="module">import { dialogs } from './../../ui/Dialog';
import { Preloader } from './../../utils/fn';
import ChristmasNFTDialog from './Dialog.svelte';
import { checkIsGameStarted, queryUserNftInsights, saveDialogClose } from './api';
export const showChristmasNFTDialog = (props) => dialogs.showOnce(ChristmasNFTDialog, props);
export const dataPreloader = Preloader(queryUserNftInsights);
</script>

<script>import { onDestroy, onMount } from 'svelte';
import { trackNftBattleDialogClose, trackNftBattleDialogOpen } from './../../analytics/events/nftbattle';
import Dialog from './../../ui/Dialog';
import PageLayout from './PageLayout.svelte';
import Intro from './Intro.svelte';
import Insight from './Insight.svelte';
import { Page } from './types';
import Top from './Top.svelte';
import Reward from './Reward.svelte';
import Info from './Info.svelte';
export let page = checkIsGameStarted() ? Page.Insight : Page.Intro;
export let isNftWinner = false;
export let currentUser;
export let discountCode;
page = Page.Info;
let insights = [];
if (process.browser) {
    queryUserNftInsights().then((data) => {
        insights = data;
    });
}
$: isDiscountWinner = Boolean(insights.length && discountCode);
$: pages = {
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
        title: isNftWinner
            ? 'Congratulations! You’re a winner! 🎉'
            : isDiscountWinner
                ? 'No NFT, but a special gift'
                : 'Time’s Up ⌛️',
        Component: Info,
    },
};
onMount(trackNftBattleDialogOpen);
onDestroy(() => {
    if (process.browser) {
        trackNftBattleDialogClose(page);
        saveDialogClose();
    }
});
</script>

<Dialog
  {...$$props}
  noTitle={!page}
  title={page ? 'Game details' : undefined}
  class="dialog-7hhdYP"
  let:closeDialog
>
  {#if page === Page.Intro}
    <Intro {closeDialog} bind:page />
  {:else}
    {@const { title, Component } = pages[page]}
    <PageLayout {title} bind:page {insights} {isNftWinner} {isDiscountWinner}>
      <svelte:component
        this={Component}
        {insights}
        {currentUser}
        {discountCode}
        {isNftWinner}
        {isDiscountWinner}
        bind:page
      />
    </PageLayout>
  {/if}
</Dialog>

<style>
  :global(.dialog-7hhdYP) {
    padding: 0 !important;
    width: 960px;
    height: 600px;
    max-height: 600px;
  }
</style>
