<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  // import { startFollowFlow } from '@/flow/follow'

  let className = ''
  export { className as class }
  export let user: Pick<SAN.Author, 'id'>
  export let isFollowing = false

  $: postfix = isFollowing ? 'ing' : ''

  function onFollow() {
    isFollowing = !isFollowing
    // startFollowFlow(user.id)
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
