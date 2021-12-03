<script lang="ts">
  import { getDatetime } from './utils'
  import Menu from './Menu.svelte'
  import RepliedTo from './RepliedTo.svelte'
  import { DELETE_MSG } from './DeleteDialog.svelte'
  import { showCommentReplyDialog } from './ReplyDialog.svelte'
  import Author from '../Author/svelte'
  import { dateDifferenceInWords } from '../../utils/dates'

  export let commentsFor: SAN.CommentsFor
  export let comment: SAN.Comment
  export let authorId: number
  export let currentUser: null | SAN.CurrentUser = null
  export let updateComments: any
  export let scrollToNewComment: () => void

  $: ({ content, insertedAt, editedAt, user, parentId } = comment)

  $: edited = editedAt ? 'Edited ' : ''
  $: time =
    edited +
    dateDifferenceInWords(new Date(edited ? (editedAt as string) : insertedAt))

  function onReply() {
    showCommentReplyDialog(commentsFor.id, comment.id)
      .then((newComment) => {
        if (!newComment) return
        updateComments((comments) => (comments.push(newComment), comments))
      })
      .then(scrollToNewComment)
  }

  function getCommentDate(
    insertedAt: string,
    editedAt: SAN.Comment['editedAt']
  ) {
    const insertedDate = getDatetime(insertedAt)
    return editedAt
      ? `Posted: ${insertedDate}
Edited: ${getDatetime(editedAt)}`
      : insertedDate
  }
</script>

{#if parentId}
  <RepliedTo id={comment.parentId} />
{/if}

<div class="comment mrg-l mrg--b" id="comment-{comment.id}">
  <div class="row v-center">
    <Author {user} class="mrg-a mrg--r $style.user">
      {#if comment.user.id === authorId}
        <br />
        <span class="author">Author</span>
      {/if}
    </Author>

    <div
      class="caption expl-tooltip"
      aria-label={getCommentDate(insertedAt, editedAt)}
    >
      {time}
    </div>
  </div>

  <div class="content mrg-s mrg--t">{content}</div>

  {#if currentUser}
    <div class="actions row v-center txt-m">
      {#if content !== DELETE_MSG}
        <button class="reply btn" on:click={onReply}>Reply</button>
      {/if}

      {#if currentUser.id === user.id}
        <Menu bind:comment />
      {/if}
    </div>
  {/if}
</div>

<style>
  .content {
    padding: 16px;
    background: var(--athens);
    border-radius: 8px;
    white-space: pre-line;
    word-break: break-word;
    transition: background 700ms;
    scroll-margin: 50px;
  }

  .actions {
    --color: var(--waterloo);
    --color-hover: var(--green);
    position: relative;
  }

  .user {
    max-width: 60%;
  }
  .author {
    font-size: 10px;
    line-height: 12px;
    color: var(--orange);
    padding: 3px 4px;
    border-radius: 4px;
    background: var(--orange-light-1);
  }

  .reply {
    padding: 6px 12px;
  }

  .expl-tooltip {
    --expl-white-space: pre;
    --expl-right: -2px;
    --expl-align-y: 24px;
  }
</style>
