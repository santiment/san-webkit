<script lang="ts">
  import Button from '../../../core/Button/index.js'
  import Svg from '../../../core/Svg/Svg.svelte'

  import { SCHEMAS, type TAlertSchemaUnion } from '../categories/index.js'

  type TProps = { onSelect: (schema: TAlertSchemaUnion) => void }
  let { onSelect }: TProps = $props()
</script>

<main class="flex flex-col gap-8 overflow-auto px-12 py-8">
  <h2 class="text-2xl">Choose an alert category below:</h2>

  <section class="grid grid-cols-[repeat(auto-fit,minmax(244px,1fr))] gap-4">
    {#each SCHEMAS as schema (schema.name)}
      <Button
        variant="plain"
        class="h-auto flex-col items-start rounded border px-8 pb-8 pt-5 text-start text-fiord hover:border-green"
        onclick={() => onSelect(schema)}
      >
        <h3 class="mb-3 flex items-center gap-3 text-lg text-black">
          <Svg id={schema.ui.icon} w="16" />
          {schema.ui.label}
        </h3>
        {schema.ui.description}
      </Button>
    {/each}
  </section>
</main>
