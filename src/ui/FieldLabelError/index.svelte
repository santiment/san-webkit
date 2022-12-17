<script>
  import Svg from '@/ui/Svg'

  let className = ''
  export { className as class }
  export let message = 'This field is required'
  export let iconId = 'error'
  export let iconWidth = 16
  export let hasLeftMargin = true
  export let visible = false
</script>

<div
  class="hv-center border caption txt-m {hasLeftMargin ? 'mrg--l mrg-s' : ''} {visible
    ? 'visible'
    : 'hidden'} {className}"
>
  <Svg id={iconId} w={iconWidth} class="$style.icon" />
  {message}
</div>

<style>
  div {
    display: inline-flex;
    color: #4e5472;
    fill: var(--red);
    padding: 6px 10px;
    box-shadow: 0px 4px 8px rgba(24, 27, 43, 0.08);
    transition: all 0.2s ease-in-out;
  }

  .visible {
    opacity: 1;
    transform: scale(1);
  }

  .hidden {
    opacity: 0;
    transform: scale(0);
  }

  .icon {
    margin-right: 8px;
  }
</style>
