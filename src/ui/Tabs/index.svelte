<svelte:options immutable />

<script lang="ts">
  import { noop } from '@/utils'
  import { onMount } from 'svelte'

  type T = $$Generic<{ title: string }>
  interface $$Slots {
    default: { item: T }
    after: {}
  }

  let className = 'gap-s c-fiord'
  export { className as class }
  export let tabs: Readonly<T[]>
  export let selected = tabs[0] as (typeof tabs)[number]
  export let onSelect = noop as (selectedTab: typeof selected) => void

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

    tabsNode.style.setProperty('--_width', `${clientWidth}px`)
    tabsNode.style.setProperty('--_left', `${offsetLeft}px`)
  }

  onMount(() => {
    const activeNode = tabsNode.querySelector('.active') as null | HTMLElement
    if (activeNode) slide(activeNode)
  })
</script>

<tabs bind:this={tabsNode} class="row relative {className}">
  {#each tabs as item, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <tab class="btn" class:active={selected === item} on:click={() => onTabClick(item, i)}>
      <slot {item}>
        {item.title}
      </slot>
    </tab>
  {/each}

  <slot name="after" />
</tabs>

<style lang="scss">
  tabs {
    &::after {
      display: block;
      content: '';
      height: 1px;
      background: var(--green);
      bottom: var(--underline-bottom, 0);
      position: absolute;
      left: var(--_left);
      width: var(--_width);
      transition: all 120ms ease-in-out;
    }
  }

  tab {
    padding: var(--tab-padding, 0 0 6px);
    transition: color 120ms ease-in-out;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .active {
    --color: var(--green);
  }
</style>
