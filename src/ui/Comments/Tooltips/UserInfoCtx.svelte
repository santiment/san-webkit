<script context="module" lang="ts">
  import { getContext, setContext, tick } from 'svelte'

  const ID = 'UserInfoTooltipCtx'
  export const getUserInfoTooltip = () => getContext(ID)

  const HREF = '/profile/'
  export const getProfileLinks = (node: HTMLElement) =>
    Array.from(node.querySelectorAll(`a[href*="${HREF}"]`))

  const HOOK_ID = 'UserInfoTooltipHook'
  const setUserInfoTooltipHook = (ctx: any) => setContext(HOOK_ID, ctx)
  export const getUserInfoTooltipHook = () => getContext(HOOK_ID) as (node: Element) => any
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
  const Type = {
    [CommentsType.Layout]: CreationType.Layout,
    [CommentsType.Watchlist]: CreationType.Watchlist,
  }

  let ref = {}

  $: commentsNode && comments.length && tick().then(() => hookTooltip(commentsNode))

  setUserInfoTooltipHook(hookTooltip)
  function hookTooltip(node: HTMLElement) {
    getProfileLinks(node).forEach(hookTooltipNode)
  }

  function hookTooltipNode(node: HTMLElement) {
    const isInReply = node.closest('.caption')
    const isAnonComment = node.textContent?.includes('anonymous')
    if (isInReply || isAnonComment) return
    if (node.__props__) return

    const id = node.href.slice(node.href.indexOf(HREF) + HREF.length)
    node.addEventListener('mouseenter', () => queryUser(id), once)
    ref.tooltip(node, { id })
  }
</script>

<Context
  id={ID}
  {ref}
  settings={{
    openDelay: 200,
    scrollParent: commentsNode,
  }}>
  <slot />

  <svelte:fragment slot="tooltip" let:props>
    <UserInfo {...props} {currentUser} type={Type[type]} />
  </svelte:fragment>
</Context>
