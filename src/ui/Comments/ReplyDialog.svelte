<script context="module" lang="ts">
  import { createLayoutComment } from '@/api/comments/mutate'
  import { showCommentFormDialog } from './CommentFormDialog.svelte'

  export function showCommentReplyDialog(entityId: number, parentId: number) {
    return showCommentFormDialog({
      title: 'Replying',
      label: 'Submit reply',
      onSubmit: (value) => createLayoutComment(entityId, value, parentId),
    })
  }
</script>
