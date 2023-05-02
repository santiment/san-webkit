<script>
  import { fade } from 'svelte/transition'

  export let isActive = true
  export let style = ''
</script>

<slot />

{#if isActive}
  <skeleton out:fade class="row" {style} />
{/if}

<style>
  skeleton {
    height: 100%;
    z-index: 2;
  }
</style>
