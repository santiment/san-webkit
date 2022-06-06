<script lang="ts">
  import Profile from './index.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author & { name?: string }
  export let followers: number = 0

  $: ({ username } = user)
</script>

<Profile {user} class="txt-m {className}">
  <svelte:fragment slot="name">
    <div class="">
      <div class="caption body-3  txt-r">@{username}</div>
      <div class="caption txt-r c-waterloo">{followers} Followers</div>
    </div>
  </svelte:fragment>
</Profile>

<style>
  .caption {
    text-overflow: inherit;
    overflow: inherit;
  }
</style>
