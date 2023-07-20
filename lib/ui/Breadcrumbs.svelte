<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let links: { href: string; title: string }[]

  $: lastIndex = links.length - 1
</script>

<breadcrumbs class="row v-center relative nowrap {className}">
  {#each links as { href, title }, i}
    {@const isLast = i === lastIndex}
    <a {href} class:c-casper={!isLast} class:single-line={isLast}>{title}</a>

    {#if !isLast}
      <Svg id="arrow-right" w="4.5" h="8" class="mrg-m mrg--l mrg--r" />
    {/if}
  {/each}
</breadcrumbs>

<style>
  breadcrumbs {
    z-index: 2;
  }
</style>
