<script lang="ts">
  import Profile from './index.svelte'

  let className = ''
  export { className as class }
  export let user: SAN.Author
  export let followers: number | undefined = undefined
  export let feature: string

  $: ({ username, email } = user)
  $: subtitle = followers ? `${followers} Followers` : email
</script>

<Profile {user} {feature} source="profile_info_tooltip" class="txt-m {className}">
  <svelte:fragment slot="name">
    <div>
      <div class="caption body-3 txt-r">{username ? `@${username}` : email}</div>
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
