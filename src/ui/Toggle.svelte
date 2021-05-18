<script lang="ts">
  let className = ''
  export { className as class }
  export let isActive = false
</script>

<div class="toggle {className}" on:click class:isActive>
  <img alt="Toggle" src="{process.env.ICONS_PATH}/toggle.svg" />
</div>

<style>
  .toggle {
    user-select: none;
    position: relative;
    cursor: pointer;
    display: inline-block;
    background: var(--casper);
    line-height: 0;
    border-radius: 10px;
    transition: background 200ms;
  }
  .toggle::before {
    display: inline-block;
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 10px;
    transition: transform 200ms;
    left: 3px;
    top: 3px;
  }

  .isActive {
    background: var(--green);
  }
  .isActive::before {
    transform: translateX(calc(100% + 2px));
  }
</style>
