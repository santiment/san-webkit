<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import Checkbox from '$ui/core/Checkbox/index.js'
  import Button from '$ui/core/Button/index.js'
  import Input from '$ui/core/Input/index.js'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import { Operations } from '$ui/app/Alerts/form-steps/metric-conditions/operations.js'

  import { WalletAlertTypes } from '../../schema.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const conditions = $derived(step.state.$$.conditions)
  const operationType = $derived(conditions?.operation.type ?? 'above')
  const operationValues: [number, number] = $derived(conditions?.operation.values ?? [1, 1])
  const time = $derived(conditions?.time ?? '1d')
</script>

Address: <Input
  defaultValue={step.state.$$.target?.address}
  oninput={(e) => {
    step.state.$$.target = { address: e.currentTarget.value }
  }}
/>

Type: <Popover>
  {#snippet children({ props })}
    <Button {...props}>{step.state.$$.type ?? 'Select'}</Button>
  {/snippet}

  {#snippet content()}
    {#each WalletAlertTypes as walletType}
      <Button
        onclick={() => {
          step.state.$$.type = walletType
        }}
      >
        {walletType}
      </Button>
    {/each}
  {/snippet}
</Popover>

{#if step.state.$$.type === 'wallet_movement'}
  Asset: Ethereum <Checkbox
    isActive={!!step.state.$$.assetSlug}
    onCheckedChange={(value) => {
      step.state.$$.assetSlug = value ? 'ethereum' : null
    }}
  />
{/if}

{#if step.state.$$.type === 'wallet_movement' || step.state.$$.type === 'wallet_usd_valuation'}
  Conditions: <Popover>
    {#snippet children({ props })}
      <Button {...props}>{step.state.$$.conditions?.operation.type ?? 'Select'}</Button>
    {/snippet}

    {#snippet content()}
      {#each Object.values(Operations) as operation (operation.key)}
        <Button
          onclick={() => {
            step.state.$$.conditions = {
              operation: { type: operation.key, values: operationValues },
              time,
            }
          }}>{operation.label}</Button
        >
      {/each}
    {/snippet}
  </Popover>

  Value 1: <Input
    defaultValue={operationValues[0]}
    oninput={(e) => {
      step.state.$$.conditions = {
        operation: { type: operationType, values: [+e.currentTarget.value, operationValues[1]] },
        time,
      }
    }}
  />

  Value 2: <Input
    defaultValue={operationValues[1]}
    oninput={(e) => {
      step.state.$$.conditions = {
        operation: { type: operationType, values: [operationValues[0], +e.currentTarget.value] },
        time,
      }
    }}
  />
{/if}
