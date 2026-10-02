<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { MetricType } from '../../../../../ctx/metrics-registry/types/index.js'

  import Chip from './Chip.svelte'

  type TProps = { metric: TSeries }
  let { metric }: TProps = $props()

  const propertiesSchema = metric.meta?.settingsSchema?.properties
</script>

{#if metric.type === MetricType.ASSET && propertiesSchema}
  {@const properties = Object.keys(propertiesSchema)}

  {#each properties as property}
    {@const value = metric.selector.$?.[property as keyof typeof metric.selector.$]}

    {#if value !== undefined}
      {@const schema = propertiesSchema[property]}

      <Chip explanation={schema.label}>
        {value}
      </Chip>
    {/if}
  {/each}
{/if}
