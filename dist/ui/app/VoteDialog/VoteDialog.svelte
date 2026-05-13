<script lang="ts">
  import { onMount } from 'svelte'

  import { dialogs$ } from '../../core/Dialog/dialogs.js'

  import DialogComponent from './DialogComponent.svelte'
  import { getSavedDialogClosed, saveDialogClosed } from './storage.js'

  const showDialog = dialogs$.new(DialogComponent)

  const OPEN_TIMEOUT = 5000

  let openTimer: NodeJS.Timeout | undefined

  function openDialog() {
    if (getSavedDialogClosed()) return

    showDialog({ onClose: saveDialogClosed })
  }

  onMount(() => {
    openTimer = setTimeout(() => openDialog(), OPEN_TIMEOUT)

    return () => clearTimeout(openTimer)
  })
</script>

<div></div>
