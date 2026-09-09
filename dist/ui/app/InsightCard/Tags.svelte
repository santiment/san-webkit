<script lang="ts">
  import { INSIGHTS_ORIGIN } from '../../../utils/links.js'

  const { items }: { items: { name: string }[] } = $props()
</script>

<div class="h-6 gap-1.5 row">
  {#each items as { name }}
    <a
      href="{INSIGHTS_ORIGIN}/?tags={name}"
      class="inline-flex items-center gap-1.5 rounded border border-porcelain px-1 py-2 text-xs hover:text-green"
    >
      {name}
    </a>
  {/each}
</div>
