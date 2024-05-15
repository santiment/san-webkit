<script context="module">
  import Component from './Dialog.svelte'

  export const showDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$ } from '$lib/ui/Dialog'

  // let { testProp = true }: { testProp: boolean } = $props()
</script>

<Dialog>Hello</Dialog>
