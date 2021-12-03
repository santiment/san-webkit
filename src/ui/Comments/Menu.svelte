<script lang="ts">
  import { showCommentDeleteDialog } from './DeleteDialog.svelte'
  import { showCommentEditDialog } from './EditDialog.svelte'
  import Svg from '../Svg/svelte'
  import Tooltip from '../Tooltip/svelte'

  let className = ''
  export { className as class }
  export let comment: SAN.Comment

  function onCommentEdit() {
    showCommentEditDialog(comment).then(
      (edited) => edited && (comment = edited)
    )
  }

  function onCommentDelete() {
    showCommentDeleteDialog(comment).then(
      (deleted) => deleted && (comment = deleted)
    )
  }
</script>

<Tooltip
  on="click"
  duration={0}
  position="top"
  align="end"
  activeClass="$style.active"
>
  <button slot="trigger" class="btn row hv-center mrg-a mrg--l {className}"
    ><Svg id="horz-dots" w="16" h="4" /></button
  >

  <div slot="tooltip" class="tooltip">
    <div class="btn btn--ghost" on:click={onCommentEdit}>Edit</div>
    <div class="btn btn--ghost" on:click={onCommentDelete}>Delete</div>
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
