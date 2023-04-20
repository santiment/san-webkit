<script lang="ts">
  let className = ''
  export { className as class }
  export let isActive = false
  export let disabled = false
  export let big = false
  export let icon = 'toggle'
  export let as = 'button' as 'button' | 'span'
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={as}
  {...$$restProps}
  class="toggle btn relative hv-center {className}"
  on:click
  class:big
  class:isActive
  class:disabled
>
  <img alt="Toggle" src="{process.env.ICONS_PATH}/{icon}.svg" />
</svelte:element>

<style lang="scss">
  .toggle {
    ---width: var(--toggle-width, 36px);
    ---height: var(--toggle-height, 20px);
    height: var(---height);
    width: var(---width);
    display: inline-flex;
    line-height: 0;
    border-radius: 10px;
    transition: background 185ms;
    --bg: var(--casper);
    --bg-hover: var(--waterloo);

    &::before {
      ---size: var(--circle-size, 14px);
      ---left: var(--circle-left, 3px);

      display: inline-block;
      content: '';
      position: absolute;
      width: var(---size);
      height: var(---size);
      border-radius: 10px;
      background: #fff;
      transition: transform 185ms;
      left: var(---left);
    }
  }

  img {
    width: var(--toggle-img-width, 100%);
  }

  .isActive {
    --bg: var(--green);
    --bg-hover: var(--green-hover);

    &::before {
      // transform: var(--toggle-before-active, translateX(calc(100% + 2px)));
      transform: translateX(calc(var(---width) - 2 * var(---left) - var(---size)));
    }
  }

  .disabled {
    background: var(--porcelain) !important;
    pointer-events: none !important;
  }

  .big {
    border-radius: 20px;
    --toggle-width: 48px;
    --toggle-height: 24px;
    --circle-size: 18px;
    --toggle-img-width: var(--toggle-big-img-width);
  }
</style>
