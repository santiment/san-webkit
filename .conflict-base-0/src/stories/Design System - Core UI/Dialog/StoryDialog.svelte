<script lang="ts" generics="GComponent extends Component<any>">
  import { BROWSER } from 'esm-env'
  import type { Component, ComponentProps } from 'svelte'
  import { dialogs$ } from '$ui/core/Dialog/dialogs.js'

  type GProps = Omit<ComponentProps<GComponent>, 'Controller' | 'resolve' | 'reject'>
  let { render, ...rest }: { render: GComponent } & GProps = $props()

  const showDialog = dialogs$.new(render)

  if (BROWSER) showDialog(rest as any)
</script>
