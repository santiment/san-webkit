<script lang="ts">
  import PlanChangeDialog, { showCancelSubscriptionDialog$ } from '$ui/app/CancelSubscriptionDialog'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const showCancelSubscriptionDialog = showCancelSubscriptionDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showCancelSubscriptionDialog()}>Open</button>
  </div>
</div>

<StoryDialog render={PlanChangeDialog}></StoryDialog>
