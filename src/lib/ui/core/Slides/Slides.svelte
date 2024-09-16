<script lang="ts">
  import type { Snippet } from 'svelte'

  import { ssd } from 'svelte-runes'
  import { cn } from '$ui/utils/index.js'

  type T = $$Generic
  type Props = {
    class?: string
    items: T[]
    onChange: (item: T) => void
    item: Snippet<[T]>
  }

  let {
    class: className,
    items,
    onChange,

    item: itemSnippet,
  }: Props = $props()

  let node: HTMLElement | undefined
  let active = ssd(() => items[0])

  function onScroll({ currentTarget }: Event) {
    const { scrollWidth, scrollLeft } = currentTarget as HTMLElement
    const sectionWidth = scrollWidth / items.length

    active.$ = items[Math.round(scrollLeft / sectionWidth)]
    onChange(active.$)
  }

  function onClick({ currentTarget }: Event) {
    if (!currentTarget || !node) return

    const index = +(currentTarget as HTMLElement).dataset.i!
    node.children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
  }
</script>

<section
  class={cn('relative flex w-full max-w-[100vw] flex-col items-center gap-4 py-4', className)}
>
  <div
    bind:this={node}
    class="flex w-full flex-1 snap-x snap-mandatory overflow-x-auto no-scrollbar"
    onscroll={onScroll}
  >
    {#each items as item}
      <div class="min-h-full min-w-full snap-center snap-always">
        {@render itemSnippet(item)}
      </div>
    {/each}
  </div>

  <nav class="flex gap-2">
    {#each items as item, i}
      <button data-i={i} class="p-1" onclick={onClick}>
        <div class={cn('size-2 rounded-full bg-mystic', item === active.$ && 'bg-black')}></div>
      </button>
    {/each}
  </nav>
</section>
