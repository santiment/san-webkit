<script>
  import Svg from './../../../ui/Svg/svelte'
  import Tooltip from './../../../ui/Tooltip/svelte'

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
      activeClass="opened-R6mSMu"
    >
      <div slot="trigger" class="info btn mrg-xs mrg--l row hv-center">
        <Svg id="info" w="12" />
      </div>
      <div slot="tooltip" class="description body-3">{@html description}</div>
    </Tooltip>
  {/if}
</div>

{#each plans as cell}
  {@const value = getValue(cell[name])}
  {@const isCheckmark = isCheck || !(defaultValue || postfix)}

  <div class="row hv-center td" class:disabled={value === false || value === 'None'}>
    {#if isCheckmark}
      {#if value !== false}
        <Svg id="checkmark-circle-filled" w="24" />
      {/if}
    {:else if value}
      {value}{postfix}
    {/if}
  </div>
{/each}

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.info {
  height: 24px;
  width: 24px;
  fill: var(--waterloo);
}

.disabled {
  background: var(--athens);
}

.description {
  padding: 14px 20px;
  max-width: 252px;
  color: var(--rhino);
}
.description :global(b) {
  font-weight: 600;
  color: var(--black);
}

:global(.opened-R6mSMu) {
  --bg: var(--athens);
  fill: var(--black) !important;
}</style>
