<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import ChristmasNFTDialog from './Dialog.svelte'

  export const showChristmasNFTDialog = (props) =>
    dialogs.showOnce(ChristmasNFTDialog, Object.assign({ strict: true }, props))
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import Intro from './Into.svelte'
</script>

<Dialog {...$$props} noTitle class="$style.dialog body-2" let:closeDialog>
  <Intro {closeDialog} />
</Dialog>

<style>
  .dialog {
    padding: 0 !important;
  }
</style>
