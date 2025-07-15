<script lang="ts">
  import { marked } from 'marked'

  import Button from '$ui/core/Button/Button.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'

  type TProps = { definition: { label: string } }
  const { definition }: TProps = $props()

  const htmlDocs =
    marked.parse(`Simple Moving Average indicator calculates the average of a timeseries over a specified period by summing closing values and dividing by the number of periods. It smooths timeseries data to identify trends by reducing noise from short-term fluctuations.
\`\`\`
sma(m1, 30)
\`\`\`

You can as well save the result in the local variable for a later use.
\`\`\`
x1 = sma(m2, 7)
\`\`\`
`)
</script>

<section class="overflow-auto p-4 column">
  <h2 class="flex items-center gap-2 text-lg font-medium">
    <Svg id="fx"></Svg>
    {definition.label}
  </h2>

  <div class="docs relative">
    {@html htmlDocs}

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
