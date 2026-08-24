<script lang="ts">
  import type { Selected } from '$ui/core/Select/index.js'

  import Select from '$ui/core/Select/index.js'
  import ExplanationTooltip from '$ui/core/ExplanationTooltip/index.js'

  const items: Selected<string>[] = [
    { value: 'apples', label: 'Apples' },
    { value: 'oranges', label: 'Oranges' },
    { value: 'bananas', label: 'Bananas' },
  ]

  let selected = $state.raw(items[0])
</script>

<div class="flex flex-col justify-center gap-4 p-6">
  <div class="flex flex-row items-center gap-2">
    <Select {items} bind:selected />
  </div>

  <div class="sticky bottom-0 flex flex-col items-start overflow-hidden border p-2">
    overflow select
    <Select {items} bind:selected />
  </div>

  <div class="sticky bottom-0 flex flex-col items-start overflow-hidden border p-2">
    select with explanation

    <ExplanationTooltip explanation="select explanation">
      {#snippet trigger({ ref })}
        <Select {ref} {items} bind:selected />
      {/snippet}
    </ExplanationTooltip>
  </div>
</div>
