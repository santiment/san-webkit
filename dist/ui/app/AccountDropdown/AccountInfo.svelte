<script lang="ts">
  import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js'
  import { SANBASE_ORIGIN } from '../../../utils/links.js'
  import Button from '../../core/Button/index.js'

  import ProfileLink from '../ProfileLink/ProfileLink.svelte'

  const { customer, currentUser } = useCustomerCtx()
</script>

{#if currentUser.$$}
  {@const { planName, isEligibleForSanbaseTrial, trialDaysLeft, isTrialSubscription } = customer.$}
  {@const { isFree, isCustom, isBusinessSubscription } = customer.$}
  <section
    class="gap-2 px-5 pb-[14px] pt-4 column"
    style={isBusinessSubscription
      ? '--c-orange:var(--c-blue);--c-orange-hover:var(--c-blue-hover)'
      : ''}
  >
    <ProfileLink />

    <p class="text-xs font-medium text-waterloo">
      Plan: {planName || 'Free'}{isTrialSubscription ? ', Free Trial' : ''}
    </p>

    {#if isFree && isEligibleForSanbaseTrial}
      <Button
        variant="fill"
        class="w-max bg-orange hover:bg-orange-hover"
        href={SANBASE_ORIGIN + '/pricing'}
        data-source="account_dropdown"
      >
        Start Free 14-day Trial
      </Button>
    {:else if isFree || planName.includes('Pro')}
      <Button
        variant="fill"
        class="w-max bg-orange hover:bg-orange-hover"
        href={SANBASE_ORIGIN + '/pricing'}
        data-source="account_dropdown"
      >
        Upgrade
      </Button>
    {:else if !isCustom}
      <Button
        variant="fill"
        class="w-max bg-orange hover:bg-orange-hover"
        href={SANBASE_ORIGIN + '/pricing'}
        data-source="account_dropdown"
      >
        Learn about MAX
      </Button>
    {/if}

    {#if isTrialSubscription && trialDaysLeft !== null}
      <p class="-mt-1 text-orange">
        Free trial ends in: {trialDaysLeft} day{trialDaysLeft > 1 ? 's' : ''}
      </p>
    {:else if planName.includes('Pro')}
      <a
        href={SANBASE_ORIGIN + '/pricing'}
        class="-mt-1 text-orange"
        data-source="account_dropdown"
      >
        Learn about {planName}
      </a>
    {/if}
  </section>
{/if}
