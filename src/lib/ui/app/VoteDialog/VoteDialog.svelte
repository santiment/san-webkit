<script lang="ts">
  import { onMount } from 'svelte'

  import { dialogs$ } from '$ui/core/Dialog/dialogs.js'

  import DialogComponent from './DialogComponent.svelte'
  import { getSavedDialogClosed, saveDialogClosed } from './storage.js'

  const showDialog = dialogs$.new(DialogComponent)

  const OPEN_TIMEOUT = 5000

  let openTimer: NodeJS.Timeout | undefined

  function openDialog() {
    clearTimeout(openTimer)
    openTimer = setTimeout(() => showDialog({ onClose: saveDialogClosed }), OPEN_TIMEOUT)
  }

  onMount(() => {
    if (getSavedDialogClosed()) return

    openDialog()
  })
</script>

<div></div>
