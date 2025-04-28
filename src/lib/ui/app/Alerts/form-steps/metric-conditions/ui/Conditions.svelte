<script lang="ts">
  import type { TMetricConditionsState } from '../schema.js'

  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/Input.svelte'
  import Popover from '$ui/core/Popover/Popover.svelte'

  import { Operations } from '../operations.js'
  import Metric from './Metric.svelte'

  type TProps = {
    state: { $$: TMetricConditionsState }
    onMetricChange: () => void
  }

  const { state, onMetricChange }: TProps = $props()
</script>

<section>
  <Metric label={state.$$.metricLabel} onclick={onMetricChange} />

  Conditions: <Popover>
    {#snippet children({ props })}
      <Button {...props}>{state.$$.conditions.operation.type ?? 'Select'}</Button>
    {/snippet}

    {#snippet content()}
      {#each Object.values(Operations) as operation (operation.key)}
        <Button
          onclick={() => {
            state.$$.conditions.operation.type = operation.key
          }}>{operation.label}</Button
        >
      {/each}
    {/snippet}
  </Popover>

  Value 1: <Input
    defaultValue={state.$$.conditions.operation.values[0]}
    oninput={(e) => {
      state.$$.conditions.operation.values[0] = +e.currentTarget.value
    }}
  />

  Value 2: <Input
    defaultValue={state.$$.conditions.operation.values[1]}
    oninput={(e) => {
      state.$$.conditions.operation.values[1] = +e.currentTarget.value
    }}
  />
</section>
