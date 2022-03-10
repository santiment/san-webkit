<script lang="ts">
  import FollowButton from '@/ui/FollowButton/index.svelte'
  import Profile from './index.svelte'

  export let user: SAN.Author & { name?: string }
  export let isFollowing = true

  $: ({ name, username } = user)
</script>

<div class="info">
  <div class="row v-center justify">
    <Profile {user} class="txt-m">
      <svelte:fragment slot="name">
        {name || 'No full name'}
        <div class="caption c-waterloo txt-r">@{username}</div>
      </svelte:fragment>
    </Profile>

    <FollowButton {user} bind:isFollowing class="mrg-xl mrg--l" />
  </div>
</div>

<style>
  .info {
    padding: 16px 24px 24px;
    --img-size: 40px;
  }

  .caption {
    text-overflow: inherit;
    overflow: inherit;
  }
</style>
