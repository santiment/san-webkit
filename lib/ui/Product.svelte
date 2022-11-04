<script>import Svg from './../ui/Svg/svelte';
let className = '';
export { className as class };
export let title;
export let isHalloween;</script>

<a
  href="/"
  class="body-2 txt-m title row v-center relative {className}"
  on:click={window.__onLinkClick}
>
  {#if isHalloween}
    <Svg illus id="halloween/batman" w="57" h="52" class="batman-VF1a4w" />
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

  :global(.batman-VF1a4w) {
    z-index: -1;
    position: absolute;
    left: -12px;
    top: -10px;
  }
</style>
