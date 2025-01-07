<script lang="ts" module>
  import Component from './SimpleDialog.svelte'
  import { dialogs$, type TDialogProps } from './dialogs.js'

  export const showDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Dialog from './Dialog.svelte'

  type TProps = ComponentProps<typeof Dialog> & TDialogProps

  const props: TProps = $props()
</script>

<Dialog {...props} />
