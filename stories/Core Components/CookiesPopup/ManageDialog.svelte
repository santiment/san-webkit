<script context="module"></script>

<script lang="ts">
  import type { ComponentType } from 'svelte'

  import { getContext } from 'svelte'
  import ManageCookiesDialog from '@/ui/ManageCookiesDialog/index.svelte'

  const Dialog = getContext<ComponentType>('Dialog')
</script>

<Dialog render={ManageCookiesDialog} />
