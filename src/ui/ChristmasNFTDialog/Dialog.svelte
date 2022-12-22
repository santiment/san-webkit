<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import ChristmasNFTDialog from './Dialog.svelte'

  export const showChristmasNFTDialog = (props) =>
    dialogs.showOnce(ChristmasNFTDialog, Object.assign({ strict: true }, props))
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import Intro from './Intro.svelte'
  import Insight from './Insight.svelte'
  import { Page } from './types'

  // let route = 'insight'
  let page = Page.Intro
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
  {:else if page === Page.Insight}
    <Insight bind:page />
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
