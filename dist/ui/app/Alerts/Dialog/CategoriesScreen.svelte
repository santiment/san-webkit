<script lang="ts">
  import Button from '../../../core/Button/index.js'

  import { SCHEMAS, type TAlertSchemaUnion } from '../categories/index.js'

  type TProps = { onSelect: (schema: TAlertSchemaUnion) => void }
  let { onSelect }: TProps = $props()
</script>

<div>
  {#each SCHEMAS as schema (schema.name)}
    <Button onclick={() => onSelect(schema)}>
      {schema.ui.label}
    </Button>
  {/each}
</div>
