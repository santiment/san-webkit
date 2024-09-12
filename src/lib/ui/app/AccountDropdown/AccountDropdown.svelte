<script lang="ts">
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import { onSupportClick } from '$lib/utils/support.js'
  import Button from '$ui/core/Button/index.js'
  import Switch from '$ui/core/Switch/index.js'
  import Tooltip from '$ui/core/Tooltip/index.js'
  import ProfilePicture from './ProfilePicture.svelte'

  let { version = '1.0.0' } = $props()

  const { customer, currentUser } = useCustomerCtx()
</script>

<Tooltip isOpened class="w-[240px] divide-y p-0 column">
  {#snippet children({ ref })}
    <ProfilePicture {ref}></ProfilePicture>
  {/snippet}

  {#snippet content()}
    {#if currentUser.$$}
      {@const { planName, isEligibleForSanbaseTrial, trialDaysLeft, isTrialSubscription } =
        customer.$}
      {@const { isFree, isCustom, isBusinessSubscription } = customer.$}
      <section
        class="!gap-2 !px-6 !pb-[14px] !pt-4"
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
          <Button variant="fill" class="w-max bg-orange hover:bg-orange-hover" href="/pricing">
            Start Free 14-day Trial
          </Button>
        {:else if isFree || planName.includes('Pro')}
          <Button variant="fill" class="w-max bg-orange hover:bg-orange-hover" href="/pricing">
            Upgrade
          </Button>
        {:else if !isCustom}
          <Button variant="fill" class="w-max bg-orange hover:bg-orange-hover" href="/pricing">
            Learn about MAX
          </Button>
        {/if}

        {#if isTrialSubscription}
          <p class="-mt-1 text-orange">
            Free trial ends in: {trialDaysLeft} day{trialDaysLeft > 1 ? 's' : ''}
          </p>
        {:else if planName.includes('Pro')}
          <a href="/pricing" class="-mt-1 text-orange">Learn about {planName}</a>
        {/if}
      </section>

      <section>
        <div class="px-3">
          Version: <span class="text-waterloo">{version}</span>
        </div>
      </section>

      <section>
        <Button variant="ghost" href="/account">Historical balance</Button>
        <Button variant="ghost" href="/account">Account settings</Button>
        <Button variant="ghost" href="/account">My profile</Button>
        <Button variant="ghost" href="/account">My watchlists</Button>
        <Button variant="ghost" href="/account">My insights</Button>
        <Button variant="fill" href="/account" class="ml-2 w-max">Write insight</Button>
      </section>
    {:else}
      <section>
        <Button variant="ghost" href="/login">Log in</Button>
      </section>
    {/if}

    <section>
      <Button as="label" variant="ghost" class="justify-between">
        Night mode
        <Switch></Switch>
      </Button>

      <Button variant="ghost" icon="sparkle" iconOnRight iconSize={12} class="fill-yellow-hover">
        Referral program
      </Button>

      <Button variant="ghost">Classic version</Button>

      <Button variant="ghost" href="mailto:support@santiment.net" onclick={onSupportClick}>
        Contact us
      </Button>

      {#if currentUser.$$}
        <Button variant="ghost" icon="logout" class="fill-waterloo hover:fill-red hover:text-red">
          Log out
        </Button>
      {/if}
    </section>
  {/snippet}
</Tooltip>

<style lang="postcss">
  section {
    @apply gap-0.5 px-3 py-2.5 column;
  }
</style>
