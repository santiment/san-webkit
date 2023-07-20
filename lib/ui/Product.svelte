<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let title: string
  export let isXmas = false
</script>

<a
  href="/"
  class="body-2 txt-m title row v-center relative {className}"
  on:click={window.__onLinkClick}
>
  {#if isXmas}
    <Svg illus id="christmas/xmas-hat" w="33" h="18" class="$style.xmas" />
  {/if}
  <img src="{process.env.MEDIA_PATH}/illus/san-logo.svg" alt="SAN" class="product mrg-s mrg--r" />
  {title}
</a>

<style>
  a {
    color: var(--black);
  }

  img {
    width: 32px;
    height: 32px;
  }

  .xmas {
    position: absolute;
    top: -7px;
    left: 9px;
  }
</style>
