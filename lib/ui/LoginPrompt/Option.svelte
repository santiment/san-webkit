<script context="module">
  export function openPopup(e) {
    e.preventDefault()
    const href = e.currentTarget.href
    const settings = 'popup'
    const popup = window.open(href, 'Popup sign in', settings)
    popup.focus()
  }
</script>

<script>
  export let tag = 'a'
  let className = 'mrg-s mrg--b'
  export { className as class }
  export let title
  export let href
  export let prefetch = false
  export let icon
  export let loading = false
  export let isSignUp = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={tag}
  class="btn-2 btn--l fluid row v-center {className}"
  class:loading
  {href}
  sapper:prefetch={prefetch}
  on:click
>
  {#if icon}
    <img src="{process.env.MEDIA_PATH}/icons/{icon}.svg" alt={icon} class="mrg-s mrg--r" />
  {/if}

  {isSignUp ? 'Sign up' : 'Log in'} with {title}
</svelte:element>

<style>
  .btn-2 {
    padding: 7px 0 7px 48px;
  }

  img {
    width: 18px;
  }
</style>
