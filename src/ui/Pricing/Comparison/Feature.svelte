<script>
  import Svg from '@/ui/Svg/svelte'

  export let plans
  export let feature

  const { name, description, isLimit, isAccess, isCheck } = feature
  const defaultValue = isLimit ? 'Unlimited' : isAccess ? 'Full access' : isCheck ? true : ''

  function getValue(value) {
    return value !== undefined ? value : defaultValue
  }
</script>

<div class="header cell txt-left">
  {name}
  {#if description}
    <div class="info btn">
      <Svg id="info" w="12" class="mrg-s mrg--l" />
    </div>
  {/if}
</div>

{#each plans as cell}
  {@const value = getValue(cell[name])}
  {@const isCheckmark = isCheck || !defaultValue}
  <div class="item cell" class:disabled={isCheckmark && value === false}>
    {#if isCheckmark}
      {#if value !== false}
        <Svg id="checkmark-circle-filled" w="24" />
      {/if}
    {:else}
      {value}
    {/if}
  </div>
{/each}

<style lang="scss">
  .cell {
    padding: 14px 24px;
    border-left: 1px solid var(--porcelain);
    flex: 1;
    fill: var(--accent);
    display: flex;
    align-items: center;

    &:first-child {
      border: 0;
    }
  }

  .header {
    max-width: 240px;
    min-width: 201px;

    :global(.desktop) & {
      max-width: 350px;
    }
  }

  .info {
    --fill: var(--waterloo);
  }

  .item {
    justify-content: center;

    :global(.desktop) & {
      justify-content: unset;
    }
  }

  .disabled {
    background: var(--athens);
  }
</style>
