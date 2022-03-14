<script lang="ts">
  import type { CurrentUser } from './flow'
  import { createEventDispatcher } from 'svelte'
  import Svg from '@/ui/Svg/svelte'
  import { EVENT, checkIsFollowing, startFollowFlow } from './flow'

  const dispatch = createEventDispatcher()

  let className = ''
  export { className as class }
  export let user: Pick<SAN.Author, 'id'>
  export let currentUser: CurrentUser
  export let isFollowing = checkIsFollowing(currentUser, user.id)

  $: postfix = isFollowing ? 'ing' : ''

  function onFollow() {
    if (!currentUser) {
      return window.dispatchEvent(new CustomEvent(EVENT))
    }

    isFollowing = !isFollowing
    startFollowFlow(currentUser, user.id)
    dispatch('click')
  }
</script>

<button class="btn-1 btn--s {className}" on:click={onFollow} class:following={isFollowing}>
  <Svg id="follow{postfix}" w="18" h="16" class="mrg-xs mrg--r" />
  Follow{postfix}
</button>

<style>
  button {
    white-space: nowrap;
  }

  .following {
    --bg: var(--porcelain);
    --color: var(--black);
    --bg-hover: var(--mystic);
  }
</style>
