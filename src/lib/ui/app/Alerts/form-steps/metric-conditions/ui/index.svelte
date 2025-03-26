<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import Input from '$ui/core/Input/index.js'
  import Checkbox from '$ui/core/Checkbox/Checkbox.svelte'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import Button from '$ui/core/Button/Button.svelte'

  import { Operations } from '../operations.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
</script>

Price: <Checkbox
  isActive={step.isValid.$}
  onCheckedChange={(value) => {
    step.state.$$.metric = value ? 'price_usd' : null
  }}
/>

Conditions: <Popover>
  {#snippet children({ props })}
    <Button {...props}>{step.state.$$.conditions.operation.type ?? 'Select'}</Button>
  {/snippet}

  {#snippet content()}
    {#each Object.values(Operations) as operation (operation.key)}
      <Button
        onclick={() => {
          step.state.$$.conditions.operation.type = operation.key
        }}>{operation.label}</Button
      >
    {/each}
  {/snippet}
</Popover>

Value 1: <Input
  defaultValue={step.state.$$.conditions.operation.values[0]}
  oninput={(e) => {
    step.state.$$.conditions.operation.values[0] = +e.currentTarget.value
  }}
/>

Value 2: <Input
  defaultValue={step.state.$$.conditions.operation.values[1]}
  oninput={(e) => {
    step.state.$$.conditions.operation.values[1] = +e.currentTarget.value
  }}
/>
