<script context="module" lang="ts">
  import DeleteDialog from './DeleteDialog.svelte'
  import { dialogs } from '@/ui/Dialog'

  export const DELETE_MSG = 'The comment has been deleted.'
  export const showCommentDeleteDialog = (comment: SAN.Comment) =>
    dialogs.show<undefined | SAN.Comment>(DeleteDialog, { comment })
</script>

<script lang="ts">
  import { track } from '@/analytics'
  import Dialog from '@/ui/Dialog'
  import { deleteComment } from '@/api/comments/mutate'

  export let DialogPromise: SAN.DialogController
  export let comment: SAN.Comment

  let closeDialog
  let loading = false

  function onDelete() {
    if (loading) return

    loading = true

    deleteComment(comment.id).then(() => {
      comment.content = DELETE_MSG
      comment.user = {
        id: 0,
        avatarUrl: null,
        email: 'anonymous@santiment.net',
        username: 'anonymous',
      }

      track.event('comments_delete', { id: comment.id })
      DialogPromise.resolve(comment)
      closeDialog()
    })
  }
</script>

<Dialog {...$$props} bind:closeDialog title="Delete comment?">
  <div class="dialog-body column">
    Are you sure you want to delete this comment?
    <div class="row v-center mrg-l mrg--t">
      <button class="btn btn-2 border mrg-a mrg--l" on:click={closeDialog}>Cancel</button>

      <button on:click={onDelete} class:loading class="btn btn-1 btn--green mrg-l mrg--l">
        Delete comment
      </button>
    </div>
  </div>
</Dialog>
