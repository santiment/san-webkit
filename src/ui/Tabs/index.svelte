<svelte:options immutable />

<script lang="ts">
  import { noop } from '@/utils'

  type T = $$Generic<{ title: string; ariaLabel?: string; action?: (node: HTMLElement) => any }>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface $$Slots {
    default: { item: T }
    after: {}
  }

  let className = 'gap-s c-fiord'
  export { className as class }
  export let tabs: Readonly<T[]>
  export let selected = tabs[0] as (typeof tabs)[number]
  export let onSelect = noop as (selectedTab: typeof selected) => void
  export let border = false
  export let tabClass = ''

  let tabsNode: HTMLElement

  function onTabClick(item: typeof selected) {
    if (selected !== item) {
      selected = item
    }

    onSelect(selected)
  }

  function slider(tabsNode: HTMLElement, _selected: (typeof tabs)[number]) {
    function slide(activeNode: HTMLElement) {
      const { clientWidth, offsetLeft } = activeNode

      activeNode.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      tabsNode.style.setProperty('--_width', `${clientWidth}px`)
      tabsNode.style.setProperty('--_left', `${offsetLeft}px`)
    }

    function update(_selected?: (typeof tabs)[number]) {
      const activeNode = tabsNode.querySelector('.active') as null | HTMLElement
      if (activeNode) slide(activeNode)
    }

    update()

    return { update }
  }
</script>

<tabs class="row no-scrollbar {className}">
  <tabs-visible
    bind:this={tabsNode}
    use:slider={selected}
    class="row relative nowrap"
    class:border-bottom={border}
  >
    {#each tabs as item}
      {@const { title, action = noop, ariaLabel } = item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <tab
        class="btn {tabClass}"
        class:active={selected === item}
        aria-label={ariaLabel}
        on:click={() => onTabClick(item)}
        use:action
      >
        <slot {item}>
          {title}
        </slot>
      </tab>
    {/each}

    <slot name="after" />
  </tabs-visible>
</tabs>

<style lang="scss">
  tabs {
    overflow: auto;
    scroll-behavior: smooth;
  }

  tabs-visible {
    gap: inherit;
    flex: 1;
    padding: var(--tabs-padding);

    &::before,
    &::after {
      display: block;
      position: absolute;
      height: 1px;
      bottom: var(--underline-bottom, 0);
    }

    &::before {
      background: var(--porcelain);
      width: 100%;
      left: 0;
    }

    &::after {
      content: '';
      background: var(--green);
      left: var(--_left);
      width: var(--_width);
      transition: all 120ms ease-in-out;
      border-radius: var(--underline-radius);
      height: var(--underline-height, 1px);
    }
  }

  .border-bottom::before {
    content: '';
  }

  tab {
    padding: var(--tab-padding, 0 0 6px);
    transition: var(--tab-transition, color 120ms ease-in-out);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .active {
    --color: var(--green);
    --fill: var(--green);
  }
</style>
