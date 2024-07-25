<script>
  import PaymentDialog, { showPaymentDialog$ } from '$ui/app/PaymentDialog/PaymentDialog.svelte'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const showPaymentDialog = showPaymentDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showPaymentDialog()}>Open</button>
  </div>
</div>

<StoryDialog render={PaymentDialog}></StoryDialog>
