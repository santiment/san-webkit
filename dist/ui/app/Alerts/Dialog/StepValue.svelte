<script lang="ts">
  import type { Snippet } from 'svelte'

  type TProps = {
    children: Snippet
  }

  const { children }: TProps = $props()
</script>

<span class="inline-flex items-center gap-2 rounded border fill-waterloo px-3 py-1.5">
  {@render children()}
</span>
