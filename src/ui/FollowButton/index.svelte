<script lang="ts">
  import type { CurrentUser } from './flow'
  import Svg from '@/ui/Svg/svelte'
  import { EVENT, ANON_EVENT, checkIsFollowing, startFollowFlow } from './flow'

  let className = ''
  export { className as class }
  export let user: Pick<SAN.Author, 'id'>
  export let currentUser: null | CurrentUser
  export let isFollowing = checkIsFollowing(currentUser, user.id)

  $: postfix = isFollowing ? 'ing' : ''

  function onFollow() {
    if (!currentUser) {
      return window.dispatchEvent(new CustomEvent(ANON_EVENT))
    }

    isFollowing = !isFollowing
    startFollowFlow(currentUser, user.id)
    return window.dispatchEvent(new CustomEvent(EVENT))
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
