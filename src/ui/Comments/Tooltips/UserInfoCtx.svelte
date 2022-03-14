<script context="module">
  import { getContext, tick } from 'svelte'

  const ID = 'UserInfoTooltipCtx'
  export const getUserInfoTooltip = () => getContext(ID)
</script>

<script lang="ts">
  import Context from '@/ui/Tooltip/Context.svelte'
  import UserInfo, { queryUser } from './UserInfo.svelte'
  import { CommentsType } from '@/api/comments'
  import { CreationType } from '@/ui/Profile/types'

  export let comments: any[]
  export let commentsNode: HTMLElement
  export let type: CommentsType
  export let currentUser

  const once = { once: true }
  const HREF = '/profile/'
  const Type = {
    [CommentsType.Layout]: CreationType.Layout,
    [CommentsType.Watchlist]: CreationType.Watchlist,
  }

  let ref = {}

  $: commentsNode && comments.length && tick().then(hookTooltip)

  function hookTooltip() {
    Array.from(commentsNode.querySelectorAll(`a[href*="${HREF}"]`)).forEach((node) => {
      const isInReply = node.closest('.caption')
      if (isInReply) return

      const id = node.href.slice(node.href.indexOf(HREF) + HREF.length)
      node.addEventListener('mouseenter', () => queryUser(id), once)
      node.parentNode.classList.add('relative')
      ref.tooltip(node, { id })
    })
  }
</script>

<Context
  id={ID}
  {ref}
  settings={{
    openDelay: 200,
  }}>
  <slot />

  <svelte:fragment slot="tooltip" let:props>
    <UserInfo {...props} {currentUser} type={Type[type]} />
  </svelte:fragment>
</Context>
