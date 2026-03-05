<script lang="ts" module>
  const EVENTS = [
    {
      title: 'Asset Movements',
      description:
        'Track value changes of the specific asset in the particular wallet. Choose constant or percentage conditions',
      type: 'wallet_movement',
    },
    {
      title: 'Capitalisation',
      description:
        'Track the combined value of all assets in the wallet. Full capitalisation calculated as a total portfolio in USD',
      type: 'wallet_usd_valuation',
    },
    {
      title: 'Wallet Activities',
      description:
        'Track a list of assets inside the particular wallet for entering or exiting the wallet. Assets have to be with non-zero balance.',
      type: 'wallet_assets_held',
    },
  ] satisfies { title: string; description: string; type: TWalletAlertType }[]
</script>

<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TBaseState } from '../../../../form-steps/index.svelte.js'

  import Button from '../../../../../../core/Button/index.js'
  import Input from '../../../../../../core/Input/index.js'
  import { cn } from '../../../../../../utils/index.js'

  import { type TWalletAlertType } from '../../schema.js'
  import Capitalisation from './Capitalisation.svelte'
  import AssetMovements from './AssetMovements.svelte'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const {
    target: { address, infrastructure },
    type: alertType,
  } = $derived(state.$$)
</script>

<section>
  <label class="group mb-6 flex flex-col gap-1">
    <h4 class="flex justify-between text-xs font-medium text-waterloo">
      Wallet address

      {#if infrastructure}
        <Button variant="link" size="auto" href="/labs/balance?address={address}" target="_blank">
          Open Sanbase
        </Button>
      {/if}
    </h4>

    <Input
      class="group-hover:border-green"
      defaultValue={address ?? ''}
      oninput={({ currentTarget }) => {
        state.$$.target.address = currentTarget.value
      }}
    />
  </label>

  <section class="mb-8 flex flex-col gap-3">
    {#each EVENTS as { type, title, description }}
      {@const active = type === alertType}
      {@const disabled = !infrastructure}

      <Button
        variant="plain"
        size="auto"
        class={cn(
          'group flex flex-col items-stretch gap-1 rounded border px-4 py-3',
          disabled ? 'bg-athens text-casper' : 'hover:border-green',
          active && 'active',
        )}
        {disabled}
        onclick={() => {
          state.$$.type = type
        }}
      >
        <div class="flex justify-between">
          {title}

          <span
            class={cn(
              'size-4 rounded-full border',
              !disabled && 'group-hover:border-green',
              active && 'border-4 border-green',
            )}
          ></span>
        </div>
        <p class={cn('text-start text-waterloo', disabled && 'text-casper')}>{description}</p>
      </Button>
    {/each}
  </section>

  {#if alertType === 'wallet_movement'}
    <AssetMovements stepState={state} />
  {:else if alertType === 'wallet_usd_valuation'}
    <Capitalisation stepState={state} />
  {/if}
</section>
