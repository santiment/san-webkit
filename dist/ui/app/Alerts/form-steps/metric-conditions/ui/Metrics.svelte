<script lang="ts">
  import { SvelteSet } from 'svelte/reactivity'

  import Button from '../../../../../core/Button/Button.svelte'
  import { cn } from '../../../../../utils/index.js'
  import { type TRegistryMetric } from '../../../../../../ctx/metrics-registry/index.js'
  import Input from '../../../../../core/Input/Input.svelte'

  import { useMetricGraph } from './metrics.svelte.js'
  import Metric from './Metric.svelte'

  type TProps = {
    metric: TRegistryMetric | null
    onSelect: (metric: string) => void
  }

  const { metric, onSelect }: TProps = $props()

  const { graph, searchTerm, onSearchInput, onSearchKeyUp } = useMetricGraph()

  const openedCategories = new SvelteSet<string>(['Financial'])

  function onCategoryClick(category: string) {
    if (openedCategories.has(category)) {
      openedCategories.delete(category)
    } else {
      openedCategories.add(category)
    }
  }
</script>

<section class="flex flex-col gap-3">
  <Input
    icon="search"
    placeholder="Search for metric"
    oninput={onSearchInput}
    onkeyup={onSearchKeyUp}
  />

  {#if metric}
    <Metric label={metric.label} />
  {/if}

  <section class="flex flex-col gap-2">
    {#each graph.$ as groups}
      {@const { category } = groups[0][0]}
      {@const isOpened = openedCategories.has(category) || searchTerm.$}

      <Button
        variant="plain"
        size="auto"
        class={cn(
          'rounded bg-athens px-4 py-2.5 font-semibold hover:text-green',
          isOpened && 'bg-green-light-1',
        )}
        onclick={() => onCategoryClick(category)}
      >
        {category}
      </Button>

      {#if isOpened}
        <div class="flex flex-col border-l px-3 text-fiord">
          {#each groups as metrics}
            {@const { group } = metrics[0]}

            {#if group}
              <h4 class="text-xs font-semibold text-waterloo [line-height:32px]">{group}</h4>
            {/if}

            {#each metrics as metric (metric.key)}
              <Button
                variant="title"
                class="hover:text-green hover:no-underline"
                onclick={() => onSelect(metric.key)}
              >
                {metric.label}
              </Button>
            {/each}
          {/each}
        </div>
      {/if}
    {/each}
  </section>
</section>
