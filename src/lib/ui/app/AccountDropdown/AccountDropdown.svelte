<script lang="ts">
  import { type ComponentProps } from 'svelte'

  import { trackEvent } from '$lib/analytics/index.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import { useUiCtx } from '$lib/ctx/ui/index.js'
  import Button from '$ui/core/Button/index.js'
  import Switch from '$ui/core/Switch/index.js'
  import Tooltip from '$ui/core/Tooltip/index.js'
  import { useLogoutFlow } from '$lib/flow/logout/index.js'
  import { SANBASE_ORIGIN } from '$lib/utils/links.js'
  import { cn } from '$ui/utils/index.js'

  import ProfilePicture from './ProfilePicture.svelte'
  import AccountInfo from './AccountInfo.svelte'

  type TProps = {
    class?: string
    version?: string
    onAcknowledgmentsClick?: () => void
    onLogout?: () => void
  }

  let { class: className, version = '1.0.0', onAcknowledgmentsClick, onLogout }: TProps = $props()

  const { currentUser } = useCustomerCtx()
  const { ui } = useUiCtx()
  const { startLogout } = useLogoutFlow()

  function onLogoutClick() {
    trackEvent('logout', { timestamp: Date.now() })
    startLogout().then(onLogout)
  }
</script>

<Tooltip class="z-[100] w-[240px] divide-y overflow-auto p-0 text-fiord column">
  {#snippet children({ ref })}
    <ProfilePicture class={className} {ref}></ProfilePicture>
  {/snippet}

  {#snippet content({ close })}
    {#if currentUser.$$}
      <AccountInfo></AccountInfo>

      <section class="px-5 py-2.5">
        Version: <span class="text-waterloo">{version}</span>
      </section>

      <section class="flex flex-col gap-1 px-3 py-1">
        {@render sanbaseLink('My profile', `/profile/${currentUser.$$.id}`)}

        {@render sanbaseLink('Account settings', '/account')}
      </section>

      <section class="flex flex-col gap-1 px-3 pb-2.5 pt-2">
        {@render sanbaseLink('My alerts', '/alerts')}

        {@render sanbaseLink('My watchlists', '/watchlists')}

        {@render sanbaseLink('My insights', '/insights/my')}

        {@render sanbaseLink('Write insight', '/insights/new', {
          variant: 'fill',
          class: 'text-white-day hover:text-white-day ml-2.5 w-max px-5',
        })}
      </section>
    {:else}
      <section class="flex flex-col px-3 py-2.5">
        {@render sanbaseLink('Sign up', '/sign-up', {
          icon: 'user',
          class: 'fill-green text-green',
        })}
      </section>
    {/if}

    <section class="flex flex-col gap-1 px-3 py-2.5">
      <Button as="label" variant="ghost" class="justify-between hover:text-rhino">
        Night mode
        <Switch checked={ui.$$.isNightMode} onCheckedChange={ui.toggleNightMode}></Switch>
      </Button>

      {#if onAcknowledgmentsClick}
        <Button class="hover:text-rhino" variant="ghost" onclick={onAcknowledgmentsClick}>
          Acknowledgments
        </Button>
      {/if}

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
  { class: className, ...props }: ComponentProps<typeof Button> = {},
)}
  <Button
    variant="ghost"
    class={cn('px-2 hover:text-rhino', className)}
    {...props}
    href={SANBASE_ORIGIN + href}
    data-source="account_dropdown"
  >
    {text}
  </Button>
{/snippet}
