<script>
  import { newDialogCtx } from '@/ui/Dialog/ctx'
  import { DialogLock } from '@/ui/Dialog/types'

  export let render

  let DialogPromise

  new Promise((resolve, reject) => (DialogPromise = { resolve, reject, locking: DialogLock.FREE }))

  const DialogCtx = newDialogCtx(DialogPromise)
</script>

<svelte:component this={render} i={0} {DialogPromise} {DialogCtx} />
