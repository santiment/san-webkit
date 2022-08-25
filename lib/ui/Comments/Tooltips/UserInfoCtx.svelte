<script context="module">
  import { getContext, setContext, tick } from 'svelte'
  const ID = 'UserInfoTooltipCtx'
  export const getUserInfoTooltip = () => getContext(ID)
  const HREF = '/profile/'
  export const getProfileLinks = (node) => Array.from(node.querySelectorAll(`a[href*="${HREF}"]`))
  const HOOK_ID = 'UserInfoTooltipHook'

  const setUserInfoTooltipHook = (ctx) => setContext(HOOK_ID, ctx)

  export const getUserInfoTooltipHook = () => getContext(HOOK_ID)
</script>

<script lang="ts">
  import Context from './../../../ui/Tooltip/Context.svelte'
  import UserInfo, { queryUser } from './UserInfo.svelte'
  import { CommentsType } from './../../../api/comments'
  import { CreationType } from './../../../ui/Profile/types'
  export let comments
  export let commentsNode
  export let type
  export let currentUser
  const once = {
    once: true,
  }
  const Type = {
    [CommentsType.Layout]: CreationType.Layout,
    [CommentsType.Watchlist]: CreationType.Watchlist,
  }
  let ref = {}

  $: commentsNode && comments.length && tick().then(() => hookTooltip(commentsNode))

  setUserInfoTooltipHook(hookTooltip)

  function hookTooltip(node) {
    getProfileLinks(node).forEach(hookTooltipNode)
  }

  function hookTooltipNode(node) {
    var _a

    const isInReply = node.closest('.caption')
    const isAnonComment =
      (_a = node.textContent) === null || _a === void 0 ? void 0 : _a.includes('anonymous')
    if (isInReply || isAnonComment) return
    if (node.__props__) return
    const id = node.href.slice(node.href.indexOf(HREF) + HREF.length)
    node.addEventListener('mouseenter', () => queryUser(id), once)
    ref.tooltip(node, {
      id,
    })
  }
</script>

<Context
  id={ID}
  {ref}
  settings={{
    openDelay: 200,
    scrollParent: commentsNode,
  }}
>
  <slot />

  <svelte:fragment slot="tooltip" let:props>
    <UserInfo {...props} {currentUser} type={Type[type]} />
  </svelte:fragment>
</Context>
