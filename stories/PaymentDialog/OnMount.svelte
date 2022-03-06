<script>
  import { onDestroy, onMount } from 'svelte'
  import { dialogs } from '@/ui/Dialog'

  export let run

  onMount(run)
  onDestroy(() => dialogs.hide(0))
</script>

<button on:click={run}>Show dialog</button>
