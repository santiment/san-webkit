<script>
  import { getContext } from 'svelte'
  import PaymentDialog from '@/ui/PaymentDialog/index.svelte'

  const Dialog = getContext('Dialog')
</script>

<Dialog render={PaymentDialog} />

<style>
</style>
