<script context="module" lang="ts">
  import { updateComment } from '@/api/comments/mutate'
  import { markdownToHTML } from '../Editor/markdown'
  import { showCommentFormDialog } from './CommentFormDialog.svelte'

  export function showCommentEditDialog(comment: SAN.Comment) {
    return showCommentFormDialog({
      title: 'Update comment',
      label: 'Update comment',
      value: markdownToHTML(comment.content),
      onSubmit: (value) =>
        updateComment(comment.id, value).then(() => {
          comment.content = value
          comment.editedAt = new Date().toISOString()
          return comment
        }),
    })
  }
</script>
