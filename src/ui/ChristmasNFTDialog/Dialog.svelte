<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import ChristmasNFTDialog from './Dialog.svelte'

  export const showChristmasNFTDialog = (props) =>
    dialogs.showOnce(ChristmasNFTDialog, Object.assign({ strict: true }, props))
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import Intro from './Into.svelte'
  import Insight from './Insight.svelte'

  // let route = 'insight'
  let route = ''
</script>

<Dialog
  {...$$props}
  noTitle={!route}
  title={route && 'Game details'}
  class="$style.dialog body-2"
  let:closeDialog
>
  {#if !route}
    <Intro {closeDialog} bind:route />
  {:else if route === 'insight'}
    <Insight />
  {/if}
</Dialog>

<style>
  .dialog {
    padding: 0 !important;
    width: 960px;
    height: 600px;
  }
</style>
