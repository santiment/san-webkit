<script>
  import Svg from './Svg/svelte'

  let className = ''
  export { className as class }
  export let icon, w, h
  export let type = 'text'
  export let placeholder
  export let name
  export let big = false
</script>

<div class="border row v-center {className}" class:big>
  <Svg id={icon} {w} {h} class="$style.icon" />
  <input {type} {placeholder} {name} />
</div>

<style>
  div {
    position: relative;
    fill: var(--casper);
    height: 32px;
  }
  div:hover,
  div:focus-within {
    border-color: var(--green);
    fill: var(--green);
  }

  input {
    height: 100%;
    flex: 1;
    padding: 6px 6px 6px var(--left, 36px);
    border-radius: 4px;
    color: var(--black);
  }

  .icon {
    position: absolute;
    left: 14px;
  }

  .big {
    height: 40px;
    --left: 40px;
  }
</style>
