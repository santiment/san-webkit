<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { dialogs } from '@/ui/Dialog'

  export let run: () => void

  onMount(run)
  onDestroy(() => dialogs.hide(0))
</script>

<button class="btn-1" on:click={run}>Show dialog</button>
