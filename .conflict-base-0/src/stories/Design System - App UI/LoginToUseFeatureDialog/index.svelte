<script>
  import Dialog, { showLoginToUseFeatureDialog$ } from '$ui/app/LoginToUseFeatureDialog/index.js'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const showLoginToUseFeatureDialog = showLoginToUseFeatureDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showLoginToUseFeatureDialog()}>Open</button>
  </div>
</div>

<StoryDialog render={Dialog}></StoryDialog>
