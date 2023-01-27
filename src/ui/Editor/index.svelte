<script lang="ts">
  import { onMount } from 'svelte'

  let className = ''
  export { className as class }
  export let editor = undefined
  export let node = undefined
  export let isComments = false
  export let html
  export let placeholder

  let Editor

  onMount(() => {
    import('./Editor.svelte').then((module) => {
      Editor = module.default
    })
  })
</script>

{#if Editor}
  <svelte:component
    this={Editor}
    bind:editor
    bind:node
    {html}
    {isComments}
    {placeholder}
    class={className}
  />
{:else}
  <div class={className} />
{/if}
