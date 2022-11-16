<script context="module">import { track } from './../../analytics';
import { updateComment } from './../../api/comments/mutate';
import { markdownToHTML } from '../Editor/markdown';
import { showCommentFormDialog } from './CommentFormDialog.svelte';
export function showCommentEditDialog(comment) {
  return showCommentFormDialog({
    title: 'Update comment',
    label: 'Update comment',
    value: markdownToHTML(comment.content),
    onSubmit: value => updateComment(comment.id, value).then(() => {
      track.event('comments_edit', {
        category: 'Interaction',
        id: comment.id
      });
      comment.content = value;
      comment.editedAt = new Date().toISOString();
      return comment;
    })
  });
}</script>
