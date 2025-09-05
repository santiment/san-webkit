<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'

  type TProps = {
    suggestions: string[]
    title?: string
    onItemClick: (suggestion: string) => void
  }

  const { title = 'Related', suggestions, onItemClick }: TProps = $props()
</script>

<div class="py-4">
  <h4 class="mb-4 text-base font-semibold text-rhino">{title}</h4>

  <ul class="[&>li]:mb-3 last:[&>li]:mb-0 sm:[&>li]:mb-2.5">
    {#each suggestions as suggestion}
      <li>
        <Button
          variant="link"
          class="inline-block h-auto p-0 text-left"
          onclick={() => onItemClick(suggestion)}
        >
          {suggestion}
        </Button>
      </li>
    {/each}
  </ul>
</div>
