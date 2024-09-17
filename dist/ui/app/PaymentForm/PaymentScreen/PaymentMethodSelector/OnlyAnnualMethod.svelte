<script lang="ts">import Note from "../../Note.svelte";
import { usePaymentFormCtx } from "../../state.js";
let { children } = $props();
const { billingPeriod } = usePaymentFormCtx();
</script>

{#if billingPeriod.$ === 'year'}
  {@render children()}
{:else}
  <Note>
    This payment method is available only for annual subscriptions. Please select a different
    payment method for trial or monthly subscriptions
  </Note>
{/if}
