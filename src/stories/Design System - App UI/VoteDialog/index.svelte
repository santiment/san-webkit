<script lang="ts">
  import { onMount } from 'svelte'
  import VoteDialog from '$ui/app/VoteDialog/index.js'
  import { clearClosed } from '$ui/app/VoteDialog/storage.js'

  onMount(() => {
    clearClosed()
  })
</script>

<main>
  <VoteDialog />
</main>
