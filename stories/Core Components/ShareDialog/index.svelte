<script lang="ts">
  import { showShareDialog } from '@/ui/Share/index.svelte'
  import OnMount from './OnMount.svelte'

  export let props: Parameters<typeof showShareDialog>[0]
</script>

<OnMount run={() => showShareDialog(props)} />
