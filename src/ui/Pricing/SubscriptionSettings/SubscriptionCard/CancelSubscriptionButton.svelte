<script lang="ts">
  import { showCancelSubscriptionDialog } from '../../CancelSubscriptionDialog'
</script>

<button class="btn-2 mrg--l mrg-m" on:click={() => showCancelSubscriptionDialog()}
  >Cancel Subscription</button
>

<style lang="scss">
  .btn-2 {
    --bg: var(--white);
  }
</style>
