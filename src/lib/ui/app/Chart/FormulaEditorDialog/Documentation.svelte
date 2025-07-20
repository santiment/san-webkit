<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'

  type TProps = { definition: { label: string; documentation: string; metricLabel?: string } }
  const { definition }: TProps = $props()
</script>

<section class="gap-3 overflow-auto p-4 column">
  <h2 class="flex items-center gap-2 fill-waterloo text-base font-medium text-rhino">
    {#if definition.metric}
      <span class="rounded-md bg-athens px-2.5 text-fiord">
        {definition.label}
      </span>
      {definition.metric.fullLabel}
    {:else}
      <Svg id={definition.icon}></Svg>
      {definition.label}
    {/if}
  </h2>

  <div class="docs relative gap-2 text-fiord column">
    {@html definition.documentation || ''}

    <Button icon="copy" explanation="Copy" class="!absolute bottom-3 right-1"></Button>
  </div>
</section>

<style>
  .docs :global {
    pre {
      @apply rounded bg-athens p-3 text-black;
    }

    p code {
      @apply rounded bg-athens px-1.5 py-0.5 font-medium text-fiord;
    }
  }

  :global {
    .mtk1 {
      @apply !text-black;
    }

    /* Comments */
    .mtk8 {
      @apply !text-waterloo;
    }

    /* Strings */
    .mtk20 {
      @apply !text-lima-hover;
    }

    /* Functions */
    .mtk6 {
      @apply !text-purple;
    }

    /* Numbers */
    .mtk7 {
      @apply !text-orange-hover;
    }
  }
</style>
