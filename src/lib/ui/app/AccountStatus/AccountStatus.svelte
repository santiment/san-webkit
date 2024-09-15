<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  const { currentUser, customer } = useCustomerCtx()
</script>

{#if currentUser.$$}
  {#if customer.$.plan}
    <div
      class={cn(
        'rounded-md px-3 py-1.5 uppercase',
        customer.$.isBusinessSubscription
          ? 'bg-blue-light-1 text-blue'
          : 'bg-orange-light-1 text-orange',
      )}
    >
      {customer.$.planName}
    </div>
  {:else}
    <Button href="/pricing" variant="fill" class="bg-orange hover:bg-orange-hover">
      {customer.$.isEligibleForSanbaseTrial ? 'Start Free 14-day Trial' : 'Upgrade'}
    </Button>
  {/if}
{:else}
  <Button href="/sign-up" variant="fill">Sign up</Button>
{/if}
