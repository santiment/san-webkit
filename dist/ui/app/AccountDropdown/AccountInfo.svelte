<script lang="ts">
  import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js'
  import Button from '../../core/Button/index.js'
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
    <div class="relative flex items-center gap-2">
      <ProfilePicture as="div" class="min-w-8"></ProfilePicture>

      <div class="min-w-0 single-line">
        <a href={'/profile/' + currentUser.$$.id} class="font-medium text-rhino link-as-bg">
          @{currentUser.$$.username}
        </a>

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
