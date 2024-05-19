<script>
  import Dialog, { showDialog$ } from './Dialog.svelte'
  import StoryDialog from './StoryDialog.svelte'

  const showDialog = showDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showDialog()}>Open</button>
  </div>
</div>

<StoryDialog render={Dialog}></StoryDialog>
