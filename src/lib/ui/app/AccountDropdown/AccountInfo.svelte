<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import Button from '$ui/core/Button/index.js'
  import ProfilePicture from './ProfilePicture.svelte'

  const { customer, currentUser } = useCustomerCtx()
</script>

{#if currentUser.$$}
  {@const { planName, isEligibleForSanbaseTrial, trialDaysLeft, isTrialSubscription } = customer.$}
  {@const { isFree, isCustom, isBusinessSubscription } = customer.$}
  <section
    class="gap-2 px-[22px] pb-[14px] pt-4 column"
    style={isBusinessSubscription
      ? '--c-orange:var(--c-blue);--c-orange-hover:var(--c-blue-hover)'
      : ''}
  >
    <div class="flex items-center gap-2">
      <ProfilePicture class="min-w-8"></ProfilePicture>

      <div class="min-w-0">
        <h4 class="font-medium text-rhino single-line">
          @{currentUser.$$.username}
        </h4>
        {#if currentUser.$$.email}
          <p class="text-xs text-waterloo single-line">
            {currentUser.$$.email}
          </p>
        {/if}
      </div>
    </div>

    <p class="text-xs font-medium text-waterloo">
      Plan: {planName || 'Free'}{isTrialSubscription ? ', Free Trial' : ''}
    </p>

    {#if isEligibleForSanbaseTrial}
      <Button
        variant="fill"
        class="w-max bg-orange hover:bg-orange-hover"
        href="/pricing"
        data-source="account_dropdown"
      >
        Start Free 14-day Trial
      </Button>
    {:else if isFree || planName.includes('Pro')}
      <Button
        variant="fill"
        class="w-max bg-orange hover:bg-orange-hover"
        href="/pricing"
        data-source="account_dropdown"
      >
        Upgrade
      </Button>
    {:else if !isCustom}
      <Button
        variant="fill"
        class="w-max bg-orange hover:bg-orange-hover"
        href="/pricing"
        data-source="account_dropdown"
      >
        Learn about MAX
      </Button>
    {/if}

    {#if isTrialSubscription}
      <p class="-mt-1 text-orange">
        Free trial ends in: {trialDaysLeft} day{trialDaysLeft > 1 ? 's' : ''}
      </p>
    {:else if planName.includes('Pro')}
      <a href="/pricing" class="-mt-1 text-orange" data-source="account_dropdown">
        Learn about {planName}
      </a>
    {/if}
  </section>
{/if}
