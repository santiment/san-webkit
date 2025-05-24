<script lang="ts">
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'
  import ExpiredSession, { showExpiredSessionDialog$ } from '$ui/app/ExpiredSessionDialog'

  const showExpiredSessionDialog = showExpiredSessionDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showExpiredSessionDialog()}>Open</button>
  </div>
</div>

<StoryDialog render={ExpiredSession}></StoryDialog>
