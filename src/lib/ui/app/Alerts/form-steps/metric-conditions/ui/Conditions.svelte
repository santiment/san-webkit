<script lang="ts">
  import type { TMetricConditionsState } from '../schema.js'

  import Input from '$ui/core/Input/Input.svelte'
  import { TimeModifiers } from '$ui/app/Alerts/time.js'
  import { parseRangeString } from '$lib/utils/dates/index.js'
  import { exactObjectKeys } from '$lib/utils/object.js'
  import { cn } from '$ui/utils/index.js'

  import { describeConditions, getOperationSign } from '../utils.js'
  import Metric from './Metric.svelte'
  import { isDuplexOperation, Operations } from '../operations.js'
  import Dropdown from './Dropdown.svelte'

  type TProps = {
    state: { $$: TMetricConditionsState }
    onMetricChange: () => void
  }

  const { state, onMetricChange }: TProps = $props()

  const conditions = $derived(state.$$.conditions)
  const metric = $derived(state.$$.metric)
  const operation = $derived(conditions.operation)
  const sign = $derived(getOperationSign(metric ?? '', operation.type))
  const isDuplex = $derived(isDuplexOperation(operation.type))
  const { amount: timeAmount, modifier: timeModifier } = $derived(parseRangeString(conditions.time))
</script>

<section class="flex flex-col gap-8">
  <Metric label={state.$$.metricLabel} onclick={onMetricChange} />

  <section>
    <h4 class="mb-6 text-lg">Conditions</h4>

    <section class="mb-4">
      <section class="grid grid-cols-2 gap-x-2 gap-y-3">
        <Dropdown
          items={exactObjectKeys(Operations)}
          class={cn(isDuplex && 'col-span-full grid')}
          selected={operation.type}
          onSelect={(operation) => (state.$$.conditions.operation.type = operation)}
        >
          {#snippet label(operation)}
            {Operations[operation].label}
          {/snippet}
        </Dropdown>

        {@render input({
          sign,
          defaultValue: operation.values[0],
          oninput: (value) => (state.$$.conditions.operation.values[0] = value),
        })}

        {#if isDuplex}
          {@render input({
            sign,
            defaultValue: operation.values[1],
            oninput: (value) => (state.$$.conditions.operation.values[1] = value),
          })}
        {/if}

        {@render input({
          defaultValue: timeAmount,
          oninput: (value) => (state.$$.conditions.time = `${value}${timeModifier}`),
        })}

        <Dropdown
          items={exactObjectKeys(TimeModifiers)}
          selected={timeModifier}
          onSelect={(modifier) => (state.$$.conditions.time = `${timeAmount}${modifier}`)}
        >
          {#snippet label(modifier)}
            {TimeModifiers[modifier].label}
          {/snippet}
        </Dropdown>
      </section>
    </section>

    <section class="flex flex-col">
      <div class="font-medium text-fiord">
        {describeConditions(metric, conditions)}
      </div>
    </section>
  </section>
</section>

{#snippet input({
  sign,
  defaultValue,
  oninput,
}: {
  sign?: string
  defaultValue: number
  oninput: (value: number) => void
})}
  <Input type="number" min="0" {defaultValue} oninput={(e) => oninput(+e.currentTarget.value)}>
    {#snippet left()}
      {#if sign}
        <span class="mr-1 text-casper">{sign}</span>
      {/if}
    {/snippet}
  </Input>
{/snippet}
