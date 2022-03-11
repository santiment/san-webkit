<script lang="ts">
  import { queryUserLayouts } from '@/api/user/layouts'
  import { queryUserWatchlists } from '@/api/user/watchlists'
  import FollowButton from '@/ui/FollowButton/index.svelte'
  import Profile from './index.svelte'
  import CreationCard from './CreationCard/index.svelte'
  import { CreationType } from './types'

  export let user: SAN.Author & { name?: string }
  export let isFollowing = false
  export let type: CreationType

  let creations: any[] = []

  const QueryCreations = {
    [CreationType.Layout]: queryUserLayouts,
    [CreationType.Watchlist]: queryUserWatchlists,
  }
  const setCreations = (data: any[]) => (creations = data.slice(0, 2))
  if (type) QueryCreations[type](user.id).then(setCreations)

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

  {#if creations.length}
    <div class="mrg-xl mrg--t row">
      {#each creations as creation}
        <CreationCard {type} {creation} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .info {
    padding: 16px 24px 24px;
    min-width: 320px;
    --img-size: 40px;
  }

  .caption {
    text-overflow: inherit;
    overflow: inherit;
  }
</style>
