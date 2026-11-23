<script lang="ts">
  import type { Snippet } from 'svelte'

  const {
    valueFormatted = '',
    value,
  }: {
    valueFormatted?: string
    value?: Snippet
  } = $props()
</script>

<div
  class="
    pointer-events-none
    absolute top-0 left-0
    rounded-sm bg-white/80
    px-1 py-0.5
    text-fiord
  "
>
  {#if value}
    {@render value()}
  {:else if valueFormatted}
    {valueFormatted}
  {/if}
</div>
