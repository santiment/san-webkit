<script>export let isActive = false;
let className = '';
export { className as class };</script>

<button
  style="--bg:url({process.env.ICONS_PATH}/checkmark.svg)"
  class:isActive
  class={className}
  on:click />

<style>
  button {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid var(--porcelain);
    background: var(--white);
  }
  button:hover {
    border-color: var(--green);
  }

  .isActive {
    background: var(--bg) no-repeat 50%;
    border-color: var(--green);
    background-color: var(--green);
  }
  .isActive:hover {
    border-color: var(--green-hover);
    background-color: var(--green-hover);
  }
</style>
