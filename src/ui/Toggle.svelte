<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let isActive = false
  export let big = false
  export let disabled = false
</script>

<div class="toggle btn relative {className}" on:click class:isActive class:big class:disabled>
  {#if isActive}
    <Svg id="checkmark-large" w={big ? 12 : 11} class="$style.toggle-on" />
  {:else}
    <Svg id="eye-crossed" w={big ? 14 : 11} class="$style.toggle-off" />
  {/if}
</div>

<style lang="scss">
  .toggle {
    height: 20px;
    width: 36px;
    display: inline-block;
    line-height: 0;
    border-radius: 10px;
    transition: background 185ms;
    --bg: var(--casper);
    --bg-hover: var(--waterloo);

    &::before {
      display: inline-block;
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      background: #fff;
      border-radius: 10px;
      transition: transform 185ms;
      left: 3px;
      top: 3px;
    }
  }

  .toggle-on {
    fill: var(--white);
    position: absolute;
    top: 5px;
    left: 5px;
  }

  .toggle-off {
    fill: var(--porcelain);
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .isActive {
    --bg: var(--green);
    --bg-hover: var(--green-hover);

    &::before {
      transform: translateX(calc(100% + 2px));
    }
  }

  .disabled {
    background: var(--porcelain) !important;
    pointer-events: none !important;
  }

  .big {
    width: 48px;
    height: 24px;
    border-radius: 20px;

    .toggle-on {
      top: 6px;
      left: 8px;
    }

    .toggle-off {
      right: 7px;
    }

    &::before {
      width: 18px;
      height: 18px;
      border-radius: 10px;
      left: 4px;
      top: 3px;
    }

    &:global(.isActive) {
      &::before {
        transform: translateX(calc(100% + 4px));
      }
    }
  }
</style>
