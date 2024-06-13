<script lang="ts">
  import { CTX } from '$ui/core/Dialog/dialogs'
  import { setContext } from 'svelte'

  let { render, ...rest }: { render: any } = $props()

  const { Controller } = setContext(CTX, {
    Controller: {
      lock: () => {},
      lockWarn: () => {},
      unlock: () => {},

      close: () => {},
      resolve: () => {},
      reject: () => {},
    },
  })
</script>

<svelte:component this={render} resolve={Controller.resolve} reject={Controller.reject} {...rest}
></svelte:component>
