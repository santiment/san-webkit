<script module>
  import Component from './NestedDialog.svelte'

  export const showNestedDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'

  let { customProp, resolve, reject, Controller }: TDialogProps & { customProp?: boolean } =
    $props()
</script>

<Dialog class="p-6">Nested content</Dialog>
