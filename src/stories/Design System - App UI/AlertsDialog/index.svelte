<script>
  import AlertsDialog, { showAlertsDialog$ } from '$ui/app/Alerts/Dialog/index.js'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const showPaymentDialog = showAlertsDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showPaymentDialog()}>Open</button>
  </div>
</div>

<StoryDialog render={AlertsDialog}></StoryDialog>
