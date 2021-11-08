<script lang="ts">
  let className = ''
  export { className as class }
  export let title: string
</script>

<a href="/" class="body-2 txt-m title row v-center {className}">
  <img
    src="{process.env.MEDIA_PATH}/icons/san-logo.svg"
    alt="SAN"
    class="mrg-s mrg--r"
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
</style>
