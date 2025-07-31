<script lang="ts">
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import AlertsDialog, { showAlertsDialog$ } from '$ui/app/Alerts/Dialog/index.js'
  import type { TApiAlert } from '$ui/app/Alerts/types.js'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  type TProps = {
    alert: Partial<TApiAlert>
  }

  let { alert }: TProps = $props()

  useAssetsCtx.set()
  const showAlertsDialog = showAlertsDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showAlertsDialog()}>Open</button>
  </div>
</div>

<StoryDialog
  render={AlertsDialog}
  {alert}
  onCreate={({ title }) => console.log(`Alert ${title} saved`)}
></StoryDialog>
