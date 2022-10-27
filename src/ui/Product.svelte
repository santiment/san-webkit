<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  let className = ''
  export { className as class }
  export let title: string
  export let isHalloween: boolean
</script>

<a
  href="/"
  class="body-2 txt-m title row v-center relative {className}"
  on:click={window.__onLinkClick}
>
  {#if isHalloween}
    <Svg illus id="halloween/batman" w="57" h="52" class="$style.batman" />
  {/if}
  <img
    src="{process.env.MEDIA_PATH}/illus/{isHalloween
      ? 'halloween/san-logo-halloween'
      : 'san-logo'}.svg"
    alt="SAN"
    class="product mrg-s mrg--r"
  />
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

  .batman {
    z-index: -1;
    position: absolute;
    left: -12px;
    top: -10px;
  }
</style>
