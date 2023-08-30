<svelte:options immutable />

<script lang="ts">
  import { noop } from '@/utils'
  import { onMount } from 'svelte'

  type T = $$Generic<{ title: string; action?: (node: HTMLElement) => any }>
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

  let tabsNode: HTMLElement

  function onTabClick(item: typeof selected, i: number) {
    if (selected !== item) {
      selected = item
      slide(tabsNode.children[i] as HTMLElement)
    }

    onSelect(selected)
  }

  function slide(activeNode: HTMLElement) {
    const { clientWidth, offsetLeft } = activeNode

    activeNode.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    tabsNode.style.setProperty('--_width', `${clientWidth}px`)
    tabsNode.style.setProperty('--_left', `${offsetLeft}px`)
  }

  onMount(() => {
    const activeNode = tabsNode.querySelector('.active') as null | HTMLElement
    if (activeNode) slide(activeNode)
  })
</script>

<tabs class="row no-scrollbar {className}">
  <tabs-visible bind:this={tabsNode} class="row relative nowrap fluid" class:border-bottom={border}>
    {#each tabs as item, i}
      {@const { title, action = noop } = item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <tab
        class="btn"
        class:active={selected === item}
        on:click={() => onTabClick(item, i)}
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

    &::before,
    &::after {
      display: block;
      position: absolute;
      height: var(--underline-height, 1px);
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
