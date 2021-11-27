<script lang="ts">
  import Svg from '../Svg.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author
</script>

<a
  class="row v-center {className}"
  href="/profile/{user.id}"
  on:click={window.__onLinkClick}
>
  <div class="img mrg-s mrg--r row hv-center">
    {#if user.avatarUrl}
      <img alt="Avatar" src={user.avatarUrl} />
    {:else}
      <Svg id="user" w="16" class="$style.svg" />
    {/if}
  </div>

  <span>
    {user.username || user.email}
    <slot />
  </span>
</a>

<style>
  .img,
  img {
    --size: var(--img-size, 32px);
    width: var(--size);
    height: var(--size);
    max-width: var(--size);
    max-height: var(--size);
    min-width: var(--size);
  }

  .img {
    fill: var(--waterloo);
    background: var(--porcelain);
    border-radius: 50%;
    overflow: hidden;
  }

  a {
    color: var(--black);
  }
  a:hover {
    color: var(--green);
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .svg {
    max-width: 50%;
  }
</style>
