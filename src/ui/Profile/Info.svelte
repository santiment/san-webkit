<script lang="ts">
  import FollowButton from '@/ui/FollowButton/index.svelte'
  import CreationCard from './CreationCard.svelte'
  import Profile from './index.svelte'

  export let user: SAN.Author & { name?: string }
  export let isFollowing = false

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

  <div class="mrg-xl mrg--t row justify">
    <CreationCard />
    <CreationCard />
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
