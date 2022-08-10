<script>
  import { showCancelSubscriptionDialog } from '../../CancelSubscriptionDialog'
</script>

<button class="btn-2 mrg-m mrg--l" on:click={() => showCancelSubscriptionDialog()}
  >Cancel Subscription</button
>

<style>
  .btn-2 {
    --bg: var(--white);
  }
</style>
