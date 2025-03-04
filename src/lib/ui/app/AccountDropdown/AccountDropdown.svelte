<script lang="ts">
  import { type ComponentProps } from 'svelte'

  import { trackEvent } from '$lib/analytics/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { useUiCtx } from '$lib/ctx/ui/index.js'
  import { onSupportClick } from '$lib/utils/support.js'
  import Button from '$ui/core/Button/index.js'
  import Switch from '$ui/core/Switch/index.js'
  import Tooltip from '$ui/core/Tooltip/index.js'
  import { useLogoutFlow } from '$lib/flow/logout/index.js'
  import { SANBASE_ORIGIN } from '$lib/utils/links.js'

  import ProfilePicture from './ProfilePicture.svelte'
  import AccountInfo from './AccountInfo.svelte'

  type TProps = {
    class?: string
    version?: string
    onClassicClick?: () => void
    onLogout?: () => void
    prependOrigin?: boolean
  }

  let {
    class: className,
    version = '1.0.0',
    onClassicClick,
    onLogout,
    prependOrigin = false,
  }: TProps = $props()

  const { currentUser } = useCustomerCtx()
  const { ui } = useUiCtx()
  const { startLogout } = useLogoutFlow()

  function onLogoutClick() {
    trackEvent('logout', { timestamp: Date.now() })
    startLogout().then(onLogout)
  }
</script>

<Tooltip class="z-[100] w-[240px] divide-y overflow-auto p-0 column">
  {#snippet children({ ref })}
    <ProfilePicture class={className} {ref}></ProfilePicture>
  {/snippet}

  {#snippet content({ close })}
    {#if currentUser.$$}
      <AccountInfo {prependOrigin}></AccountInfo>

      <section>
        <div class="px-2.5">
          Version: <span class="text-waterloo">{version}</span>
        </div>
      </section>

      <section>
        {@render sanbaseLink('My profile', `/profile/${currentUser.$$.id}`, { prependOrigin })}

        {@render sanbaseLink('Account settings', '/account', { prependOrigin })}
      </section>

      <section>
        {@render sanbaseLink('My alerts', '/alerts', { prependOrigin })}

        {@render sanbaseLink('My watchlists', '/watchlists', { prependOrigin })}

        {@render sanbaseLink('My insights', '/insights/my', { prependOrigin })}

        {@render sanbaseLink('Write insight', '/insights/new', {
          variant: 'fill',
          class: 'ml-2.5 w-max',
          prependOrigin,
        })}
      </section>
    {:else}
      <section>
        {@render sanbaseLink('Sign up', '/sign-up', {
          icon: 'user',
          class: 'fill-green text-green',
          prependOrigin,
        })}
      </section>
    {/if}

    <section>
      <Button as="label" variant="ghost" class="justify-between">
        Night mode
        <Switch checked={ui.$$.isNightMode} onCheckedChange={ui.toggleNightMode}></Switch>
      </Button>

      {@render sanbaseLink('Referral Program', '/account#affiliate', {
        prependOrigin,
        icon: 'sparkle',
        iconOnRight: true,
        iconSize: 12,
        class: 'fill-yellow-hover',
      })}

      {@render sanbaseLink('Historical balance', '/labs/balance', { prependOrigin })}

      {#if onClassicClick}
        <Button variant="ghost" onclick={onClassicClick}>Classic version</Button>
      {/if}

      {@render sanbaseLink('Contact us', 'mailto:support@santiment.net', {
        onclick: onSupportClick,
        prependOrigin: false,
      })}

      {#if currentUser.$$}
        <Button
          variant="ghost"
          icon="logout"
          class="fill-waterloo hover:fill-red hover:text-red"
          onclick={() => (close(), onLogoutClick())}
        >
          Log out
        </Button>
      {/if}
    </section>
  {/snippet}
</Tooltip>

{#snippet sanbaseLink(
  text: string,
  href: string,
  props: ComponentProps<typeof Button> & { prependOrigin?: boolean } = { prependOrigin: false },
)}
  <Button
    variant="ghost"
    {...props}
    href={props.prependOrigin ? SANBASE_ORIGIN + href : href}
    data-source="account_dropdown">{text}</Button
  >
{/snippet}

<style lang="postcss">
  section {
    @apply gap-0.5 px-3 py-2.5 column;
  }
</style>
