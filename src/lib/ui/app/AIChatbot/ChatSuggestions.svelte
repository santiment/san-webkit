<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'

  type TProps = {
    onSubmit: (suggestion: string) => void
  }

  const { onSubmit }: TProps = $props()

  const suggestions = [
    'Explain this dashboard simply',
    'Summarise the main takeaways from this dashboard',
    'Why did the price of the token drop?',
    'Give me the main takeaways from Bullish and Bearish summaries',
  ]
</script>

<div class="flex-1">
  <h4 class="mb-[52px] mt-[128px] max-w-[300px] text-2xl text-fiord">
    Ask Santiment AI Make Sense of the Market
  </h4>
  <ul class="mb-6 flex flex-col gap-2">
    {#each suggestions as suggestion}
      <li>
        <Button
          class="h-10 text-rhino"
          variant="border"
          onclick={(e) => {
            e.stopPropagation()
            onSubmit(suggestion)
          }}>{suggestion}</Button
        >
      </li>
    {/each}
  </ul>
</div>
