<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { dialogs$ } from '$ui/core/Dialog/dialogs.js'
  import Notifications from '$ui/core/Notifications/index.js'

  let { render, ...rest }: { render: any; rest: any } = $props()

  const showDialog = dialogs$.new(render)

  if (BROWSER) showDialog(rest)
</script>

<Notifications></Notifications>
