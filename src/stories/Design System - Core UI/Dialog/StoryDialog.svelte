<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { dialogs$ } from '$ui/core/Dialog/dialogs.js'

  let { render, ...rest }: { render: any; rest: any } = $props()

  const showDialog = dialogs$.new(render)

  if (BROWSER) showDialog(rest)
</script>
