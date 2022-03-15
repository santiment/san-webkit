<script lang="ts">
  import type { CurrentUser } from '@/ui/FollowButton/flow'
  import { queryUserLayouts } from '@/api/user/layouts'
  import { queryUserWatchlists } from '@/api/user/watchlists'
  import FollowButton from '@/ui/FollowButton/svelte'
  import CreationCard from './CreationCard/index.svelte'
  import Profile from './index.svelte'
  import { CreationType } from './types'

  export let user: SAN.Author & { name?: string }
  export let currentUser: SAN.CurrentUser & CurrentUser
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

    {#if currentUser && +currentUser.id === +user.id}
      <a href="/account" class="btn-1 mrg-xl mrg--l" on:click={window.__onLinkClick}
        >Account settings</a>
    {:else}
      <FollowButton {user} {currentUser} class="mrg-xl mrg--l" />
    {/if}
  </div>

  {#if creations.length}
    <div class="cards mrg-xl mrg--t row">
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
    max-width: 420px;
    --img-size: 40px;
  }

  .caption {
    text-overflow: inherit;
    overflow: inherit;
  }

  .cards {
    white-space: initial;
  }

  .justify {
    white-space: nowrap;
  }
</style>
