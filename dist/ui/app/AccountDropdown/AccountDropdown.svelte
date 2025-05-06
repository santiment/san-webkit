<script lang="ts">
  import { type ComponentProps } from 'svelte'

  import { trackEvent } from '../../../analytics/index.js'
  import { useCustomerCtx } from '../../../ctx/customer/index.js'
  import { useUiCtx } from '../../../ctx/ui/index.js'
  import { onSupportClick } from '../../../utils/support.js'
  import Button from '../../core/Button/index.js'
  import Switch from '../../core/Switch/index.js'
  import Tooltip from '../../core/Tooltip/index.js'
  import { useLogoutFlow } from '../../../flow/logout/index.js'
  import { SANBASE_ORIGIN } from '../../../utils/links.js'

  import ProfilePicture from './ProfilePicture.svelte'
  import AccountInfo from './AccountInfo.svelte'

  type TProps = {
    class?: string
    version?: string
    onClassicClick?: () => void
    onLogout?: () => void
  }

  let { class: className, version = '1.0.0', onClassicClick, onLogout }: TProps = $props()

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
      <AccountInfo></AccountInfo>

      <section>
        <div class="px-2.5">
          Version: <span class="text-waterloo">{version}</span>
        </div>
      </section>

      <section>
        {@render sanbaseLink('My profile', `/profile/${currentUser.$$.id}`)}

        {@render sanbaseLink('Account settings', '/account')}
      </section>

      <section>
        {@render sanbaseLink('My alerts', '/alerts')}

        {@render sanbaseLink('My watchlists', '/watchlists')}

        {@render sanbaseLink('My insights', '/insights/my')}

        {@render sanbaseLink('Write insight', '/insights/new', {
          variant: 'fill',
          class: 'ml-2.5 w-max',
        })}
      </section>
    {:else}
      <section>
        {@render sanbaseLink('Sign up', '/sign-up', {
          icon: 'user',
          class: 'fill-green text-green',
        })}
      </section>
    {/if}

    <section>
      <Button as="label" variant="ghost" class="justify-between">
        Night mode
        <Switch checked={ui.$$.isNightMode} onCheckedChange={ui.toggleNightMode}></Switch>
      </Button>

      {@render sanbaseLink('Referral Program', '/account#affiliate', {
        icon: 'sparkle',
        iconOnRight: true,
        iconSize: 12,
        class: 'fill-yellow-hover',
      })}

      {@render sanbaseLink('Historical balance', '/labs/balance')}

      {#if onClassicClick}
        <Button variant="ghost" onclick={onClassicClick}>Classic version</Button>
      {/if}

      {@render sanbaseLink('Contact us', 'mailto:support@santiment.net', {
        onclick: onSupportClick,
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

{#snippet sanbaseLink(text: string, href: string, props: ComponentProps<typeof Button> = {})}
  <Button variant="ghost" {...props} href={SANBASE_ORIGIN + href} data-source="account_dropdown"
    >{text}</Button
  >
{/snippet}

<style>
  section {
    gap: 0.125rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    display: flex;
    flex-direction: column
}
</style>
