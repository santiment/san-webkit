<script module lang="ts">
  import Component from './AcknowledgmentsDialog.svelte'

  export const showAcknowledgmentsDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'

  const { Controller }: TDialogProps = $props()
</script>

<Dialog class="max-w-[600px]">
  <header
    class="flex items-center justify-between border-b px-5 py-3 md:px-4 md:py-3.5 md:text-fiord"
  >
    <h2 class="text-base">Acknowledgments</h2>
    <Button
      icon="close"
      class="size-3 fill-waterloo"
      iconSize={12}
      onclick={() => Controller.close(true)}
    />
  </header>

  <div class="gap-8 p-5 column">
    <p class="rounded bg-athens p-4 text-fiord">
      TradingView Lightweight Charts™ <br />
      Copyright (с) 2026 TradingView, Inc. https://www.tradingview.com/
    </p>
  </div>
</Dialog>
