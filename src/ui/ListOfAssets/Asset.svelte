<script lang="ts">
  import type { Asset } from './api'

  import ProjectIcon from '@/ui/ProjectIcon.svelte'

  let className = 'btn-ghost'
  export { className as class }
  export let item: Asset
</script>

<button class="btn asset row v-center {className}" on:click>
  <slot />

  <ProjectIcon slug={item.slug} />
  {item.name}

  <span class="c-waterloo">({item.ticker})</span>
</button>

<style>
  .asset {
    gap: 8px;
  }
</style>
