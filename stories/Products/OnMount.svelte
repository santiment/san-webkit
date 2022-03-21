<script>
  import { onDestroy, onMount } from 'svelte'

  export let mount
  export let destroy

  onMount(mount)

  onDestroy(destroy)
</script>
