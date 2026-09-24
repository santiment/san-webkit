<script lang="ts">
  import type { TConditionsState } from '../schema.js'
  import type { Snippet } from 'svelte'

  import Input from '../../../../../core/Input/Input.svelte'
  import { TimeModifiers } from '../../../time.js'
  import { parseRangeString } from '../../../../../../utils/dates/index.js'
  import { exactObjectKeys } from '../../../../../../utils/object.js'
  import { cn } from '../../../../../utils/index.js'
  import Dropdown, { DropdownItem } from '../../../../../core/Dropdown/index.js'
  import Svg from '../../../../../core/Svg/Svg.svelte'

  import { describeConditions, getOperationSign } from '../utils.js'
  import { isComparisonOperation, isDuplexOperation, Operations } from '../operations.js'
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
        <section class={cn('grid grid-cols-2 gap-x-2 gap-y-3', isDuplex && 'grid-cols-4')}>
          <Dropdown
            class={cn(isDuplex && 'col-span-2  grid')}
            selected={operation.type}
            triggerClass={cn(isDuplex && 'col-span-2')}
            matchTriggerWidth
          >
            {#each exactObjectKeys(Operations) as item}
              <DropdownItem
                {item}
                onclick={() =>
                  updateConditions({ time, operation: { type: item, values: operation.values } })}
              />
            {/each}

            {#snippet label(operation)}
              {@const { label, icon } = Operations[operation]}

              <section class="flex items-center gap-2">
                <Svg id={icon} illus />
                {label}
              </section>
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

            <Dropdown selected={timeModifier} matchTriggerWidth>
              {#each exactObjectKeys(TimeModifiers) as item}
                <DropdownItem
                  {item}
                  onclick={() =>
                    updateConditions({
                      time: `${timeAmount}${item}`,
                      operation,
                    })}
                />
              {/each}

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
  <Input
    class="transition-colors focus-within:border-porcelain hover:border-porcelain hover:bg-athens"
    type="number"
    min="0"
    {defaultValue}
    oninput={(e) => oninput(+e.currentTarget.value)}
  >
    {#snippet left()}
      {#if sign}
        <!-- FIXME: [input-left-fix] Update after Input structure with [left] is fixed -->
        <span class="-mr-1.5 ml-2 text-casper">{sign}</span>
      {/if}
    {/snippet}
  </Input>
{/snippet}
