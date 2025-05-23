<script>
  import Dialog, { showAcknowledgmentsDialog$ } from '$ui/app/AcknowledgmentsDialog/index.js'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const showAcknowledgmentsDialog = showAcknowledgmentsDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showAcknowledgmentsDialog()}>Open</button>
  </div>
</div>

<StoryDialog render={Dialog}></StoryDialog>
