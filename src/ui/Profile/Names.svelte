<script lang="ts">
  import Profile from './index.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author & { name?: string }
  export let followers: number | undefined = undefined

  $: ({ username, email } = user)
  $: hasCaption = (followers && followers >= 0) || email
</script>

<Profile {user} class="txt-m {className}">
  <svelte:fragment slot="name">
    <div class="">
      <div class="caption body-3  txt-r">@{username}</div>
      {#if hasCaption}
        <div class="caption txt-r c-waterloo">
          {#if followers && followers >= 0}
            {followers} Followers
          {:else}
            {email}
          {/if}
        </div>
      {/if}
    </div>
  </svelte:fragment>
</Profile>

<style>
  .caption {
    text-overflow: inherit;
    overflow: inherit;
  }
</style>
