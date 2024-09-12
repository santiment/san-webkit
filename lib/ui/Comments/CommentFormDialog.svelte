<script context="module">import { dialogs } from './../../ui/Dialog';
import CommentFormDialog from './CommentFormDialog.svelte';
export const showCommentFormDialog = (props) => dialogs.show(CommentFormDialog, Object.assign({ strict: true }, props));
</script>

<script>import Dialog from './../../ui/Dialog';
import Editor from './../../ui/Editor';
export let DialogPromise;
export let title;
export let value = '';
export let label = 'Submit';
let onFormSubmit;
export { onFormSubmit as onSubmit };
let closeDialog;
let loading = false;
let editor;
function onSubmit() {
    if (loading)
        return;
    loading = true;
    const value = editor.serialize();
    if (!value)
        return;
    onFormSubmit(value).then((comment) => {
        DialogPromise.resolve(comment);
        closeDialog();
    });
}
</script>

<Dialog {...$$props} {title} bind:closeDialog>
  <form class="dialog-body column" on:submit|preventDefault={onSubmit}>
    <Editor
      isComments
      bind:editor
      html={value}
      class="input input-3t0EP3"
      placeholder="Type your comment here"
    />

    <div class="row v-center mrg-l mrg--t">
      <button class="btn btn-2 border mrg-a mrg--l" on:click={closeDialog}>Cancel</button>

      <button type="submit" class:loading class="btn btn-1 btn--green mrg-l mrg--l">
        {label}
      </button>
    </div>
  </form>
</Dialog>

<style>
  :global(.input-3t0EP3) {
    padding: 9px 12px;
    min-height: 40px;
    width: 400px;
  }
</style>
