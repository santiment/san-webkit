<script>
  import { onDestroy, onMount } from 'svelte'

  export let mount
  export let destroy

  let root

  onMount(() => mount(root))
  onDestroy(() => destroy(root))
</script>

<slot>
  <div bind:this={root} />
</slot>
