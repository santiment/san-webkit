<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  export let title = ''
  export let icon = ''
  export let link = ''
  export let active = false
</script>

<a class="btn-0 column hv-center txt-m" href={link} on:click class:active>
  <Svg id={icon} w="20" h="20" class="icon" />
  {title}
</a>

<style lang="scss">
  a {
    gap: 10px;
    --fill: var(--fiord);
    --fill-hover: var(--green);
    --color: var(--waterloo);
    --color-hover: var(--green);
  }

  .active {
    --fill: var(--green);
    --color: var(--green);
  }
</style>
