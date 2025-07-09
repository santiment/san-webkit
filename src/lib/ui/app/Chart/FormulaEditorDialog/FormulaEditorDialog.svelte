<script lang="ts" module>
  import Dialog from '$ui/core/Dialog/Dialog.svelte'
  import { dialogs$, type TDialogProps } from '$ui/core/Dialog/dialogs.js'

  import Component from './FormulaEditorDialog.svelte'

  export const showFormulaEditorDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Editor from './Editor/index.js'

  type TProps = TDialogProps

  const { Controller }: TProps = $props()
</script>

<Dialog class="h-[400px] w-[500px] !overflow-visible">
  123

  <Editor></Editor>
</Dialog>
