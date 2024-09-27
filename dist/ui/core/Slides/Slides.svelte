<script lang="ts">import { ssd } from "svelte-runes";
import { cn } from "../../utils/index.js";
let {
  class: className,
  items,
  onChange,
  item: itemSnippet
} = $props();
let node;
let active = ssd(() => items[0]);
function onScroll({ currentTarget }) {
  const { scrollWidth, scrollLeft } = currentTarget;
  const sectionWidth = scrollWidth / items.length;
  const i = Math.round(scrollLeft / sectionWidth);
  const item = items[i];
  if (active.$ === item) return;
  active.$ = item;
  onChange(item, i);
}
function onClick({ currentTarget }) {
  if (!currentTarget || !node) return;
  const i = +currentTarget.dataset.i;
  node.children[i].scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" });
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
