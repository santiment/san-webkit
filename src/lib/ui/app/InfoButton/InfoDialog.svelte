<script lang="ts" module>
  import { dialogs$ } from '$lib/ui/core/Dialog/index.js'

  import Component from './InfoDialog.svelte'

  export const showInfoDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import type { Snippet } from 'svelte'

  import Dialog, { type TDialogProps } from '$lib/ui/core/Dialog/index.js'
  import Button from '$lib/ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    contentClass?: string
    title: string
    children: Snippet
  } & TDialogProps

  const { class: className, contentClass, title, children, Controller }: TProps = $props()
</script>

<Dialog class={cn('h-auto', className)}>
  <h2
    class="flex items-center justify-between border-b bg-athens px-5 py-2 pr-3 text-base text-fiord"
  >
    {title}
    <Button icon="close" iconSize="12" onclick={() => Controller.close()} />
  </h2>

  <section class={cn('px-5 py-4 text-base', contentClass)}>
    {@render children()}
  </section>
</Dialog>
