<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let isActive = false
  export let big = false
  export let disabled = false
</script>

<div class="toggle btn relative {className}" on:click class:isActive class:big class:disabled>
  <Svg id="toggle" w={big ? 40 : 36} h={big ? 18 : 13} class="$style.toggle-icon" />
</div>

<style lang="scss">
  .toggle {
    height: var(--toggle-height, 20px);
    width: var(--toggle-width, 36px);
    display: inline-block;
    line-height: 0;
    border-radius: var(--toggle-radius, 10px);
    transition: background 185ms;
    --bg: var(--casper);
    --bg-hover: var(--waterloo);

    &::before {
      display: inline-block;
      content: '';
      position: absolute;
      width: var(--toggle-before-width, 14px);
      height: var(--toggle-before-height, 14px);
      border-radius: 10px;
      background: #fff;
      transition: transform 185ms;
      left: var(--toggle-before-icon-left, 3px);
      top: var(--toggle-before-icon-top, 3px);
    }
  }

  .toggle-icon {
    position: absolute;
    fill: var(--white);
    top: var(--toggle-icon-top, 3px);
    left: var(--toggle-icon-left, 0);
  }

  .isActive {
    --bg: var(--green);
    --bg-hover: var(--green-hover);

    &::before {
      transform: var(--toggle-before-active, translateX(calc(100% + 2px)));
    }
  }

  .disabled {
    background: var(--porcelain) !important;
    pointer-events: none !important;
  }

  .big {
    --toggle-width: 48px;
    --toggle-height: 24px;
    --toggle-radius: 20px;

    --toggle-icon-top: 3px;
    --toggle-icon-left: 4px;

    --toggle-before-width: 18px;
    --toggle-before-height: 18px;
    --toggle-before-icon-top: 3px;
    --toggle-before-icon-left: 4px;

    --toggle-before-active: translateX(calc(100% + 4px));
  }
</style>
