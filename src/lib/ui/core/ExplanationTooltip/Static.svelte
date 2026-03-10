<script lang="ts">
  import type { SS } from '$lib/utils/state.svelte.js'
  import type { ComponentProps, Snippet } from 'svelte'

  import Tooltip from '$lib/ui/core/Tooltip/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    contentClass?: string
    explanation: string | undefined
    trigger: Snippet<[{ ref?: SS<HTMLElement | null> }]>
  } & Omit<ComponentProps<typeof Tooltip>, 'children' | 'content'>

  const { contentClass, explanation, trigger, ...rest }: TProps = $props()
</script>

{#if explanation}
  <Tooltip position="top" children={trigger} noStyles disableHoverableContent {...rest}>
    {#snippet content()}
      <article class={cn('rounded bg-fiord-day px-3 py-1.5 text-xs text-white-day', contentClass)}>
        {explanation}
      </article>
    {/snippet}
  </Tooltip>
{:else}
  {@render trigger({})}
{/if}
