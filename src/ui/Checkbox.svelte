<script lang="ts">
  let className = ''
  export { className as class }
  export let isActive = false
  export let disabled = false
  export let as = 'button'
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={as}
  style="---check:url({process.env.ICONS_PATH}/checkmark.svg)"
  class="btn border {className}"
  class:isActive
  class:disabled
  on:click
/>

<style lang="scss">
  .btn {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: var(--bg);
    --border-hover: var(--green);
  }

  .isActive {
    --border: var(--green);
    --bg: var(--green);
    background: var(---check) no-repeat 50%, var(--bg);

    &:hover {
      --green: var(--green-hover);
    }
  }

  .disabled {
    cursor: not-allowed;
    --bg: var(--athens);
    --border: var(--porcelain);
  }
</style>
