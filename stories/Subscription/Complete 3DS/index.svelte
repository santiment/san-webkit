<script>
  import { showComplete3dsDialog$ } from '@/ui/Complete3dsDialog/Dialog.svelte'
  import { onMount } from 'svelte'

  const showComplete3dsDialog = showComplete3dsDialog$()
  onMount(() => {
    showComplete3dsDialog()
  })
</script>
