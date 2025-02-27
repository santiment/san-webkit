<script lang="ts">
  import type { TBreakdownFeature } from './breakdown.js'

  import Svg from '$ui/core/Svg/index.js'
  import Popover from '$ui/core/Popover/index.js'
  import Button from '$ui/core/Button/index.js'

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

<div class="td-h txt-left flex items-center gap-1 text-rhino">
  {name}
  {#if description}
    <Popover side="bottom" align="center" contentProps={{ alignOffset: 8 }}>
      {#snippet children({ props })}
        <Button {...props} icon="info" size="sm" />
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

  <div class="td flex center">
    {#if value === false || value === 'None'}
      <Svg id="close" w="12" class="fill-rhino"></Svg>
    {/if}

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
  .description {
    padding: 14px 20px;
    max-width: 252px;
    color: var(--rhino);

    :global(b) {
      font-weight: 600;
      color: var(--black);
    }
  }
</style>
