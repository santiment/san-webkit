<script lang="ts">
  import type { Snippet } from 'svelte'

  const { children }: { children: Snippet } = $props()

  $inspect({ children })
</script>

<main class="flex min-h-[inherit] items-center justify-center">
  {@render children()}
</main>
