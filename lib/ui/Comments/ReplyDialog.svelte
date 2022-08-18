<script context="module">import { createComment } from './../../api/comments/mutate';
import { track } from './../../analytics';
import { showCommentFormDialog } from './CommentFormDialog.svelte';
export function showCommentReplyDialog(entityId, parentId, type) {
  return showCommentFormDialog({
    title: 'Replying',
    label: 'Submit reply',
    onSubmit: value => {
      track.event('comments_reply', {
        entity: entityId,
        parent: parentId,
        type
      });
      return createComment({
        id: entityId,
        content: value,
        parentId,
        type
      });
    }
  });
}</script>
