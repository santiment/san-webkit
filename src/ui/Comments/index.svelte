<script lang="ts">
  import { onDestroy } from 'svelte'
  import { track } from '@/analytics'
  import { CommentsType, queryComments } from '@/api/comments'
  import { createComment } from '@/api/comments/mutate'
  import Svg from '@/ui/Svg/svelte'
  import Editor from '@/ui/Editor'
  import Comment from './Comment.svelte'
  import UserInfoTooltipCtx from './Tooltips/UserInfoCtx.svelte'
  import {
    findCommentNode,
    scrollToComment,
    saveComment,
    clearSavedComment,
    sanitize,
  } from './utils'
  import { setScrollToCommentContext, setGetRepliedToCommentContext } from './context'

  const noop = () => {}

  export let type: CommentsType
  export let commentsFor: SAN.CommentsFor
  export let currentUser: null | SAN.CurrentUser = null
  export let onNewComment: (commentsFor: SAN.CommentsFor, comments: SAN.Comment[]) => void
  export let onAnonComment: () => void = noop
  export let onCommentError = noop
  export let onCommentsLoaded = noop
  export let onCommentSubmitted: (comment: SAN.Comment) => void = noop
  export let titleClass = 'body-2 txt-m'
  export let mapComment = (comment: SAN.Comment) => {
    comment.content = sanitize(comment.content)
    return comment
  }

  let comments = [] as SAN.Comment[]
  let loading = false
  let commentsNode: HTMLElement
  let editor

  const updateComments = (clb: (comments: SAN.Comment[]) => SAN.Comment[]) =>
    setComments(clb(comments))

  $: if (process.browser)
    queryComments(commentsFor.id, type).then(setComments).then(onCommentsLoaded)
  $: authorId = commentsFor.user.id

  function setComments(data: SAN.Comment[]) {
    comments = mapComment ? data.map(mapComment) : data
    onNewComment?.(commentsFor, data)
  }

  function scrollToNewComment() {
    const node = commentsNode.lastElementChild?.querySelector('.content')
    removeHighlight = scrollToComment(node as HTMLElement)
  }

  function onSubmit() {
    if (!commentsFor || loading) return

    const value = editor.serialize()
    if (!value) return

    if (!currentUser) {
      saveComment(type, commentsFor.id, value, commentsFor.title)
      editor.resetContent()
      return onAnonComment()
    }

    loading = true

    createComment({ id: commentsFor.id, content: value, type })
      .then((comment) => {
        track.event('comments_new', { entity: commentsFor.id, type })

        comments.push(comment)
        setComments(comments)
        editor.resetContent()
        clearSavedComment()
        onCommentSubmitted?.(comment)
      })
      .then(scrollToNewComment)
      .catch(onCommentError)
      .then(() => (loading = false))
  }

  setGetRepliedToCommentContext(getRepliedToComment)
  function getRepliedToComment(id: number) {
    return comments.find((comment) => comment.id === id)
  }

  let removeHighlight: undefined | (() => void)
  setScrollToCommentContext(onRepliedToClick)
  function onRepliedToClick(e: MouseEvent): void {
    e.preventDefault()
    e.stopImmediatePropagation()

    const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
    const comment = findCommentNode(commentsNode, href || '')
    removeHighlight = scrollToComment(comment, removeHighlight)
  }

  onDestroy(() => {
    removeHighlight?.()
  })
</script>

<h4 class={titleClass}>Conversations ({comments.length})</h4>

<form class="row mrg-l mrg--t" on:submit|preventDefault={onSubmit}>
  <Editor
    isComments
    bind:editor
    class="border fluid $style.input"
    placeholder="Type your comment here"
  />

  <button type="submit" class:loading class="btn btn-1 btn--green mrg-l mrg--l">
    {currentUser ? 'Post' : 'Sign up to post'}
  </button>
</form>

<div bind:this={commentsNode} class="comments mrg-l mrg--t">
  <UserInfoTooltipCtx {type} {comments} {commentsNode} {currentUser}>
    {#each comments as comment (comment.id)}
      <Comment
        {type}
        {commentsNode}
        {commentsFor}
        {comment}
        {authorId}
        {currentUser}
        {updateComments}
        {scrollToNewComment}
      />
    {:else}
      <div class="column hv-center">
        <Svg illus id="comment-bubble" w="128" h="98" />
        <div class="body-2 txt-m mrg-xl mrg--t">No comments yet</div>
        Be the first to comment
      </div>
    {/each}
  </UserInfoTooltipCtx>
</div>

<style>
  .input {
    padding: 5px 10px;
    min-height: 32px;
    min-height: 100%;
  }

  .comments {
    overflow: auto;
    overflow-x: hidden;
    margin-right: -8px;
    padding-right: 8px;
    flex: 1;
  }

  .column {
    height: 100%;
  }

  button {
    max-height: 52px;
  }
</style>
