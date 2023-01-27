<script>
  import Tooltip from '@/ui/Tooltip/svelte'
  import Svg from '@/ui/Svg/svelte'

  export let type = 'error'
  export let text = ''
  export let offsetY = 6
  export let activeClass = ''
</script>

<Tooltip
  isOpened={!!text}
  isEnabled={false}
  class="caption c-black $style.tooltip"
  {offsetY}
  {activeClass}
>
  <slot slot="trigger" />

  <svelte:fragment slot="tooltip">
    <Svg id={type} w="16" class="mrg-xs mrg--r" />
    {text}
  </svelte:fragment>
</Tooltip>

<style>
  .tooltip {
    padding: 6px 8px;
    fill: var(--red);
  }
</style>
