<script module>
  import Component from './LandscapeDialog.svelte'

  export const showLandscapeDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  let { Controller }: TDialogProps = $props()
</script>

<Dialog forceMobileLandscape>
  <div class="h-full gap-3 border-8 border-red p-4">
    Hello

    <br />

    <Button onclick={() => Controller.close()}>Close</Button>
  </div>
</Dialog>
