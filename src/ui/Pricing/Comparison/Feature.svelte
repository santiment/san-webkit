<script>
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'

  export let plans
  export let feature

  const { name, description, isLimit, isAccess, isCheck, postfix = '' } = feature
  const defaultValue = isLimit ? 'Unlimited' : isAccess ? 'Full access' : isCheck ? true : ''

  function getValue(value) {
    return value !== undefined ? value : defaultValue
  }
</script>

<div class="td-h txt-left">
  {name}
  {#if description}
    <Tooltip
      position="bottom"
      align="center"
      offsetY={4}
      closeTimeout={0}
      activeClass="$style.opened"
    >
      <div slot="trigger" class="info btn mrg-xs mrg--l row hv-center">
        <Svg id="info" w="12" />
      </div>
      <div slot="tooltip" class="description">{@html description}</div>
    </Tooltip>
  {/if}
</div>

{#each plans as cell}
  {@const value = getValue(cell[name])}
  {@const isCheckmark = isCheck || !(defaultValue || postfix)}

  <div class="item td" class:disabled={isCheckmark && value === false}>
    {#if isCheckmark}
      {#if value !== false}
        <Svg id="checkmark-circle-filled" w="24" />
      {/if}
    {:else}
      {value}{postfix}
    {/if}
  </div>
{/each}

<style lang="scss">
  .info {
    height: 24px;
    width: 24px;
    fill: var(--waterloo);
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
