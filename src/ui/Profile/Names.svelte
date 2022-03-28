<script lang="ts">
  import Profile from './index.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author & { name?: string }

  $: ({ name, username } = user)
</script>

<Profile {user} class="txt-m {className}">
  <svelte:fragment slot="name">
    {name || 'No full name'}
    <div class="caption c-waterloo txt-r">@{username}</div>
  </svelte:fragment>
</Profile>

<style>
  .caption {
    text-overflow: inherit;
    overflow: inherit;
  }
</style>
