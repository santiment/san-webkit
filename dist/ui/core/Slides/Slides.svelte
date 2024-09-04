<script lang="ts">let {
  class: className,
  items,
  onChange,
  children
} = $props();
let node;
let active = $state.raw(items[0]);
function onScroll({ currentTarget }) {
  const { scrollWidth, scrollLeft } = currentTarget;
  const sectionWidth = scrollWidth / items.length;
  active = items[Math.round(scrollLeft / sectionWidth)];
  onChange(active);
}
function onClick({ currentTarget }) {
  if (!currentTarget) return;
  const index = +currentTarget.dataset.i;
  node.children[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
}
</script>

<section class="relative {className}">
  <div
    bind:this={node}
    class="slides flex flex-1 snap-mandatory overflow-x-auto no-scrollbar"
    onscroll={onScroll}
  >
    {#each items as item}
      {@render children(item)}
    {/each}
  </div>

  <nav class="absolute left-1/2 flex -translate-x-1/2 gap-2">
    {#each items as _, i}
      <button data-i={i} class="p-1" onclick={onClick}>
        <div class="size-2 rounded-full bg-mystic" class:bg-black={i === active}></div>
      </button>
    {/each}
  </nav>
</section>

<style>
  .slides {
    padding: var(--slides-v-padding);

    & > :global(*) {
      scroll-snap-align: center;
      min-width: 100%;
      min-height: 100%;
      padding: 0 var(--slides-h-padding, 0);
    }
  }

  nav {
    bottom: calc(var(--slides-indicators-bottom) - 4px);
  }
</style>
