<script lang="ts">
  import type { ComponentProps, ComponentType } from 'svelte'

  import { getContext } from 'svelte'
  import ShareDialog from '@/ui/Share/index.svelte'

  export let props: ComponentProps<ShareDialog>

  const Dialog = getContext<ComponentType>('Dialog')
</script>

<Dialog render={ShareDialog} {...props} />
