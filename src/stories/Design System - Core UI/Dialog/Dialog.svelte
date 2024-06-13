<script context="module">
  import Component from './Dialog.svelte'

  export const showDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogReject, type TDialogResolve } from '$ui/core/Dialog'

  let { resolve, reject }: { resolve: TDialogResolve<boolean>; reject: TDialogReject } = $props()
</script>

<Dialog class="p-6">Hello</Dialog>
