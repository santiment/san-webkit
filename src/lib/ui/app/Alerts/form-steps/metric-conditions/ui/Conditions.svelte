<script lang="ts">
  import type { TConditionsState } from '../schema.js'
  import type { Snippet } from 'svelte'

  import Input from '$ui/core/Input/Input.svelte'
  import { TimeModifiers } from '$ui/app/Alerts/time.js'
  import { parseRangeString } from '$lib/utils/dates/index.js'
  import { exactObjectKeys } from '$lib/utils/object.js'
  import { cn } from '$ui/utils/index.js'

  import { describeConditions, getOperationSign } from '../utils.js'
  import { isComparisonOperation, isDuplexOperation, Operations } from '../operations.js'
  import Dropdown from './Dropdown.svelte'
  import AlertPreview from './AlertPreview/index.js'

  type TProps = {
    conditions: TConditionsState
    metric: string | null
    updateConditions: (conditions: TConditionsState) => void
    children?: Snippet
    info?: Snippet
  }

  const { conditions, metric, updateConditions, info, children }: TProps = $props()

  const { operation, time } = $derived(conditions)
  const sign = $derived(getOperationSign(metric, operation.type))
  const isDuplex = $derived(isDuplexOperation(operation.type))
  const { amount: timeAmount, modifier: timeModifier } = $derived(parseRangeString(conditions.time))
</script>

<section class="flex flex-col gap-8">
  {@render children?.()}

  <section>
    <h4 class="mb-6 text-lg">Conditions</h4>

    <section class="flex flex-col gap-4">
      {@render info?.()}

      <section class="mb-4">
        <section class="grid grid-cols-2 gap-x-2 gap-y-3">
          <Dropdown
            items={exactObjectKeys(Operations)}
            class={cn(isDuplex && 'col-span-full grid')}
            selected={operation.type}
            onSelect={(selected) =>
              updateConditions({ time, operation: { type: selected, values: operation.values } })}
          >
            {#snippet label(operation)}
              {Operations[operation].label}
            {/snippet}
          </Dropdown>

          {@render input({
            sign,
            defaultValue: operation.values[0],
            oninput: (value) =>
              updateConditions({
                time,
                operation: { type: operation.type, values: [value, operation.values[1]] },
              }),
          })}

          {#if isDuplex}
            {@render input({
              sign,
              defaultValue: operation.values[1],
              oninput: (value) =>
                updateConditions({
                  time,
                  operation: { type: operation.type, values: [operation.values[0], value] },
                }),
            })}
          {/if}

          {#if isComparisonOperation(operation.type)}
            {@render input({
              defaultValue: timeAmount,
              oninput: (value) =>
                updateConditions({
                  time: `${value}${timeModifier}`,
                  operation,
                }),
            })}

            <Dropdown
              items={exactObjectKeys(TimeModifiers)}
              selected={timeModifier}
              onSelect={(modifier) =>
                updateConditions({
                  time: `${timeAmount}${modifier}`,
                  operation,
                })}
            >
              {#snippet label(modifier)}
                {TimeModifiers[modifier].label}
              {/snippet}
            </Dropdown>
          {/if}
        </section>
      </section>
    </section>

    <AlertPreview description={describeConditions(metric, conditions)} />
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
        <!-- FIXME: [input-left-fix] Update after Input structure with [left] is fixed -->
        <span class="-mr-1.5 ml-2 text-casper">{sign}</span>
      {/if}
    {/snippet}
  </Input>
{/snippet}
