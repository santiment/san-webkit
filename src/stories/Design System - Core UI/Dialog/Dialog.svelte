<script module>
  import Component from './Dialog.svelte'

  export const showDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import { showNestedDialog$ } from './NestedDialog.svelte'

  let { customProp, resolve, reject, Controller }: TDialogProps & { customProp: boolean } = $props()

  const showNestedDialog = showNestedDialog$()
</script>

<Dialog class="p-6">
  Hello

  <br />

  <button onclick={() => showNestedDialog({ customProp })}>Show Nested dialog</button>
</Dialog>
