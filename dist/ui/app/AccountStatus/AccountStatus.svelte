<script lang="ts">
  import { useCustomerCtx } from '../../../ctx/customer/index.js'
  import Button from '../../core/Button/index.js'
  import { cn } from '../../utils/index.js'

  const { currentUser, customer } = useCustomerCtx()
</script>

{#if currentUser.$$}
  {#if customer.$.plan}
    <div
      class={cn(
        'relative rounded-md px-3 py-1.5 uppercase',
        customer.$.isBusinessSubscription
          ? 'bg-blue-light-1 text-blue'
          : 'bg-orange-light-1 text-orange',
      )}
    >
      {customer.$.planName}
      {#if customer.$.isIncompleteSubscription}
        <a
          href="/account#subscription"
          class="link-as-bg"
          data-type="update_billing"
          data-source="account_status"
        >
          (Incomplete)
        </a>
      {/if}
    </div>
  {:else}
    <Button href="/pricing" variant="fill" class="bg-orange hover:bg-orange-hover">
      {customer.$.isEligibleForSanbaseTrial ? 'Start Free 14-day Trial' : 'Upgrade'}
    </Button>
  {/if}
{:else}
  <Button href="/login" variant="fill">Log in</Button>
{/if}
