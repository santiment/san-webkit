<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'

  type TProps = { definition: { label: string; documentation: string; metricLabel?: string } }
  const { definition }: TProps = $props()
</script>

<section class="overflow-auto p-4 column">
  <h2 class="flex items-center gap-2 text-lg font-medium">
    {#if definition.metricLabel}
      {definition.label}
      {definition.metricLabel}
    {:else}
      <Svg id="fx"></Svg>
      {definition.label}
    {/if}
  </h2>

  <div class="docs relative">
    {@html definition.documentation || ''}

    <Button icon="copy" explanation="Copy" class="!absolute bottom-3 right-1"></Button>
  </div>
</section>

<style>
  .docs :global {
    pre {
      @apply rounded bg-athens p-4;
    }
  }
</style>
