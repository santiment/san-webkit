<script lang="ts">
  import type { Asset } from './types'

  import ProjectIcon from '@/ui/ProjectIcon.svelte'

  let className = 'btn-ghost'
  export { className as class }
  export let item: Asset
  export let isActive = false
</script>

<button class="btn asset row v-center {className}" class:active={isActive} on:click>
  <slot />

  <ProjectIcon {...item} />
  {item.name}

  <span class="c-waterloo">({item.ticker})</span>
</button>

<style>
  .asset {
    gap: 8px;
  }

  .active {
    --bg: var(--casper);
  }
</style>
