<script lang="ts">
  import type { Snippet } from 'svelte'

  import { ssd } from 'svelte-runes'
  import { cn } from '../../utils/index.js'

  type T = $$Generic
  type Props = {
    class?: string
    items: T[]
    onChange: (item: T, slide: number) => void
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

    const i = Math.round(scrollLeft / sectionWidth)
    const item = items[i]

    if (active.$ === item) return

    active.$ = item
    onChange(item, i)
  }

  function onClick({ currentTarget }: Event) {
    if (!currentTarget || !node) return

    const i = +(currentTarget as HTMLElement).dataset.i!

    // NOTE: Smooth scroll is causing multiple `onChange` clb calls. Lock mech. is required in this case
    // node.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    node.children[i].scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' })
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
      <button data-i={i} class="p-1" onclick={onClick} aria-label="slide-{i}">
        <div class={cn('size-2 rounded-full bg-mystic', item === active.$ && 'bg-black')}></div>
      </button>
    {/each}
  </nav>
</section>
