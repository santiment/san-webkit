<script lang="ts">
  import type { Snippet } from 'svelte'

  import { cn } from '$ui/utils/index.js'
  import Dialog, { type TDialogProps } from '$ui/core/Dialog/index.js'
  import Button from '$ui/core/Button/index.js'

  type TProps = {
    class?: string
    resetButton?: Snippet
    children?: Snippet
  }

  const {
    class: className = '',
    resetButton,
    children,
    Controller,
  }: TProps & TDialogProps = $props()
</script>

<Dialog class={cn('h-auto', className)}>
  <header class="flex items-end">
    {@render resetButton?.()}

    <Button
      icon="close"
      class="size-3 fill-waterloo"
      iconSize={12}
      onclick={() => Controller.close(true)}
    ></Button>
  </header>

  {@render children?.()}
</Dialog>
