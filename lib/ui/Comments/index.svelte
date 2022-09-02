<script>
  import { onDestroy } from 'svelte'
  import { track } from './../../analytics'
  import { queryComments } from './../../api/comments'
  import { createComment } from './../../api/comments/mutate'
  import Svg from './../../ui/Svg/svelte'
  import Editor from './../../ui/Editor'
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

  export let type
  export let commentsFor
  export let currentUser = null
  export let onNewComment
  export let onAnonComment = noop
  export let onCommentError = noop
  export let onCommentsLoaded = noop
  export let onCommentSubmitted = noop
  export let titleClass = 'body-2 txt-m'
  export let mapComment = (comment) => {
    comment.content = sanitize(comment.content)
    return comment
  }
  let comments = []
  let loading = false
  let commentsNode
  let editor

  const updateComments = (clb) => setComments(clb(comments))

  $: if (process.browser)
    queryComments(commentsFor.id, type).then(setComments).then(onCommentsLoaded)

  $: authorId = commentsFor.user.id

  function setComments(data) {
    comments = mapComment ? data.map(mapComment) : data
    onNewComment === null || onNewComment === void 0 ? void 0 : onNewComment(commentsFor, data)
  }

  function scrollToNewComment() {
    var _a

    const node =
      (_a = commentsNode.lastElementChild) === null || _a === void 0
        ? void 0
        : _a.querySelector('.content')
    removeHighlight = scrollToComment(node)
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
    createComment({
      id: commentsFor.id,
      content: value,
      type,
    })
      .then((comment) => {
        track.event('comments_new', {
          entity: commentsFor.id,
          type,
        })
        comments.push(comment)
        setComments(comments)
        editor.resetContent()
        clearSavedComment()
        onCommentSubmitted === null || onCommentSubmitted === void 0
          ? void 0
          : onCommentSubmitted(comment)
      })
      .then(scrollToNewComment)
      .catch(onCommentError)
      .then(() => (loading = false))
  }

  setGetRepliedToCommentContext(getRepliedToComment)

  function getRepliedToComment(id) {
    return comments.find((comment) => comment.id === id)
  }

  let removeHighlight
  setScrollToCommentContext(onRepliedToClick)

  function onRepliedToClick(e) {
    e.preventDefault()
    e.stopImmediatePropagation()
    const href = e.currentTarget.getAttribute('href')
    const comment = findCommentNode(commentsNode, href || '')
    removeHighlight = scrollToComment(comment, removeHighlight)
  }

  onDestroy(() => {
    removeHighlight === null || removeHighlight === void 0 ? void 0 : removeHighlight()
  })
</script>

<h4 class={titleClass}>Conversations ({comments.length})</h4>

<form class="row mrg-l mrg--t" on:submit|preventDefault={onSubmit}>
  <Editor
    isComments
    bind:editor
    class="border fluid input-2-Q5_1"
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
  :global(.input-2-Q5_1) {
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
