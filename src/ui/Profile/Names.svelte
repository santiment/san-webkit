<script lang="ts">
  import Profile from './index.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author & { name?: string }
  export let followers: number | undefined = undefined

  $: ({ username, email } = user)
  $: subtitle = followers >= 0 ? `${followers} Followers` : email
</script>

<Profile {user} class="txt-m {className}">
  <svelte:fragment slot="name">
    <div>
      <div class="caption body-3  txt-r">@{username}</div>
      {#if subtitle}
        <div class="caption txt-r c-waterloo">
          {subtitle}
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
