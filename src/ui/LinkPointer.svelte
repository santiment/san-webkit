<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let href: string
  export let label: string
</script>

<a {...$$props} {href} class="link-pointer v-center {className}">
  {label}
  <Svg id="right-arrow" w={10} h={5} class="$style.svg" />
</a>

<style lang="scss">
  a::after {
    width: calc(100% - 16px);
  }

  .svg {
    margin: 0 2px 0 6px;
    transition: transform 0.2s;

    a:hover & {
      transform: translateX(2px);
    }
  }
</style>
