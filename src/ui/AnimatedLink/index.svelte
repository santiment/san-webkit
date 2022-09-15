<script>
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let hasArrow = false
  export let target = '_blank'
  export let rel = 'noopener noreferrer'
  export let href = '#'
  export let label
</script>

<a {href} {target} {rel} {...$$props} class="btn-0 {className} animhover">
  <div class="row v-center">
    <span class="relative">{label}</span>
    {#if hasArrow}
      <Svg id="pointer" w={14} class="$style.svg" />
    {/if}
  </div>
</a>

<style>
  .animhover {
    display: inline-block;
  }

  .animhover .svg {
    margin-left: 2px;
    transform: translateX(-2px);
    transition: transform 0.3s;
  }

  .animhover:hover .svg {
    transform: translateX(0);
  }

  .animhover span:after {
    content: '';
    position: absolute;
    background-color: var(--green);
    bottom: 0;
    left: 0;
    width: 0;
    height: var(--link-underline-height, 1px);
    transform-origin: bottom left;
    transition: width 0.3s;
  }

  .animhover:hover span:after {
    width: 100%;
  }
</style>
