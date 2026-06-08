<script lang="ts">
  import { useDeviceCtx } from '$lib/ctx/device'
  import Button from '$ui/core/Button/Button.svelte'
  import { showLandscapeDialog$ } from './LandscapeDialog.svelte'
  import { showDialog$ } from '$ui/core/Dialog/index.js'

  const showLandscapeDialog = showLandscapeDialog$()
  const showDialog = showDialog$()
  useDeviceCtx()
</script>

<div class="flex h-screen flex-col items-center justify-center gap-8">
  <Button variant="fill" onclick={() => showLandscapeDialog()}>Open</Button>

  <Button
    variant="fill"
    onclick={() => showDialog({ children: dialogContent, forceMobileLandscape: true })}
  >
    Open Simple Dialog
  </Button>
</div>

{#snippet dialogContent({ close }: { close: () => void })}
  <div class="flex h-full flex-col gap-3 border-8 border-red p-4">
    Dialog content

    <Button onclick={close}>Close</Button>
  </div>
{/snippet}
