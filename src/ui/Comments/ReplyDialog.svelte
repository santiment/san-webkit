<script context="module" lang="ts">
  import { showCommentFormDialog } from './CommentFormDialog.svelte'
  import { createLayoutComment } from '../../api/comments/mutate'

  export function showCommentReplyDialog(entityId: number, parentId: number) {
    return showCommentFormDialog({
      title: 'Replying',
      label: 'Submit reply',
      onSubmit: (value) => createLayoutComment(entityId, value, parentId),
    })
  }
</script>
