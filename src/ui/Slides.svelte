<script>
  let className = ''
  export { className as class }
  export let amount = 1
  export let active = 0

  let node

  function onScroll({ currentTarget }) {
    const { scrollWidth, scrollLeft } = currentTarget
    const sectionWidth = scrollWidth / amount
    active = Math.round(scrollLeft / sectionWidth)
  }

  const SCROLL_OPTIONS = { behavior: 'smooth', block: 'nearest', inline: 'nearest' }
  function onClick({ currentTarget }) {
    node.children[+currentTarget.dataset.i].scrollIntoView(SCROLL_OPTIONS)
  }
</script>

<!-- svelte-ignore redundant-event-modifier -->

<div class="relative {className}">
  <div bind:this={node} class="slides no-scrollbar" on:scroll|passive={onScroll}>
    <slot />
  </div>

  <div class="indicators row">
    {#each Array(amount) as _, i}
      <button data-i={i} class="btn mrg-s mrg--r" on:click={onClick}>
        <div class="indicator" class:active={i === active} />
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  .slides {
    flex: 1;
    overflow-x: auto;
    display: flex;
    scroll-snap-type: x mandatory;
    padding: var(--slides-v-padding);

    & > :global(*) {
      scroll-snap-align: center;
      min-width: 100%;
      min-height: 100%;
      padding: 0 var(--slides-h-padding, 0);
    }
  }

  .indicators {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: calc(var(--indicators-bottom) - 4px);
  }

  .indicator {
    width: 8px;
    height: 8px;
    background: var(--mystic);
    border-radius: 50%;
  }

  .btn {
    padding: 4px;
    &:last-child {
      margin: 0;
    }
  }

  .active {
    background: var(--black);
  }
</style>
