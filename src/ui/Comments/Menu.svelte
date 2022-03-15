<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import { markdownToPlainText } from '@/ui/Editor/markdown'
  import { showCommentDeleteDialog } from './DeleteDialog.svelte'
  import { showCommentEditDialog } from './EditDialog.svelte'
  import { getUserInfoTooltipHook } from './Tooltips/UserInfoCtx.svelte'

  let className = ''
  export { className as class }
  export let comment: SAN.Comment
  export let commentsNode: HTMLDivElement

  const hookUserInfoTooltip = getUserInfoTooltipHook()

  function onCommentEdit() {
    showCommentEditDialog(comment)
      .then((edited) => edited && (comment = edited))
      .then(() => updateReplies(true))
      .then(() => {
        const commentNode = commentsNode.querySelector(`#comment-${comment.id} .content`)
        if (commentNode) hookUserInfoTooltip(commentNode)
      })
  }

  function onCommentDelete() {
    showCommentDeleteDialog(comment)
      .then((deleted) => deleted && (comment = deleted))
      .then(() => updateReplies(false))
  }

  function updateReplies(isWithTagname = true) {
    const id = '#comment-' + comment.id
    Array.from(commentsNode.querySelectorAll(`a[href="${id}"]`)).forEach((commentNode) => {
      const reply = commentNode.firstChild
      if (!reply) return

      const authorNode = reply.firstChild?.lastChild
      const textNode = reply.lastChild

      if (textNode) textNode.textContent = markdownToPlainText(comment.content)
      if (authorNode) {
        authorNode.textContent = (isWithTagname ? '@' : '') + comment.user.username
      }
    })
  }
</script>

<Tooltip on="click" duration={0} position="top" align="end" activeClass="$style.active">
  <button slot="trigger" class="btn row hv-center mrg-a mrg--l {className}"
    ><Svg id="horz-dots" w="16" h="4" /></button>

  <div slot="tooltip" class="tooltip">
    <div class="btn-ghost" on:click={onCommentEdit}>Edit</div>
    <div class="btn-ghost" on:click={onCommentDelete}>Delete</div>
  </div>
</Tooltip>

<style>
  button {
    width: 32px;
    height: 32px;
  }
  .active {
    --bg: var(--green-light-1);
    --color: var(--green);
    --color-hover: var(--green-hover);
  }

  .tooltip {
    padding: 8px;
  }
</style>
