<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { getContext } from 'svelte'
  import PaymentDialog from '@/ui/PaymentDialog/index.svelte'

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface $$Props extends Partial<ComponentProps<PaymentDialog>> {}

  const Dialog = getContext('Dialog') as any
</script>

<Dialog render={PaymentDialog} {...$$props} />

<style>
</style>
