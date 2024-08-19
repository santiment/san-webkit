<script lang="ts">
  import type { TBreakdownFeature } from './breakdown.js'
  import Svg from '$ui/core/Svg/index.js'
  import Popover from '$ui/core/Popover/index.js'

  let {
    plans = [],
    feature,
  }: { plans: Record<string, undefined | string | boolean>[]; feature: TBreakdownFeature } =
    $props()

  const { name, description, isLimit, isAccess, isCheck, postfix = '' } = feature
  const defaultValue = isLimit ? 'Unlimited' : isAccess ? 'Full access' : isCheck ? true : ''

  function getValue(value: (typeof plans)[number][string]) {
    return value !== undefined ? value : defaultValue
  }
</script>

<div class="td-h txt-left flex items-center gap-2.5">
  {name}
  {#if description}
    <Popover side="bottom" align="center" offsetY={4} closeTimeout={0} activeClass="$style.opened">
      {#snippet children({ ref })}
        <div bind:this={ref.$} class="info btn mrg-xs mrg--l hv-center row">
          <Svg id="info" w="12" />
        </div>
      {/snippet}

      {#snippet content()}
        <div class="description body-3">{@html description}</div>
      {/snippet}
    </Popover>
  {/if}
</div>

{#each plans as cell}
  {@const value = getValue(cell[name])}
  {@const isCheckmark = isCheck || !(defaultValue || postfix)}

  <div class="td flex center" class:disabled={value === false || value === 'None'}>
    {#if isCheckmark}
      {#if value !== false}
        <Svg id="checkmark-circle-filled" w="24" />
      {/if}
    {:else if value}
      {value}{postfix}
    {/if}
  </div>
{/each}

<style>
  .info {
    /* height: 24px; */
    /* width: 24px; */
    fill: var(--waterloo);
  }

  .disabled {
    background: var(--athens);
  }

  .description {
    padding: 14px 20px;
    max-width: 252px;
    color: var(--rhino);

    :global(b) {
      font-weight: 600;
      color: var(--black);
    }
  }

  .opened {
    --bg: var(--athens);
    fill: var(--black) !important;
  }
</style>
