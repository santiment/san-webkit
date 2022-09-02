<script>let className = '';
export { className as class };
export let title;</script>

<a href="/" class="body-2 txt-m title row v-center {className}" on:click={window.__onLinkClick}>
  <img src="{process.env.MEDIA_PATH}/illus/san-logo.svg" alt="SAN" class="mrg-s mrg--r" />
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
</style>
