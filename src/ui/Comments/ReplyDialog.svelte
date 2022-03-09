<script context="module" lang="ts">
  import type { CommentsType } from '@/api/comments'
  import { createComment } from '@/api/comments/mutate'
  import { showCommentFormDialog } from './CommentFormDialog.svelte'

  export function showCommentReplyDialog(entityId: number, parentId: number, type: CommentsType) {
    return showCommentFormDialog({
      title: 'Replying',
      label: 'Submit reply',
      onSubmit: (value) => createComment({ id: entityId, content: value, parentId, type }),
    })
  }
</script>
