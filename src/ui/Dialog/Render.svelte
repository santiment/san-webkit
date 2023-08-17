<script lang="ts">
  import type { ComponentType } from 'svelte'

  import { getAllContexts } from 'svelte'

  export let Component: ComponentType
  export let props: Record<string, unknown>
  export let i: number

  if (props.CTX) {
    const CTX = getAllContexts()
    const capturedCtx = props.CTX as typeof CTX

    capturedCtx.forEach((value, key) => {
      CTX.set(key, value)
    })
  }
</script>

<svelte:component this={Component} {...props} {i} />
