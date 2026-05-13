<script>import Tooltip from './../../ui/Tooltip/svelte';
let className = '';
export { className as class };
export let isLoggedIn;
export let editLabel = 'Edit';
export let titleHoverTooltipClass = '';
export let onEditClick;
</script>

<Tooltip
  isEnabled={isLoggedIn}
  openDelay={110}
  duration={65}
  dark
  position="top"
  align="center"
  class="caption {titleHoverTooltipClass}"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span
    slot="trigger"
    class="btn {className}"
    class:enabled={isLoggedIn}
    on:click={isLoggedIn ? onEditClick : null}
  >
    <slot />
  </span>

  <svelte:fragment slot="tooltip">{editLabel}</svelte:fragment>
</Tooltip>

<style>
  span {
    padding: 4px 10px;
  }

  .enabled {
    --color-hover: var(--green);
    --bg-hover: var(--green-light-1);
  }
</style>
