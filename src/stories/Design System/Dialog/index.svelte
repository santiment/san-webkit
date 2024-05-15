<script>
  import { showDialog$ } from './Dialog.svelte'

  const showDialog = showDialog$()
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showDialog()}>Open</button>
  </div>
</div>
