<script>import Author from './../../ui/Profile/svelte';
import { dateDifferenceInWords } from './../../utils/dates';
import { markdownToHTML } from './../../ui/Editor/markdown';
import Menu from './Menu.svelte';
import RepliedTo from './RepliedTo.svelte';
import { DELETE_MSG } from './DeleteDialog.svelte';
import { showCommentReplyDialog } from './ReplyDialog.svelte';
import { getDatetime } from './utils';
export let type;
export let commentsFor;
export let comment;
export let authorId;
export let currentUser = null;
export let updateComments;
export let scrollToNewComment;
export let commentsNode;
$: ({ content, insertedAt, editedAt, user, parentId } = comment);
$: edited = editedAt ? 'Edited ' : '';
$: time = edited + dateDifferenceInWords(new Date(edited ? editedAt : insertedAt));
$: html = markdownToHTML(content);
function onReply() {
    showCommentReplyDialog(commentsFor.id, comment.id, type)
        .then((newComment) => {
        if (!newComment)
            return;
        updateComments((comments) => (comments.push(newComment), comments));
    })
        .then(scrollToNewComment);
}
function getCommentDate(insertedAt, editedAt) {
    const insertedDate = getDatetime(insertedAt);
    return editedAt
        ? `Posted: ${insertedDate}
Edited: ${getDatetime(editedAt)}`
        : insertedDate;
}
</script>

{#if parentId}
  <RepliedTo id={comment.parentId} />
{/if}

<div class="comment mrg-l mrg--b" id="comment-{comment.id}">
  <div class="row v-center">
    <Author {user} class="mrg-a mrg--r user-NCtKB5">
      {#if comment.user.id === authorId}
        <br />
        <span class="author">Author</span>
      {/if}
    </Author>

    <div class="caption expl-tooltip" aria-label={getCommentDate(insertedAt, editedAt)}>
      {time}
    </div>
  </div>

  <div class="content mrg-s mrg--t">{@html html}</div>

  {#if currentUser}
    <div class="actions row v-center txt-m">
      {#if content !== DELETE_MSG}
        <button class="reply btn" on:click={onReply}>Reply</button>
      {/if}

      {#if currentUser.id === user.id}
        <Menu bind:comment {commentsNode} />
      {/if}
    </div>
  {/if}
</div>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.content {
  padding: 16px;
  background: var(--athens);
  border-radius: 8px;
  word-break: break-word;
  transition: background 700ms;
  scroll-margin: 50px;
}
.content :global(a) {
  color: var(--green);
}
.content :global(a:hover) {
  color: var(--green-hover);
}
.content :global(strong),
.content :global(b) {
  font-weight: bold;
}

.actions {
  --color: var(--waterloo);
  --color-hover: var(--green);
  position: relative;
}

:global(.user-NCtKB5) {
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
}</style>
