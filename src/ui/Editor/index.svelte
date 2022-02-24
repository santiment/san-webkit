<script lang="ts">
  import { onMount } from 'svelte'

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

<svelte:component this={Editor} bind:editor bind:node {html} {isComments} {placeholder} />
