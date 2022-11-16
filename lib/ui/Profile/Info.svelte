<script>var _a;

import { queryUserLayouts } from './../../api/user/layouts';
import { queryUserAddressWatchlists, queryUserWatchlists } from './../../api/user/watchlists';
import FollowButton from './../../ui/FollowButton/svelte';
import CreationCard from './CreationCard/index.svelte';
import ProfileNames from './Names.svelte';
import { CreationType } from './types';
export let user;
export let currentUser;
export let type;
let creations = [];
const QueryCreations = {
  [CreationType.Layout]: queryUserLayouts,
  [CreationType.Watchlist]: queryUserWatchlists,
  [CreationType.AddressWatchlist]: queryUserAddressWatchlists
};

const setCreations = data => creations = data.slice(0, 2);

if (type) (_a = QueryCreations[type]) === null || _a === void 0 ? void 0 : _a.call(QueryCreations, user.id).then(setCreations);</script>

<div class="info">
  <div class="row v-center justify">
    <ProfileNames
      {user}
      feature={type}
      followers={user && user.followers ? user.followers.count : undefined}
    />

    {#if currentUser && +currentUser.id === +user.id}
      <a href="/account" class="btn-1 mrg-xl mrg--l" on:click={window.__onLinkClick}
        >Account settings</a
      >
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

  .cards {
    white-space: initial;
  }

  .justify {
    white-space: nowrap;
  }
</style>
