<script>
  export let amount

  let node
  let active = 0

  function onScroll({ currentTarget }) {
    const { scrollWidth, scrollLeft } = currentTarget
    const sectionWidth = scrollWidth / amount
    active = Math.round(scrollLeft / sectionWidth)
  }

  const SCROLL_OPTIONS = { behavior: 'smooth', block: 'nearest', inline: 'nearest' }
  function onClick({ target }) {
    node.children[+target.dataset.i].scrollIntoView(SCROLL_OPTIONS)
  }
</script>

<!-- svelte-ignore redundant-event-modifier -->
<div bind:this={node} class="slides" on:scroll|passive={onScroll}>
  <slot />
</div>

<div class="row mrg-xl mrg--t h-center">
  {#each Array(amount) as _, i}
    <div
      data-i={i}
      class="indicator btn mrg-l mrg--r"
      class:active={i === active}
      on:click={onClick}
    />
  {/each}
</div>

<style lang="scss">
  .slides {
    flex: 1;
    overflow-x: auto;
    display: flex;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    & > :global(*) {
      scroll-snap-align: center;
      min-width: 100%;
      min-height: 100%;
      margin-right: 32px;

      &:last-child {
        margin: 0;
      }
    }
  }

  .indicator {
    width: 8px;
    height: 8px;
    background: var(--porcelain);
    border-radius: 50%;

    &:last-child {
      margin: 0;
    }
  }

  .active {
    background: var(--black);
  }
</style>
