<script lang="ts">
  import Button from '../../../../core/Button/Button.svelte'
  import { cn } from '../../../../utils/index.js'

  type TProps = {
    suggestions: string[]
    title?: string
    class?: string
    onItemClick: (suggestion: string) => void
  }

  const { title = 'Related', class: className = '', suggestions, onItemClick }: TProps = $props()
</script>

<div class={cn('py-4', className)}>
  <h4 class="mb-4 text-base font-semibold text-rhino">{title}</h4>

  <ul class="sm:![&>li]:mb-2.5 [&>li]:mb-3 last:[&>li]:mb-0">
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
