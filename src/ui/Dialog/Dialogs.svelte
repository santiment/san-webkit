<script>
  import { dialogs } from './dialogs'
</script>

<div id="dialogs">
  {#each $dialogs as { Component, props }, i}
    <svelte:component this={Component} {...props} {i} />
  {/each}
</div>
