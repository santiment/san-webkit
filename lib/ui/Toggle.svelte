<script>
  let className = ''
  export { className as class }
  export let isActive = false
  export let disabled = false
</script>

<div class="toggle btn relative {className}" on:click class:isActive class:disabled>
  <img alt="Toggle" src="{process.env.ICONS_PATH}/toggle.svg" />
</div>

<style>
  .toggle {
    display: inline-block;
    line-height: 0;
    border-radius: 10px;
    transition: background 185ms;
    --bg: var(--casper);
    --bg-hover: var(--waterloo);
  }
  .toggle::before {
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

  .isActive {
    --bg: var(--green);
    --bg-hover: var(--green-hover);
  }
  .isActive::before {
    transform: translateX(calc(100% + 2px));
  }

  .disabled {
    background: var(--porcelain) !important;
    pointer-events: none !important;
  }
</style>
