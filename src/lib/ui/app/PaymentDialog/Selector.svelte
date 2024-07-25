<script lang="ts">
  import { cn } from '$ui/utils/index.js'
  import type { Snippet } from 'svelte'

  type T = $$Generic<{ name: string }>
  let {
    name,
    smallGap = false,
    options,
    active,
    onSelect,
    children,
  }: {
    name: string
    smallGap?: boolean
    options: T[]
    active?: T
    onSelect: (option: T) => void
    children: Snippet<[T]>
  } = $props()
</script>

<div>
  <h2 class="mb-4 text-lg font-medium text-fiord">{name}</h2>

  <div class={cn('flex text-base font-medium', smallGap ? 'gap-3' : 'gap-4')}>
    {#each options as option (option.name)}
      {@const isActive = option === active}
      <button
        class={cn(
          'gap-3 rounded-lg border border-athens bg-athens px-4 py-3 column',
          !smallGap && 'flex-1',
          isActive && 'border-green bg-green-light-1',
        )}
        onclick={() => onSelect(option)}
      >
        {@render children(option)}
      </button>
    {/each}
  </div>
</div>
