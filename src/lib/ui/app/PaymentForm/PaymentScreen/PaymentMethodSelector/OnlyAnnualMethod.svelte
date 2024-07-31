<script lang="ts">
  import type { Snippet } from 'svelte'

  import Note from '../../Note.svelte'
  import { usePaymentFormCtx } from '../../state.js'

  let { children }: { children: Snippet } = $props()

  const { paymentForm } = usePaymentFormCtx()
</script>

{#if paymentForm.$.billingPeriod === 'year'}
  {@render children()}
{:else}
  <Note>
    This payment method is available only for annual subscriptions. Please select a different
    payment method for trial or monthly subscriptions
  </Note>
{/if}
